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
    slug: "backdrop-tv-ruang-keluarga",
    title: "Backdrop TV Ruang Keluarga",
    category: "backdrop-tv",
    type: "Realisasi",
    location: "Ruang keluarga",
    image: "/assets/portfolio/backdrop-tv-ruang-keluarga-baf-banyumas.webp",
    serviceHref: routes.backdropTv,
    serviceLabel: "Backdrop TV",
    isFeatured: true,
    description:
      "Backdrop TV custom untuk membuat ruang keluarga terlihat lebih rapi, hangat, dan punya area penyimpanan yang menyatu.",
  },
  {
    slug: "backdrop-tv-minimalis-marmer-kayu",
    title: "Backdrop Minimalis Marmer & Kayu",
    category: "backdrop-tv",
    type: "Konsep",
    location: "Ruang keluarga",
    image: "/assets/portfolio/backdrop-tv-minimalis-marmer-kayu-baf-banyumas.webp",
    serviceHref: routes.backdropTv,
    serviceLabel: "Backdrop TV",
    isFeatured: false,
    description:
      "Kombinasi aksen marmer dan kayu untuk ruang TV yang lebih bersih, modern, dan tetap hangat.",
  },
  {
    slug: "wardrobe-meja-rias-custom",
    title: "Wardrobe & Meja Rias Custom",
    category: "lemari-custom",
    type: "Realisasi",
    location: "Kamar tidur",
    image: "/assets/portfolio/wardrobe-meja-rias-custom-baf-banyumas.webp",
    serviceHref: routes.lemariCustom,
    serviceLabel: "Lemari Custom",
    isFeatured: false,
    description:
      "Furniture kamar dibuat menyatu antara penyimpanan, meja rias, dan kebutuhan ruang agar lebih efisien.",
  },
  {
    slug: "booth-toko-roti-custom",
    title: "Booth Toko Roti Custom",
    category: "booth-usaha",
    type: "Realisasi",
    location: "Ruang usaha",
    image: "/assets/portfolio/booth-toko-roti-custom-baf-banyumas.webp",
    serviceHref: routes.boothUsaha,
    serviceLabel: "Booth Usaha",
    isFeatured: false,
    description:
      "Booth usaha custom untuk kebutuhan display produk, identitas brand, dan alur jualan yang lebih rapi.",
  },
  {
    slug: "desain-kamar-tidur-modern",
    title: "Desain Kamar Tidur Modern",
    category: "interior-rumah",
    type: "Konsep",
    location: "Kamar tidur",
    image: "/assets/portfolio/desain-kamar-tidur-modern-baf-banyumas.webp",
    serviceHref: routes.interiorRumah,
    serviceLabel: "Interior Rumah",
    isFeatured: false,
    description:
      "Konsep kamar tidur modern dengan furniture built-in agar ruang terasa lebih bersih dan fungsional.",
  },
  {
    slug: "meja-belajar-lemari-custom",
    title: "Meja Belajar & Lemari Custom",
    category: "custom-furniture",
    type: "Realisasi",
    location: "Ruang belajar",
    image: "/assets/portfolio/meja-belajar-lemari-custom-baf-banyumas.webp",
    serviceHref: routes.customFurniture,
    serviceLabel: "Custom Furniture",
    isFeatured: false,
    description:
      "Furniture custom untuk area belajar dan penyimpanan yang menyesuaikan ukuran ruang serta kebutuhan pemakai.",
  },
  {
    slug: "interior-bawah-tangga-custom",
    title: "Interior Bawah Tangga Custom",
    category: "custom-furniture",
    type: "Konsep",
    location: "Area bawah tangga",
    image: "/assets/portfolio/interior-bawah-tangga-custom-baf-banyumas.webp",
    serviceHref: routes.customFurniture,
    serviceLabel: "Custom Furniture",
    isFeatured: false,
    description:
      "Pemanfaatan area bawah tangga agar tidak kosong dan bisa menjadi ruang penyimpanan yang lebih rapi.",
  },
  {
    slug: "lemari-meja-tv-custom",
    title: "Lemari & Meja TV Custom",
    category: "custom-furniture",
    type: "Realisasi",
    location: "Ruang keluarga",
    image: "/assets/portfolio/realisasi-lemari-meja-tv-custom-baf-banyumas.webp",
    serviceHref: routes.customFurniture,
    serviceLabel: "Custom Furniture",
    isFeatured: false,
    description:
      "Kombinasi lemari dan meja TV custom untuk menata penyimpanan sekaligus area hiburan di rumah.",
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
