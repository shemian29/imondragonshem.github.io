import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/imondragonshem.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
