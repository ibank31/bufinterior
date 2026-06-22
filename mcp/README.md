# buf-google-mcp

Server **MCP remote** untuk **Google Analytics 4 (GA4)** + **Google Search Console (GSC)**, berjalan di **Cloudflare Workers**. Bersifat **read-only**. Dibuat untuk disambungkan ke agent Notion (bufAgent) supaya AI bisa menarik data GA4 & GSC langsung.

Endpoint menerima JSON-RPC (MCP, Streamable HTTP) via `POST` di path apa pun (root `/` maupun `/mcp`).

## Tools yang tersedia

| Tool | Fungsi |
|------|--------|
| `ga4_run_report` | Laporan GA4 (dimensi+metrik, rentang tanggal, filter eventName) |
| `ga4_realtime` | Data realtime GA4 (30 menit terakhir) |
| `gsc_list_sites` | Daftar properti GSC yang bisa diakses |
| `gsc_search_analytics` | Clicks/impressions/CTR/position per query, page, dll. |
| `gsc_url_inspection` | Status indexing sebuah URL |
| `gsc_list_sitemaps` | Daftar sitemap properti |

---

## Bagian A — Siapkan akses Google (sekali saja)

1. Buka <https://console.cloud.google.com> -> buat / pilih sebuah project.
2. **Aktifkan 2 API** (APIs & Services > Library):
   - **Google Analytics Data API**
   - **Google Search Console API**
3. Buat **Service Account** (IAM & Admin > Service Accounts > Create). Lalu buat **key** bertipe **JSON** dan unduh filenya. Catat `client_email` (bentuknya `nama@project.iam.gserviceaccount.com`).
4. **GA4**: buka GA4 > Admin > **Property Access Management** > tambahkan `client_email` tadi sebagai **Viewer**. Catat **Property ID** (Admin > Property Settings, berupa angka).
5. **GSC**: buka Search Console > Settings > **Users and permissions** > Add user > masukkan `client_email` (peran **Restricted/Full** cukup, karena hanya baca). Untuk *domain property*, nilai site = `sc-domain:bufinterior.my.id`.

> Service Account JSON itu RAHASIA. Hanya akan ditempel ke **Secret Cloudflare**, jangan ke chat / repo.

---

## Bagian B — Deploy ke Cloudflare Workers

### Opsi 1 — Dashboard (paling mudah, bisa dari HP)

1. Buka <https://dash.cloudflare.com> > **Workers & Pages** > **Create** > **Workers** > **Create Worker**.
2. Beri nama `buf-google-mcp` > **Deploy**.
3. Klik **Edit code**, hapus isi template, lalu **tempel seluruh isi file `mcp/src/index.js`** dari repo ini. Klik **Deploy**.
4. Masuk ke Worker > **Settings** > **Variables and Secrets**:
   - Tambah **Secret** `GOOGLE_SA_KEY` = (tempel seluruh isi file JSON service account).
   - Tambah **Secret** `MCP_AUTH_TOKEN` = string acak panjang (mis. hasil generator password). **Simpan token ini.**
   - (Opsional) Tambah **Variable** `DEFAULT_GA4_PROPERTY_ID` dan `DEFAULT_GSC_SITE`.
5. URL Worker kamu: `https://buf-google-mcp.<subdomain-kamu>.workers.dev`.

### Opsi 2 — Wrangler (dari komputer)

```bash
cd mcp
npm install
npx wrangler secret put GOOGLE_SA_KEY     # tempel isi JSON service account
npx wrangler secret put MCP_AUTH_TOKEN     # token bearer acak
npx wrangler deploy
```

---

## Bagian C — Sambungkan ke bufAgent (Notion)

Buka pengaturan **bufAgent** > **Connections** > tambah **MCP server**:
- **URL**: `https://buf-google-mcp.<subdomain-kamu>.workers.dev`
- **Authentication**: **Bearer Token** -> isi dengan nilai `MCP_AUTH_TOKEN`.

Simpan. Setelah tersambung, AI bisa memanggil tools di atas.

---

## Bagian D — Tes cepat

Setelah tersambung, minta AI misalnya:
- "Tarik GA4 28 hari terakhir: sessions & totalUsers per sessionDefaultChannelGroup."
- "Berapa event `whatsapp_click` 30 hari terakhir per pagePath?" (pakai `dimension_filter_event_name`).
- "Query GSC: top 25 query 28 hari terakhir untuk `sc-domain:bufinterior.my.id`."
- "Cek status indexing `https://bufinterior.my.id/`."

## Catatan

- Semua akses **read-only**; server tidak bisa mengubah setting GA4/GSC.
- Data GSC biasanya tertunda ~2-3 hari.
- Jika Notion butuh transport SSE (bukan JSON biasa), beri tahu — versi ini balas JSON-RPC sinkron via POST, yang umum didukung sebagai Streamable HTTP.
