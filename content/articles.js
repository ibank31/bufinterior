import { routes } from "@/content/routes";

export const articles = [
  {
    slug: "biaya-kitchen-set-custom",
    title: "Biaya Kitchen Set Custom: Apa Saja yang Mempengaruhi Harga?",
    excerpt:
      "Panduan awal memahami faktor biaya kitchen set custom, mulai dari ukuran, material, finishing, aksesoris, sampai tingkat kerumitan pengerjaan.",
    category: "Kitchen Set",
    date: "2026-06-04",
    readingTime: "5 menit baca",
    targetKeyword: "biaya kitchen set custom",
    relatedServiceHref: routes.kitchenSet,
    relatedServiceLabel: "Kitchen Set",
    heroImage: "/assets/hero/hero-interior-custom-baf-banyumas.webp",
    sections: [
      {
        heading: "Kenapa harga kitchen set bisa berbeda-beda?",
        body:
          "Harga kitchen set custom tidak hanya ditentukan dari panjang meter. Ukuran ruang, bentuk kabinet, pilihan material, finishing, aksesoris, dan kondisi lokasi pemasangan bisa mempengaruhi estimasi akhir.",
      },
      {
        heading: "Ukuran dan layout dapur",
        body:
          "Dapur lurus, bentuk L, bentuk U, atau dapur dengan banyak sudut membutuhkan pendekatan berbeda. Semakin kompleks layout, semakin banyak penyesuaian ukuran dan detail pengerjaan.",
      },
      {
        heading: "Material dan finishing",
        body:
          "Material dapat disesuaikan dengan kebutuhan dan budget. Pilihan finishing juga mempengaruhi tampilan, ketahanan, serta perawatan kitchen set dalam jangka panjang.",
      },
      {
        heading: "Konsultasi sebelum menentukan harga",
        body:
          "Agar estimasi lebih masuk akal, sebaiknya konsultasi dimulai dari foto ruang, ukuran kasar, kebutuhan penyimpanan, referensi desain, dan gambaran budget.",
      },
    ],
  },
  {
    slug: "material-kitchen-set-yang-bagus",
    title: "Material Kitchen Set yang Bagus untuk Dapur Custom",
    excerpt:
      "Kenali pertimbangan memilih material kitchen set agar sesuai fungsi dapur, tampilan yang diinginkan, dan budget pengerjaan.",
    category: "Material",
    date: "2026-06-04",
    readingTime: "4 menit baca",
    targetKeyword: "material kitchen set yang bagus",
    relatedServiceHref: routes.kitchenSet,
    relatedServiceLabel: "Kitchen Set",
    heroImage: "/assets/portfolio/backdrop-tv-minimalis-marmer-kayu-baf-banyumas.webp",
    sections: [
      {
        heading: "Material harus sesuai cara pakai dapur",
        body:
          "Dapur yang sering dipakai memasak berat membutuhkan pertimbangan material yang berbeda dari dapur kering atau pantry. Karena itu, material sebaiknya dipilih berdasarkan fungsi ruang.",
      },
      {
        heading: "Tampilan dan perawatan",
        body:
          "Selain tampilan, pertimbangkan juga kemudahan perawatan. Finishing yang terlihat bagus belum tentu paling cocok jika area dapur sering terkena minyak, air, atau panas.",
      },
      {
        heading: "Sesuaikan dengan budget",
        body:
          "Material kitchen set bisa disesuaikan dengan kebutuhan dan budget. Konsultasi awal membantu menentukan opsi yang paling realistis tanpa memaksakan satu pilihan.",
      },
    ],
  },
  {
    slug: "tips-memilih-jasa-interior-custom",
    title: "Tips Memilih Jasa Interior dan Custom Furniture",
    excerpt:
      "Beberapa hal yang perlu diperhatikan sebelum memilih jasa interior atau custom furniture untuk rumah, toko, maupun ruang usaha.",
    category: "Panduan",
    date: "2026-06-04",
    readingTime: "5 menit baca",
    targetKeyword: "tips memilih jasa interior custom",
    relatedServiceHref: routes.layanan,
    relatedServiceLabel: "Layanan BUF",
    heroImage: "/assets/portfolio/interior-bawah-tangga-custom-baf-banyumas.webp",
    sections: [
      {
        heading: "Lihat contoh pekerjaan",
        body:
          "Foto pekerjaan atau gallery membantu melihat gaya, kualitas visual, dan jenis proyek yang pernah dikerjakan. Ini penting sebelum mulai konsultasi lebih jauh.",
      },
      {
        heading: "Pastikan bisa custom sesuai ukuran",
        body:
          "Interior dan furniture custom sebaiknya tidak hanya mengikuti model, tapi juga menyesuaikan ukuran ruang, kebutuhan fungsi, dan kebiasaan pemakai.",
      },
      {
        heading: "Diskusikan budget sejak awal",
        body:
          "Budget bukan hal yang harus disembunyikan. Dengan gambaran budget, penyedia jasa bisa membantu memberi opsi material dan desain yang lebih realistis.",
      },
      {
        heading: "Perhatikan alur kerja",
        body:
          "Alur kerja yang jelas, mulai dari konsultasi, pengukuran, pemilihan material, produksi, sampai pemasangan, membantu mengurangi risiko miskomunikasi.",
      },
    ],
  },
  {
    slug: "lemari-custom-vs-lemari-jadi",
    title: "Lemari Custom vs Lemari Jadi: Mana yang Lebih Cocok?",
    excerpt:
      "Perbandingan sederhana antara lemari custom dan lemari jadi agar lebih mudah menentukan pilihan sesuai kebutuhan ruang.",
    category: "Custom Furniture",
    date: "2026-06-04",
    readingTime: "4 menit baca",
    targetKeyword: "lemari custom vs lemari jadi",
    relatedServiceHref: routes.lemariCustom,
    relatedServiceLabel: "Lemari Custom",
    heroImage: "/assets/portfolio/wardrobe-meja-rias-custom-baf-banyumas.webp",
    sections: [
      {
        heading: "Lemari jadi cocok untuk kebutuhan cepat",
        body:
          "Lemari jadi biasanya cocok jika ukuran ruang standar, kebutuhan sederhana, dan ingin solusi yang cepat digunakan.",
      },
      {
        heading: "Lemari custom cocok untuk ruang khusus",
        body:
          "Jika ukuran ruang tidak standar, butuh penyimpanan tertentu, atau ingin tampilan menyatu dengan interior, lemari custom biasanya lebih fleksibel.",
      },
      {
        heading: "Pertimbangkan fungsi jangka panjang",
        body:
          "Lemari bukan hanya soal tampilan. Pertimbangkan jumlah barang, akses penggunaan, tinggi ruang, dan kebiasaan pemakai sehari-hari.",
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug, limit = 3) {
  return articles.filter((article) => article.slug !== currentSlug).slice(0, limit);
}
