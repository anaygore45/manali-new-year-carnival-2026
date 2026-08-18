import type { NextConfig } from "next";

const nextConfig: NextConfig = { images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "wanderon-images.gumlet.io" }] } };
export default nextConfig;
