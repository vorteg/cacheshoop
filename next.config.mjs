/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains:['tailwindui.com','github.com','res.cloudinary.com','img.freepik.com','lumiere-a.akamaihd.net','cdn.pixabay.com','media.rawg.io','via.placeholder.com','fakestoreapi.com']
   }
}

export default nextConfig
