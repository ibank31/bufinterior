import { Helmet } from "react-helmet-async";
import { buildCanonicalUrl, buildTitle } from "../utils/seo";

export default function SEO({ title, description, path = "/" }) {
  const pageTitle = buildTitle(title);
  const canonicalUrl = buildCanonicalUrl(path);

  return (
    <Helmet>
      <html lang="id" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}
