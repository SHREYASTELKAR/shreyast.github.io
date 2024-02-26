/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? 'http://shreyast.github.io':'',
  images: {
    unoptimized: true
  }
}
 
module.exports = nextConfig