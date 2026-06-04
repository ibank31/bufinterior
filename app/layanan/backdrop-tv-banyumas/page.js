import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "backdrop-tv-banyumas");

export const metadata = buildMetadata({
  title: "Backdrop TV Banyumas | Custom Sesuai Ruang — BUF",
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
