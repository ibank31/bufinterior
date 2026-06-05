import { routes } from "@/content/routes";

export const galleryCategories = [
  { id: "semua", label: "Semua" },
  { id: "kitchen-set", label: "Kitchen Set" },
  { id: "backdrop-tv", label: "Backdrop TV" },
  { id: "booth-usaha", label: "Booth Usaha" },
  { id: "lemari-custom", label: "Lemari Custom" },
  { id: "interior-rumah", label: "Interior Rumah" },
  { id: "interior-toko", label: "Interior Toko" },
  { id: "custom-furniture", label: "Custom Furniture" },
];

export function getGalleryCategoryLabel(categoryId) {
  return galleryCategories.find((category) => category.id === categoryId)?.label || categoryId;
}

export const galleryItems = [
  {
    slug: "kitchen-set-proyek-real",
    title: "Kitchen Set Custom Terpasang",
    category: "kitchen-set",
    type: "Realisasi",
    location: "Dapur rumah",
    image: "/assets/portfolio/kitchen-set-proyek-real-buf-01.webp",
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
    image: "/assets/portfolio/kitchen-set-proses-pasang-buf-01.webp",
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
    image: "/assets/portfolio/kitchen-set-showroom-buf-01.webp",
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
    image: "/assets/portfolio/booth-harmoni-silver-buf-01.webp",
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
    image: "/assets/portfolio/booth-pang-waffle-buf-01.webp",
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
    image: "/assets/portfolio/booth-travel-custom-buf-01.webp",
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
    image: "/assets/portfolio/backdrop-tv-proses-pasang-buf-01.webp",
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
    image: "/assets/portfolio/wardrobe-meja-rias-custom-buf-01.webp",
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
];

export function getFeaturedGalleryItem() {
  return galleryItems.find((item) => item.isFeatured) || galleryItems[0];
}

export function getGalleryItemsByCategory(categoryId) {
  if (!categoryId || categoryId === "semua") {
    return galleryItems;
  }

  return galleryItems.filter((item) => item.category === categoryId);
}
