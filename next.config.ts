import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static HTML export
  reactStrictMode: true, // Optional but recommended
  // Add other static-safe options here if needed
  // Disables built-in image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // Optional: Enable trailing slashes like /about/ instead of /about
  trailingSlash: true,

};

export default nextConfig;