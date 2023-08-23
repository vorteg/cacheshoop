export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Cache Shoop",
  description:
    "Bienvenidos, a las Delicias del mundo Gaming!",
  mainNav: [
    {
      title: "Videojuegos",
      href: "/videogames",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/cacheshoop",
  },
  images: {
    logo:"https://res.cloudinary.com/dehsikb6h/image/upload/c_scale,w_44/v1686791940/cachshoop/logo/appicon-style-a-cute-happy-astronaut-siamese-cat--flat-icon-717144716_p7aslq_cxc7q3.webp",
    hero:"https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.webp"
  }
}
