import type { NextConfig } from "next";

const rawBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();

const basePath =
  !rawBasePath || rawBasePath.toLowerCase() === "null"
    ? ""
    : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`;

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
