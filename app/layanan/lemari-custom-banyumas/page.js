import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "lemari-custom-banyumas");

export const metadata = buildMetadata({
  title: "Lemari Custom Banyumas | Lemari Sesuai Ukuran — BUF",
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
