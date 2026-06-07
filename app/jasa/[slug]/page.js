import { notFound } from "next/navigation";
import LocalServicePage from "@/components/services/LocalServicePage";
import { localServices, getLocalServiceBySlug } from "@/content/local-services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return localServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getLocalServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} | Berkah Utami Furniture`,
    description: service.metaDescription || service.heroDescription,
    path: service.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getLocalServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <LocalServicePage service={service} />;
}
