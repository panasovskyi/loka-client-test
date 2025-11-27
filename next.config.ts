import withSvgr from "next-svgr";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/loka-client-test", // н
};

export default withSvgr(nextConfig);
