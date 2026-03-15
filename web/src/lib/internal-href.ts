const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function stripQueryAndHash(path: string) {
  const [pathname] = path.split(/[?#]/, 1);
  return pathname || "/";
}

export function buildInternalHref(path: string) {
  const normalized = ensureLeadingSlash(stripQueryAndHash(path));
  const withTrailingSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${BASE_PATH}${withTrailingSlash}`;
}

export function buildLocaleHref(locale: string) {
  return buildInternalHref(`/${locale}`);
}

export function buildVersionHref(locale: string, version: string) {
  return buildInternalHref(`/${locale}/${version}`);
}

export function buildSectionHref(locale: string, section: string) {
  return buildInternalHref(`/${locale}/${section}`);
}

export function switchLocaleHref(pathname: string, currentLocale: string, nextLocale: string) {
  const normalizedPath = stripQueryAndHash(pathname || `/${currentLocale}/`);
  const nextPath = normalizedPath.replace(`/${currentLocale}`, `/${nextLocale}`);
  return buildInternalHref(nextPath);
}

