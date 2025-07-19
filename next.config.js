/** @type {import('next').NextConfig} */
const nextConfig = {  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['readdy.ai'],
  },  experimental: {
    appDir: true,
  },
};module.exports = nextConfig;```
###
