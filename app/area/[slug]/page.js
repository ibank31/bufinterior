import { notFound } from "next/navigation";
import AreaPage from "@/components/areas/AreaPage";
import { areaPages, getAreaPageBySlug } from "@/content/area-pages";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areaPages.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getAreaPageBySlug(slug);

  if (!area) {
    return {};
  }

  return buildMetadata({
    title: `${area.title} | Berkah Utami Furniture`,
    description: area.metaDescription || area.heroDescription,
    path: area.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const area = getAreaPageBySlug(slug);

  if (!area) {
    notFound();
  }

  const schema = faqSchema(area.faqs.map(([question, answer]) => ({ question, answer })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AreaPage area={area} />
    </>
  );
}
