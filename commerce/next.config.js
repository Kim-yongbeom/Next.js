/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['picsum.photos', 'raw.githubusercontent.com', 'encrypted-tbn0.gstatic.com']
  }
}

module.exports = nextConfig
