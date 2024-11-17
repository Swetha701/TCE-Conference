/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  // basePath: "/TCEResearchConclave",
  assetPrefix:"/public/assets"

};

export default nextConfig;
