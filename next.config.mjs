/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Set base path for GitHub Pages
  basePath: '/auth-toolkit',
}

export default nextConfig