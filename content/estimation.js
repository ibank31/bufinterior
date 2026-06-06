import { routes } from "@/content/routes";

export const estimationCards = [
  {
    label: "Kitchen Set Custom",
    unit: "per meter lari",
    range: "Mulai ± Rp1,8 juta / meter lari",
    description:
      "Kitchen set biasanya paling sering membuat calon pelanggan bingung karena detailnya bisa sangat berbeda. Kitchen set sederhana tentu berbeda dengan kitchen set lengkap yang memakai kabinet atas-bawah, top table, backsplash, banyak laci, rak piring, lampu, dan aksesoris tambahan.",
    href: routes.kitchenSet,
    waText:
      "Halo BUF, saya ingin minta estimasi awal kitchen set custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan referensi desain.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,8 – 2,5 jt/m",
        example: "3 m: ± Rp5,4 – 7,5 jt",
        cocok:
          "Cocok jika fokus utama adalah fungsi dasar, kabinet sederhana, detail minim, dan ingin budget lebih ringan.",
      },
      {
        name: "Standar",
        price: "± Rp2,5 – 3,5 jt/m",
        example: "3 m: ± Rp7,5 – 10,5 jt",
        cocok:
          "Cocok untuk kitchen set yang lebih rapi dan fungsional, umumnya dengan penyimpanan lebih tertata dan finishing lebih matang.",
      },
      {
        name: "Detail Custom",
        price: "± Rp3,5 – 4,5 jt/m",
        example: "3 m: ± Rp10,5 – 13,5 jt",
        cocok:
          "Cocok jika ingin lebih banyak laci, aksesoris, kabinet atas-bawah, top table/backplash tertentu, dan detail desain lebih rapi.",
      },
      {
        name: "Premium",
        price: "± Rp4,5 jt+/m",
        example: "3 m: mulai ± Rp13,5 jt+",
        cocok:
          "Cocok untuk desain lebih kompleks, finishing/material lebih tinggi, detail dekoratif, aksesoris lengkap, atau kebutuhan khusus.",
      },
    ],
  },
  {
    label: "Lemari Custom / Wardrobe",
    unit: "per meter lari",
    range: "Mulai ± Rp1,5 juta / meter lari",
    description:
      "Lemari custom terlihat sederhana, tetapi estimasinya bisa berubah karena tinggi lemari, jumlah pintu, sekat, laci, rel, kaca, finishing, dan apakah dibuat sampai plafon.",
    href: routes.lemariCustom,
    waText:
      "Halo BUF, saya ingin minta estimasi awal lemari custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan kebutuhan penyimpanan.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,5 – 2,2 jt/m",
        example: "2 m: ± Rp3 – 4,4 jt",
        cocok:
          "Cocok untuk lemari sederhana dengan fungsi utama penyimpanan, sekat tidak terlalu banyak, dan detail minim.",
      },
      {
        name: "Standar",
        price: "± Rp2,2 – 3 jt/m",
        example: "2 m: ± Rp4,4 – 6 jt",
        cocok:
          "Cocok untuk lemari kamar yang lebih rapi, pembagian ruang lebih jelas, dan finishing lebih matang.",
      },
      {
        name: "Detail Custom",
        price: "± Rp3 – 4 jt/m",
        example: "2 m: ± Rp6 – 8 jt",
        cocok:
          "Cocok jika butuh banyak sekat, laci, pintu tertentu, kombinasi kaca, atau lemari dibuat menyesuaikan kebiasaan pemakai.",
      },
      {
        name: "Premium",
        price: "± Rp4 jt+/m",
        example: "2 m: mulai ± Rp8 jt+",
        cocok:
          "Cocok untuk wardrobe besar, finishing/material lebih tinggi, detail sampai plafon, sliding, lampu, atau aksesoris lebih lengkap.",
      },
    ],
  },
  {
    label: "Backdrop TV Custom",
    unit: "per meter lari",
    range: "Mulai ± Rp1,2 juta / meter lari",
    description:
      "Backdrop TV bisa ringan jika hanya panel sederhana, tetapi bisa naik jika menyatu dengan kabinet bawah, rak display, ambalan, lampu LED, panel motif, atau storage tambahan.",
    href: routes.backdropTv,
    waText:
      "Halo BUF, saya ingin minta estimasi awal backdrop TV custom. Ukuran kasar saya sekitar ... meter. Saya akan kirim foto ruang dan referensi desain.",
    tiers: [
      {
        name: "Ekonomis",
        price: "± Rp1,2 – 2 jt/m",
        example: "2,5 m: ± Rp3 – 5 jt",
        cocok:
          "Cocok untuk panel TV sederhana, tampilan lebih rapi, dan detail penyimpanan tidak terlalu banyak.",
      },
      {
        name: "Standar",
        price: "± Rp2 – 2,8 jt/m",
        example: "2,5 m: ± Rp5 – 7 jt",
        cocok:
          "Cocok untuk backdrop dengan panel lebih matang, kabinet bawah sederhana, ambalan, atau kombinasi material yang lebih rapi.",
      },
      {
        name: "Detail Custom",
        price: "± Rp2,8 – 3,5 jt/m",
        example: "2,5 m: ± Rp7 – 8,75 jt",
        cocok:
          "Cocok jika ingin kabinet, rak display, lampu LED, panel dekoratif, storage tambahan, atau desain lebih menyatu dengan ruang.",
      },
      {
        name: "Premium",
        price: "± Rp3,5 jt+/m",
        example: "2,5 m: mulai ± Rp8,75 jt+",
        cocok:
          "Cocok untuk detail visual lebih kuat, finishing/material lebih tinggi, aksen dekoratif, lighting, dan desain kompleks.",
      },
    ],
  },
];

export const otherEstimates = [
  {
    title: "Custom Furniture Satuan",
    range: "± Rp750 ribu – Rp3 juta+ / item",
    desc: "Untuk meja belajar, meja rias, rak, kabinet kecil, nakas, ambalan, atau furniture satuan lain. Harga sangat tergantung ukuran dan detail fungsi.",
    href: routes.customFurniture,
  },
  {
    title: "Booth Usaha Custom",
    range: "± Rp2 juta – Rp10 juta+",
    desc: "Untuk booth makanan, minuman, display UMKM, atau booth jualan portable. Estimasi dipengaruhi ukuran, roda, lampu, rak display, branding, dan material.",
    href: routes.boothUsaha,
  },
  {
    title: "Interior Toko / Display",
    range: "± Rp2 juta – Rp8 juta+ untuk area kecil",
    desc: "Untuk rak display, meja kasir, area produk, booth display, atau kebutuhan toko kecil. Estimasi bisa naik jika area lebih luas dan detail brand lebih kompleks.",
    href: routes.interiorToko,
  },
];

export const factors = [
  ["Ukuran dan bentuk ruang", "Ruang lurus, bentuk L, sudut, tinggi plafon, dan kondisi lokasi bisa mempengaruhi jumlah material serta detail pengerjaan."],
  ["Material utama", "Pilihan material menyesuaikan kebutuhan fungsi, tampilan, durabilitas, dan budget."],
  ["Finishing", "Finishing polos, motif kayu, motif marmer, kombinasi warna, atau detail premium akan mempengaruhi estimasi."],
  ["Kabinet, laci, dan sekat", "Semakin banyak kompartemen, laci, pintu, dan penyimpanan khusus, semakin banyak detail produksi."],
  ["Hardware dan aksesoris", "Engsel, rel laci, handle, rak piring, lampu LED, kaca, roda, dan aksesoris lain bisa membuat estimasi berubah."],
  ["Pemasangan dan lokasi proyek", "Kebutuhan survey, pengiriman, dan pemasangan dikonfirmasi sesuai lokasi proyek dan kondisi lapangan."],
];

export const preparation = [
  "Foto ruang dari beberapa sudut",
  "Ukuran kasar panjang, tinggi, dan lebar ruang",
  "Jenis kebutuhan: kitchen set, lemari, backdrop, booth, atau interior toko",
  "Referensi desain yang disukai",
  "Gambaran budget awal",
  "Lokasi proyek untuk konfirmasi survey, pengiriman, atau pemasangan",
];

export const commonQuestions = [
  {
    q: "Apakah angka di halaman ini harga final?",
    a: "Bukan. Angka ini adalah kisaran estimasi awal untuk membantu Anda menyiapkan gambaran budget. Harga final tetap menunggu detail ukuran, material, finishing, aksesoris, dan kondisi ruang.",
  },
  {
    q: "Kalau ukuran saya belum presisi, apakah tetap bisa minta estimasi?",
    a: "Bisa. Kirim ukuran kasar dulu, misalnya panjang dinding 3 meter atau area TV 2,5 meter. BUF bisa bantu memberi arahan awal sebelum pengukuran lebih detail.",
  },
  {
    q: "Apakah bisa menyesuaikan budget?",
    a: "Bisa dibahas. Dengan mengetahui budget awal, BUF bisa membantu memberi opsi desain, material, atau prioritas pengerjaan yang lebih realistis.",
  },
  {
    q: "Kenapa harga kitchen set bisa berbeda jauh?",
    a: "Kitchen set bisa berbeda karena ada kabinet atas/bawah, top table, backsplash, hardware, rak piring, laci, finishing, dan detail desain yang tidak selalu sama di setiap ruang.",
  },
];
