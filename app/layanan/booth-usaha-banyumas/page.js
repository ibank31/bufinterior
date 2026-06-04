import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "booth-usaha-banyumas");

export const metadata = buildMetadata({
  title: "Booth Usaha Banyumas | Booth Custom UMKM — BUF",
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
