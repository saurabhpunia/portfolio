

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio', // Change this to match your GitHub repo name
  assetPrefix: '/portfolio/',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}


export default nextConfig
