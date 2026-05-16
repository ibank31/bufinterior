export const SITE_URL = "https://berkah-utami-furniture.vercel.app";

export const buildTitle = (title) =>
  title ? `${title} | BUF Berkah Utami Furniture` : "BUF — Berkah Utami Furniture";

export const buildCanonicalUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};
