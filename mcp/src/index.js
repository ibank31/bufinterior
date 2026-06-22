/**
 * buf-google-mcp
 * Server MCP remote (Cloudflare Workers) untuk GA4 + Google Search Console.
 * Transport: Streamable HTTP (JSON-RPC via POST). READ-ONLY.
 *
 * Secrets (set di Cloudflare, JANGAN ditaruh di kode/repo):
 *   GOOGLE_SA_KEY   : isi penuh file JSON service account Google
 *   MCP_AUTH_TOKEN  : token rahasia; klien (Notion) harus kirim header
 *                     "Authorization: Bearer <token>"
 * Variables opsional (boleh di wrangler.toml, bukan rahasia):
 *   DEFAULT_GA4_PROPERTY_ID : property GA4 default (angka) bila tool dipanggil tanpa property_id
 *   DEFAULT_GSC_SITE        : site GSC default, mis. "sc-domain:bufinterior.my.id"
 */

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPES = [
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/webmasters.readonly",
].join(" ");
const PROTOCOL_VERSION = "2025-06-18";

let tokenCache = { token: null, exp: 0 };

// ---------- base64url ----------
function bytesToB64url(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function strToB64url(str) {
  return bytesToB64url(new TextEncoder().encode(str));
}

// ---------- Google service-account auth ----------
async function importPrivateKey(pem) {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const der = Uint8Array.from(atob(body), (c) => c.charCodeAt(0));
  return crypto.subtle.importKey(
    "pkcs8",
    der.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function getAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  if (tokenCache.token && tokenCache.exp - 60 > now) return tokenCache.token;
  if (!env.GOOGLE_SA_KEY) throw new Error("GOOGLE_SA_KEY belum di-set");
  const sa = JSON.parse(env.GOOGLE_SA_KEY);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: sa.client_email,
    scope: SCOPES,
    aud: GOOGLE_TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const unsigned =
    strToB64url(JSON.stringify(header)) + "." + strToB64url(JSON.stringify(claim));
  const key = await importPrivateKey(sa.private_key);
  const sigBuf = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" },
    key,
    new TextEncoder().encode(unsigned)
  );
  const jwt = unsigned + "." + bytesToB64url(new Uint8Array(sigBuf));
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = await res.json();
  if (!data.access_token)
    throw new Error("Gagal ambil token Google: " + JSON.stringify(data));
  tokenCache = { token: data.access_token, exp: now + (data.expires_in || 3600) };
  return tokenCache.token;
}

async function googleFetch(token, url, init = {}) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) throw new Error("Google API " + res.status + ": " + JSON.stringify(json));
  return json;
}

// ---------- date helper (GSC butuh YYYY-MM-DD) ----------
function ymd(d) {
  return d.toISOString().slice(0, 10);
}
function defaultRange(days) {
  const end = new Date();
  const start = new Date(Date.now() - days * 86400000);
  return { start: ymd(start), end: ymd(end) };
}

// ---------- daftar tools ----------
const TOOLS = [
  {
    name: "ga4_run_report",
    description:
      "Jalankan laporan GA4 (Data API). Contoh metrik: sessions, totalUsers, screenPageViews, eventCount, conversions, keyEvents. Contoh dimensi: date, pagePath, sessionDefaultChannelGroup, eventName, country, deviceCategory.",
    inputSchema: {
      type: "object",
      properties: {
        property_id: { type: "string", description: "GA4 property ID (angka). Opsional bila DEFAULT_GA4_PROPERTY_ID di-set." },
        start_date: { type: "string", description: "YYYY-MM-DD atau NdaysAgo/today/yesterday. Default 28daysAgo." },
        end_date: { type: "string", description: "Default today." },
        dimensions: { type: "array", items: { type: "string" } },
        metrics: { type: "array", items: { type: "string" }, description: "Wajib minimal satu metrik." },
        limit: { type: "number", description: "Default 50." },
        dimension_filter_event_name: { type: "string", description: "Opsional: saring berdasarkan eventName tertentu, mis. whatsapp_click." },
      },
      required: ["metrics"],
    },
  },
  {
    name: "ga4_realtime",
    description: "Laporan realtime GA4 (30 menit terakhir).",
    inputSchema: {
      type: "object",
      properties: {
        property_id: { type: "string" },
        dimensions: { type: "array", items: { type: "string" } },
        metrics: { type: "array", items: { type: "string" }, description: "Default ['activeUsers']." },
        limit: { type: "number" },
      },
    },
  },
  {
    name: "gsc_list_sites",
    description: "Daftar properti Search Console yang bisa diakses service account.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "gsc_search_analytics",
    description: "Query Search Analytics GSC (clicks, impressions, ctr, position) per dimensi.",
    inputSchema: {
      type: "object",
      properties: {
        site_url: { type: "string", description: "mis. 'sc-domain:bufinterior.my.id' atau 'https://bufinterior.my.id/'. Opsional bila DEFAULT_GSC_SITE di-set." },
        start_date: { type: "string", description: "YYYY-MM-DD. Default 28 hari lalu." },
        end_date: { type: "string", description: "YYYY-MM-DD. Default hari ini." },
        dimensions: { type: "array", items: { type: "string" }, description: "mis. ['query'], ['page'], ['query','page'], ['date'], ['country'], ['device']. Default ['query']." },
        limit: { type: "number", description: "rowLimit, default 25, maks 25000." },
      },
    },
  },
  {
    name: "gsc_url_inspection",
    description: "Inspeksi status indexing sebuah URL di GSC.",
    inputSchema: {
      type: "object",
      properties: {
        inspection_url: { type: "string", description: "URL penuh yang diinspeksi." },
        site_url: { type: "string", description: "Properti GSC. Opsional bila DEFAULT_GSC_SITE di-set." },
      },
      required: ["inspection_url"],
    },
  },
  {
    name: "gsc_list_sitemaps",
    description: "Daftar sitemap yang terdaftar untuk sebuah properti GSC.",
    inputSchema: {
      type: "object",
      properties: {
        site_url: { type: "string", description: "Opsional bila DEFAULT_GSC_SITE di-set." },
      },
    },
  },
];

// ---------- handler tools ----------
async function callTool(name, args, env) {
  const token = await getAccessToken(env);
  switch (name) {
    case "ga4_run_report": {
      const propertyId = args.property_id || env.DEFAULT_GA4_PROPERTY_ID;
      if (!propertyId) throw new Error("property_id wajib (atau set DEFAULT_GA4_PROPERTY_ID)");
      const body = {
        dateRanges: [{ startDate: args.start_date || "28daysAgo", endDate: args.end_date || "today" }],
        dimensions: (args.dimensions || []).map((n) => ({ name: n })),
        metrics: (args.metrics || []).map((n) => ({ name: n })),
        limit: String(args.limit || 50),
      };
      if (args.dimension_filter_event_name) {
        body.dimensionFilter = {
          filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: args.dimension_filter_event_name } },
        };
      }
      return googleFetch(token, "https://analyticsdata.googleapis.com/v1beta/properties/" + propertyId + ":runReport", { method: "POST", body: JSON.stringify(body) });
    }
    case "ga4_realtime": {
      const propertyId = args.property_id || env.DEFAULT_GA4_PROPERTY_ID;
      if (!propertyId) throw new Error("property_id wajib (atau set DEFAULT_GA4_PROPERTY_ID)");
      const body = {
        dimensions: (args.dimensions || []).map((n) => ({ name: n })),
        metrics: (args.metrics || ["activeUsers"]).map((n) => ({ name: n })),
        limit: String(args.limit || 50),
      };
      return googleFetch(token, "https://analyticsdata.googleapis.com/v1beta/properties/" + propertyId + ":runRealtimeReport", { method: "POST", body: JSON.stringify(body) });
    }
    case "gsc_list_sites": {
      return googleFetch(token, "https://www.googleapis.com/webmasters/v3/sites", { method: "GET" });
    }
    case "gsc_search_analytics": {
      const site = args.site_url || env.DEFAULT_GSC_SITE;
      if (!site) throw new Error("site_url wajib (atau set DEFAULT_GSC_SITE)");
      const dr = defaultRange(28);
      const body = {
        startDate: args.start_date || dr.start,
        endDate: args.end_date || dr.end,
        dimensions: args.dimensions || ["query"],
        rowLimit: args.limit || 25,
      };
      return googleFetch(token, "https://www.googleapis.com/webmasters/v3/sites/" + encodeURIComponent(site) + "/searchAnalytics/query", { method: "POST", body: JSON.stringify(body) });
    }
    case "gsc_url_inspection": {
      const site = args.site_url || env.DEFAULT_GSC_SITE;
      if (!site) throw new Error("site_url wajib (atau set DEFAULT_GSC_SITE)");
      const body = { inspectionUrl: args.inspection_url, siteUrl: site };
      return googleFetch(token, "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", { method: "POST", body: JSON.stringify(body) });
    }
    case "gsc_list_sitemaps": {
      const site = args.site_url || env.DEFAULT_GSC_SITE;
      if (!site) throw new Error("site_url wajib (atau set DEFAULT_GSC_SITE)");
      return googleFetch(token, "https://www.googleapis.com/webmasters/v3/sites/" + encodeURIComponent(site) + "/sitemaps", { method: "GET" });
    }
    default:
      throw new Error("Tool tidak dikenal: " + name);
  }
}

// ---------- JSON-RPC ----------
function rpcResult(id, result) {
  return { jsonrpc: "2.0", id, result };
}
function rpcError(id, code, message) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

async function handleMessage(msg, env) {
  const id = msg && msg.id;
  const method = msg && msg.method;
  const params = msg && msg.params;
  if (method && method.indexOf("notifications/") === 0) return null;
  switch (method) {
    case "initialize":
      return rpcResult(id, {
        protocolVersion: (params && params.protocolVersion) || PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: "buf-google-mcp", version: "1.0.0" },
      });
    case "ping":
      return rpcResult(id, {});
    case "tools/list":
      return rpcResult(id, { tools: TOOLS });
    case "tools/call": {
      const toolName = params && params.name;
      const args = (params && params.arguments) || {};
      try {
        const data = await callTool(toolName, args, env);
        return rpcResult(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      } catch (e) {
        return rpcResult(id, { content: [{ type: "text", text: "Error: " + (e && e.message ? e.message : String(e)) }], isError: true });
      }
    }
    default:
      if (id === undefined || id === null) return null;
      return rpcError(id, -32601, "Method tidak dikenal: " + method);
  }
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        },
      });
    }
    if (request.method === "GET") {
      return new Response("buf-google-mcp aktif. Kirim JSON-RPC via POST.", { status: 200 });
    }
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    if (env.MCP_AUTH_TOKEN) {
      const auth = request.headers.get("Authorization") || "";
      if (auth !== "Bearer " + env.MCP_AUTH_TOKEN) {
        return jsonResponse(rpcError(null, -32001, "Unauthorized"), 401);
      }
    }
    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(rpcError(null, -32700, "Parse error"), 400);
    }
    if (Array.isArray(payload)) {
      const out = [];
      for (const m of payload) {
        const r = await handleMessage(m, env);
        if (r) out.push(r);
      }
      return out.length ? jsonResponse(out) : new Response(null, { status: 202 });
    }
    const r = await handleMessage(payload, env);
    if (r === null) return new Response(null, { status: 202 });
    return jsonResponse(r);
  },
};
