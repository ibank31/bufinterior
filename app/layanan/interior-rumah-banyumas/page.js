import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "interior-rumah-banyumas");

export const metadata = buildMetadata({
  title: "Interior Rumah Custom | Desain & Pengerjaan Ruang — BUF",
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
