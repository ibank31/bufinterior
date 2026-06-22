# buf-google-mcp

Server **MCP remote** untuk **Google Analytics 4 (GA4)** + **Google Search Console (GSC)**, berjalan di **Cloudflare Workers**. Dibuat untuk disambungkan ke agent Notion (bufAgent) supaya AI bisa menarik **dan mengubah konfigurasi** GA4 & GSC.

Endpoint menerima JSON-RPC (MCP, Streamable HTTP) via `POST` di path apa pun.

## Tools yang tersedia

| Tool | Jenis | Fungsi |
|------|-------|--------|
| `ga4_run_report` | read | Laporan GA4 (dimensi+metrik, rentang tanggal, filter eventName) |
| `ga4_realtime` | read | Data realtime GA4 (30 menit terakhir) |
| `gsc_list_sites` | read | Daftar properti GSC |
| `gsc_search_analytics` | read | Clicks/impressions/CTR/position per query, page, dll. |
| `gsc_url_inspection` | read | Status indexing sebuah URL |
| `gsc_list_sitemaps` | read | Daftar sitemap properti |
| `gsc_submit_sitemap` | **write** | Daftarkan/submit sitemap |
| `gsc_delete_sitemap` | **write** | Hapus sitemap |
| `ga4_admin_request` | **write/admin** | Kelola konfigurasi GA4 via Admin API (key events, custom dimensions/metrics, data streams, audiences, settings, links) |
| `google_request` | **write/admin** | Passthrough ke endpoint Google API mana pun (dibatasi scope & peran) |

> **Penting soal arti "edit":** API Google memungkinkan mengubah **konfigurasi/pengaturan** (mis. menandai key event, membuat custom dimension, submit sitemap), TAPI **tidak ada** API untuk mengubah/menghapus **data historis** GA4/GSC — itu memang tidak diizinkan Google.

---

## Bagian A — Siapkan akses Google (sekali saja)

1. Buka <https://console.cloud.google.com> -> pilih sebuah project.
2. **Aktifkan 3 API** (APIs & Services > Library):
   - **Google Analytics Data API** (untuk laporan)
   - **Google Analytics Admin API** (untuk edit konfigurasi GA4)
   - **Google Search Console API**
3. Buat **Service Account** (IAM & Admin > Service Accounts > Create). Lalu buat **key** bertipe **JSON** dan unduh. Catat `client_email`.
4. **GA4** (agar bisa baca + edit): GA4 > Admin > **Property Access Management** > tambahkan `client_email` sebagai **Editor** (atau Administrator). Catat **Property ID** (angka).
5. **GSC** (agar bisa baca + kelola sitemap): Search Console > Settings > **Users and permissions** > Add user > masukkan `client_email` dengan peran **Full**. Untuk *domain property*, site = `sc-domain:bufinterior.my.id`.

> Service Account JSON itu RAHASIA. Hanya ditempel ke **Secret Cloudflare**, jangan ke chat / repo.

---

## Bagian B — Deploy ke Cloudflare Workers

### Opsi 1 — Dashboard (paling mudah, bisa dari HP)

1. <https://dash.cloudflare.com> > **Workers & Pages** > **Create** > **Workers** > **Create Worker**.
2. Beri nama `buf-google-mcp` > **Deploy**.
3. **Edit code**, hapus template, **tempel seluruh isi `mcp/src/index.js`**. **Deploy**.
4. Worker > **Settings** > **Variables and Secrets**:
   - Secret `GOOGLE_SA_KEY` = (seluruh isi file JSON service account).
   - Secret `MCP_AUTH_TOKEN` = string acak panjang. **Simpan token ini.**
   - (Opsional) Variable `DEFAULT_GA4_PROPERTY_ID` dan `DEFAULT_GSC_SITE`.
5. URL: `https://buf-google-mcp.<subdomain-kamu>.workers.dev`.

### Opsi 2 — Wrangler (dari komputer)

```bash
cd mcp
npm install
npx wrangler secret put GOOGLE_SA_KEY
npx wrangler secret put MCP_AUTH_TOKEN
npx wrangler deploy
```

---

## Bagian C — Sambungkan ke bufAgent (Notion)

Pengaturan **bufAgent** > **Connections** > tambah **MCP server**:
- **URL**: `https://buf-google-mcp.<subdomain-kamu>.workers.dev`
- **Authentication**: **Bearer Token** -> nilai `MCP_AUTH_TOKEN`.

---

## Bagian D — Tes cepat

- "Tarik GA4 28 hari terakhir: sessions & totalUsers per sessionDefaultChannelGroup."
- "List key events GA4" (pakai `ga4_admin_request` GET `/v1beta/properties/<id>/keyEvents`).
- "Tandai event `generate_lead` sebagai key event" (POST keyEvents).
- "Submit sitemap https://bufinterior.my.id/sitemap.xml ke GSC."

## Catatan keamanan

- Server ini punya akses **edit konfigurasi**; lindungi `MCP_AUTH_TOKEN` baik-baik.
- Tidak ada API untuk mengubah data historis GA4/GSC.
- Data GSC biasanya tertunda ~2-3 hari.
