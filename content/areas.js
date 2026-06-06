export const areaTiers = [
  {
    tier: "T0",
    label: "Core Market",
    description: "Area utama terdekat dengan workshop dan sinyal lokasi utama BUF.",
    areas: [
      {
        slug: "purwokerto",
        name: "Purwokerto",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 1.0,
        status: "active",
      },
      {
        slug: "berkoh",
        name: "Berkoh",
        region: "Purwokerto Selatan",
        province: "Jawa Tengah",
        priority: 1.0,
        status: "active",
      },
    ],
  },
  {
    tier: "T1",
    label: "Banyumas Priority Expansion",
    description: "Area prioritas dekat Purwokerto untuk ekspansi landing page setelah data proyek/portofolio siap.",
    areas: [
      {
        slug: "sokaraja",
        name: "Sokaraja",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.9,
        status: "planned",
      },
      {
        slug: "baturraden",
        name: "Baturraden",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.88,
        status: "planned",
      },
      {
        slug: "kembaran",
        name: "Kembaran",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.86,
        status: "planned",
      },
      {
        slug: "karanglewas",
        name: "Karanglewas",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.84,
        status: "planned",
      },
    ],
  },
  {
    tier: "T2",
    label: "Banyumas Secondary Expansion",
    description: "Area Banyumas lanjutan yang bisa dibuat setelah halaman T1 kuat dan data portofolio per area tersedia.",
    areas: [
      {
        slug: "ajibarang",
        name: "Ajibarang",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.78,
        status: "planned",
      },
      {
        slug: "cilongok",
        name: "Cilongok",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.76,
        status: "planned",
      },
      {
        slug: "wangon",
        name: "Wangon",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.74,
        status: "planned",
      },
      {
        slug: "banyumas",
        name: "Banyumas",
        region: "Kabupaten Banyumas",
        province: "Jawa Tengah",
        priority: 0.72,
        status: "planned",
      },
    ],
  },
  {
    tier: "T3",
    label: "Outside Banyumas Expansion",
    description: "Area luar Banyumas hanya dibuat jika sudah ada data proyek, portofolio, atau alasan bisnis yang kuat.",
    areas: [
      {
        slug: "purbalingga",
        name: "Purbalingga",
        region: "Kabupaten Purbalingga",
        province: "Jawa Tengah",
        priority: 0.65,
        status: "future",
      },
      {
        slug: "cilacap",
        name: "Cilacap",
        region: "Kabupaten Cilacap",
        province: "Jawa Tengah",
        priority: 0.62,
        status: "future",
      },
      {
        slug: "kebumen",
        name: "Kebumen",
        region: "Kabupaten Kebumen",
        province: "Jawa Tengah",
        priority: 0.6,
        status: "future",
      },
    ],
  },
];

export const priorityAreas = areaTiers.flatMap((tier) =>
  tier.areas.map((area) => ({
    ...area,
    tier: tier.tier,
    tierLabel: tier.label,
  }))
);

export function getAreaBySlug(slug) {
  return priorityAreas.find((area) => area.slug === slug);
}

export function getAreasByStatus(status) {
  return priorityAreas.filter((area) => area.status === status);
}
