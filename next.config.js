/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.shopify.com'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
