/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CLEVERONCOMMAND: KASM REGISTRY',
    description: 'CLEVERONCOMMAND: for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/exee21/kasm-registry/',
    contactUrl: 'https://cleveroncommand.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
