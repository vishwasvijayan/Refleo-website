/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → ./out (ready for S3). next/image needs unoptimized
  // because the Image Optimization API requires a running server.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
