import { siteConfig } from "@/content/site";

export function normalizeSitePath(path = "/") {
  const rawPath = String(path || "/").trim();

  if (!rawPath || rawPath === "/") {
    return "/";
  }

  const hashIndex = rawPath.indexOf("#");
  const beforeHash = hashIndex >= 0 ? rawPath.slice(0, hashIndex) : rawPath;
  const hash = hashIndex >= 0 ? rawPath.slice(hashIndex) : "";

  const queryIndex = beforeHash.indexOf("?");
  const pathname = queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash;
  const query = queryIndex >= 0 ? beforeHash.slice(queryIndex) : "";

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const cleanPathname = withLeadingSlash.replace(/\/{2,}/g, "/").replace(/\/+$/, "") || "/";

  return `${cleanPathname}${query}${hash}`;
}

export function absoluteSiteUrl(path = "/") {
  const normalizedPath = normalizeSitePath(path);
  const cleanBaseUrl = siteConfig.baseUrl.replace(/\/+$/, "");

  if (normalizedPath === "/") {
    return `${cleanBaseUrl}/`;
  }

  return `${cleanBaseUrl}${normalizedPath}`;
}
