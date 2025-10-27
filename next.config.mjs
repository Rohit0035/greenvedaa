/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
//   output: 'export', 
  trailingSlash: true,
  experimental: {
    staticPageGenerationTimeout: 300,
  },
};

export default nextConfig;