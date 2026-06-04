import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const service = services.find((item) => item.slug === "kitchen-set-banyumas");

export const metadata = buildMetadata({
  title: "Kitchen Set Banyumas | Desain & Pengerjaan Custom — BUF",
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
