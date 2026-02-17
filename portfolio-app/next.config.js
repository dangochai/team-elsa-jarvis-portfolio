/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Use unoptimized for local placeholder images (no actual files during dev)
    unoptimized: true,
  },
};

module.exports = nextConfig;
