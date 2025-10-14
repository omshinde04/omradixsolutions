/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 enables static export
  images: {
    unoptimized: true, // 👈 important for static hosting (no Next Image optimizer)
  },
};

export default nextConfig;
