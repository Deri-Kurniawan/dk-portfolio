/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: true,
  images: {
    domains: ["res.cloudinary.com", "images.pexels.com", "i.pinimg.com"],
  },
};

module.exports = nextConfig;
