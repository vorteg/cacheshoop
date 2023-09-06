/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains:['github.com','res.cloudinary.com','media.rawg.io','via.placeholder.com','fakestoreapi.com']
   }
}

export default nextConfig
