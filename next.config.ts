import withSvgr from "next-svgr";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  output: "export",
  basePath: "/loka-client-test", // н
};

export default withSvgr(nextConfig);
