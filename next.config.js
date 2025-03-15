/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["pictures-storage.storage.eu-north1.nebius.cloud"],
  },
};

module.exports = nextConfig;
