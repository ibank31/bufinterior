import { routes } from "@/content/routes";

export const portfolioCategories = [
  { id: "semua", label: "Semua" },
  { id: "kitchen-set", label: "Kitchen Set" },
  { id: "backdrop-tv", label: "Backdrop TV" },
  { id: "booth-usaha", label: "Booth Usaha" },
  { id: "lemari-custom", label: "Lemari Custom" },
  { id: "interior-rumah", label: "Interior Rumah" },
  { id: "interior-toko", label: "Interior Toko" },
  { id: "custom-furniture", label: "Custom Furniture" },
  { id: "akrilik-custom", label: "Akrilik Custom" },
  { id: "aluminium", label: "Aluminium" },
  { id: "kanopi", label: "Kanopi" },
];

export function getPortofolioCategoryLabel(categoryId) {
  return portfolioCategories.find((category) => category.id === categoryId)?.label || categoryId;
}

export const portfolioItems = [
  {
    slug: "video-kitchen-set-hijau-realisasi",
    title: "Video Kitchen Set Hijau Custom",
    category: "kitchen-set",
    type: "Realisasi",
    mediaType: "video",
    location: "Dapur rumah",
    thumbnail: "/assets/gallery/thumbs/video-kitchen-set-hijau-realisasi-buf-01.webp",
    poster: "/assets/gallery/posters/video-kitchen-set-hijau-realisasi-buf-01.webp",
    video: "/assets/gallery/videos/video-kitchen-set-hijau-realisasi-buf-01.mp4",
    image: "/assets/gallery/posters/video-kitchen-set-hijau-realisasi-buf-01.webp",
    serviceHref: routes.kitchenSet,
    serviceLabel: "Kitchen Set",
    isFeatured: false,
    description:
      "Video singkat kitchen set hijau custom untuk melihat detail kabinet, area meja, dan finishing secara lebih nyata.",
  },
  {
    slug: "video-kitchen-set-modern-lighting",
    title: "Video Kitchen Set Modern dengan Lighting",
    category: "kitchen-set",
    type: "Realisasi",
    mediaType: "video",
    location: "Dapur rumah",
    thumbnail: "/assets/gallery/thumbs/video-kitchen-set-modern-lighting-buf-01.webp",
    poster: "/assets/gallery/posters/video-kitchen-set-modern-lighting-buf-01.webp",
    video: "/assets/gallery/videos/video-kitchen-set-modern-lighting-buf-01.mp4",
    image: "/assets/gallery/posters/video-kitchen-set-modern-lighting-buf-01.webp",
    serviceHref: routes.kitchenSet,
    serviceLabel: "Kitchen Set",
    isFeatured: false,
    description:
      "Video kitchen set modern dengan lighting untuk menampilkan detail kabinet atas, kabinet bawah, dan area kerja dapur.",
  },
  {
    slug: "video-backdrop-tv-marmer-lighting",
    title: "Video Backdrop TV Marmer dengan Lighting",
    category: "backdrop-tv",
    type: "Realisasi",
    mediaType: "video",
    location: "Ruang keluarga",
    thumbnail: "/assets/gallery/thumbs/video-backdrop-tv-marmer-lighting-buf-01.webp",
    poster: "/assets/gallery/posters/video-backdrop-tv-marmer-lighting-buf-01.webp",
    video: "/assets/gallery/videos/video-backdrop-tv-marmer-lighting-buf-01.mp4",
    image: "/assets/gallery/posters/video-backdrop-tv-marmer-lighting-buf-01.webp",
    serviceHref: routes.backdropTv,
    serviceLabel: "Backdrop TV",
    isFeatured: false,
    description:
      "Video backdrop TV motif marmer dengan lighting untuk melihat tampilan panel, rak samping, dan pencahayaan.",
  },
  {
    slug: "kitchen-set-luxury-rak-display",
    title: "Kitchen Set Luxury dengan Rak Display",
    category: "kitchen-set",
    type: "Konsep",
    location: "Area kitchen",
    image: "/assets/portfolio/kitchen-set-luxury-rak-display-buf-01.webp",
    serviceHref: routes.kitchenSet,
    serviceLabel: "Kitchen Set",
    isFeatured: true,
    description:
      "Kitchen set custom yang dibuat menyesuaikan ukuran dapur, kebutuhan penyimpanan, dan alur aktivitas harian.",
  },
  {
    slug: "kitchen-set-proses-pasang",
    title: "Proses Pemasangan Kitchen Set",
    category: "kitchen-set",
    type: "Proses",
    location: "Area dapur",
    image: "/assets/portfolio/kitchen-set-proses-pemasangan-buf-01.webp",
    serviceHref: routes.kitchenSet,
    serviceLabel: "Kitchen Set",
    isFeatured: false,
    description:
      "Dokumentasi proses pemasangan kitchen set sebelum finishing akhir agar ukuran dan detail tetap presisi.",
  },
  {
    slug: "kitchen-set-showroom",
    title: "Kitchen Set dengan Island",
    category: "kitchen-set",
    type: "Display",
    location: "Area kitchen",
    image: "/assets/portfolio/kitchen-set-island-display-buf-01.webp",
    serviceHref: routes.kitchenSet,
    serviceLabel: "Kitchen Set",
    isFeatured: false,
    description:
      "Referensi kitchen set dengan area island untuk kebutuhan penyimpanan, persiapan makanan, dan tampilan dapur yang lebih rapi.",
  },
  {
    slug: "booth-harmoni-silver",
    title: "Booth Display Harmoni Silver",
    category: "booth-usaha",
    type: "Realisasi",
    location: "Area usaha",
    image: "/assets/portfolio/booth-harmoni-silver-display-buf-01.webp",
    serviceHref: routes.boothUsaha,
    serviceLabel: "Booth Usaha",
    isFeatured: false,
    description:
      "Booth usaha custom untuk kebutuhan display produk, identitas brand, dan tampilan toko yang lebih rapi.",
  },
  {
    slug: "booth-pang-waffle",
    title: "Booth Usaha Pang Waffle",
    category: "booth-usaha",
    type: "Realisasi",
    location: "Area jualan",
    image: "/assets/portfolio/booth-pang-waffle-custom-buf-01.webp",
    serviceHref: routes.boothUsaha,
    serviceLabel: "Booth Usaha",
    isFeatured: false,
    description:
      "Booth usaha makanan ringan yang dibuat untuk memperjelas area display, pelayanan, dan identitas brand.",
  },
  {
    slug: "booth-usaha-hijau",
    title: "Booth Usaha Custom Hijau",
    category: "booth-usaha",
    type: "Realisasi",
    location: "Area komersial",
    image: "/assets/portfolio/booth-usaha-hijau-buf-01.webp",
    serviceHref: routes.boothUsaha,
    serviceLabel: "Booth Usaha",
    isFeatured: false,
    description:
      "Booth usaha dengan warna brand yang kuat untuk membuat tampilan jualan lebih mudah dikenali.",
  },
  {
    slug: "booth-travel-custom",
    title: "Booth Travel Custom",
    category: "booth-usaha",
    type: "Realisasi",
    location: "Area layanan usaha",
    image: "/assets/portfolio/booth-travel-custom-moazzam-buf-01.webp",
    serviceHref: routes.boothUsaha,
    serviceLabel: "Booth Usaha",
    isFeatured: false,
    description:
      "Booth custom untuk area layanan usaha dengan kebutuhan branding, meja pelayanan, dan display informasi.",
  },
  {
    slug: "interior-toko-display-silver",
    title: "Interior Display Toko Silver",
    category: "interior-toko",
    type: "Realisasi",
    location: "Area toko",
    image: "/assets/portfolio/interior-toko-display-silver-buf-01.webp",
    serviceHref: routes.interiorToko,
    serviceLabel: "Interior Toko",
    isFeatured: false,
    description:
      "Interior toko dengan display produk yang dibuat agar barang terlihat rapi, mudah dilihat, dan tetap sesuai identitas usaha.",
  },
  {
    slug: "backdrop-tv-proses-pasang",
    title: "Proses Pemasangan Backdrop TV",
    category: "backdrop-tv",
    type: "Proses",
    location: "Ruang keluarga",
    image: "/assets/portfolio/backdrop-tv-proses-pemasangan-buf-01.webp",
    serviceHref: routes.backdropTv,
    serviceLabel: "Backdrop TV",
    isFeatured: false,
    description:
      "Dokumentasi proses pemasangan backdrop TV custom sebelum area ruang keluarga siap digunakan.",
  },
  {
    slug: "backdrop-panel-proses",
    title: "Proses Panel Dinding Custom",
    category: "interior-rumah",
    type: "Proses",
    location: "Interior rumah",
    image: "/assets/portfolio/backdrop-panel-proses-buf-01.webp",
    serviceHref: routes.interiorRumah,
    serviceLabel: "Interior Rumah",
    isFeatured: false,
    description:
      "Proses pengerjaan panel interior untuk membuat area rumah lebih tertata dan memiliki aksen visual yang rapi.",
  },
  {
    slug: "wardrobe-meja-rias-custom",
    title: "Wardrobe dan Meja Rias Custom",
    category: "lemari-custom",
    type: "Realisasi",
    location: "Kamar tidur",
    image: "/assets/portfolio/lemari-custom-display-lighting-buf-01.webp",
    serviceHref: routes.lemariCustom,
    serviceLabel: "Lemari Custom",
    isFeatured: false,
    description:
      "Wardrobe dan meja rias custom yang dibuat menyatu agar ruang kamar lebih efisien dan rapi.",
  },
  {
    slug: "meja-kerja-custom-panel",
    title: "Meja Kerja Custom dengan Panel",
    category: "custom-furniture",
    type: "Realisasi",
    location: "Area kerja",
    image: "/assets/portfolio/meja-kerja-custom-panel-buf-01.webp",
    serviceHref: routes.customFurniture,
    serviceLabel: "Custom Furniture",
    isFeatured: false,
    description:
      "Furniture custom untuk area kerja kecil dengan panel dan meja yang menyesuaikan ukuran ruang.",
  },
  {
    slug: "akrilik-custom-referensi-kebutuhan",
    title: "Referensi Kebutuhan Akrilik Custom",
    category: "akrilik-custom",
    type: "Referensi Kategori",
    location: "Kebutuhan usaha dan display",
    image: "/assets/portfolio/interior-toko-display-silver-buf-01.webp",
    serviceHref: routes.akrilikCustom,
    serviceLabel: "Akrilik Custom",
    isFeatured: false,
    description:
      "Placeholder kategori untuk kebutuhan akrilik custom seperti display usaha, papan nama, signage, rak display, dan kebutuhan proyek. Dokumentasi real akan ditambahkan setelah data portofolio final disiapkan.",
  },
  {
    slug: "aluminium-custom-referensi-kebutuhan",
    title: "Referensi Kebutuhan Aluminium Custom",
    category: "aluminium",
    type: "Referensi Kategori",
    location: "Rumah, toko, dan area usaha",
    image: "/assets/portfolio/interior-toko-display-silver-buf-01.webp",
    serviceHref: routes.aluminium,
    serviceLabel: "Aluminium",
    isFeatured: false,
    description:
      "Placeholder kategori untuk kebutuhan aluminium custom seperti kusen, pintu, jendela, partisi, etalase, kaca aluminium, dan kebutuhan bangunan. Dokumentasi real akan ditambahkan setelah data portofolio final disiapkan.",
  },
  {
    slug: "kanopi-custom-referensi-kebutuhan",
    title: "Referensi Kebutuhan Kanopi Custom",
    category: "kanopi",
    type: "Referensi Kategori",
    location: "Teras, carport, toko, dan area usaha",
    image: "/assets/portfolio/interior-rumah-open-space-backdrop-tv-buf-01.webp",
    serviceHref: routes.kanopi,
    serviceLabel: "Kanopi",
    isFeatured: false,
    description:
      "Placeholder kategori untuk kebutuhan kanopi custom seperti teras, carport, toko, dan area usaha. Dokumentasi real akan ditambahkan setelah data portofolio final disiapkan.",
  },
];

export function getFeaturedPortofolioItem() {
  return portfolioItems.find((item) => item.isFeatured) || portfolioItems[0];
}

export function getPortofolioItemsByCategory(categoryId) {
  if (!categoryId || categoryId === "semua") {
    return portfolioItems;
  }

  return portfolioItems.filter((item) => item.category === categoryId);
}
