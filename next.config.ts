import withSvgr from "next-svgr";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default withSvgr(nextConfig);
