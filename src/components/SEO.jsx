import { Helmet } from "react-helmet-async";
import { buildTitle } from "../utils/seo";

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{buildTitle(title)}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={buildTitle(title)} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <html lang="id" />
    </Helmet>
  );
}
