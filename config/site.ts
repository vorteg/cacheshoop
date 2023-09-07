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
    {
      title: "Productos",
      href: "/products",
    },
    {
      title: "Servicios",
      href: "/services",
    },
  ],
  slides: [
    {
      url:"https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.webp"
    },
    {
      url:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000"
    },
    {
      url:"https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"
    },
    {
      url:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"
    },
  ],
  links: {
    instagram: "https://www.instagram.com/cacheshoop",
    car:"/carproducts"
  },
  images: {
    logo:"https://res.cloudinary.com/dehsikb6h/image/upload/c_scale,w_44/v1686791940/cachshoop/logo/appicon-style-a-cute-happy-astronaut-siamese-cat--flat-icon-717144716_p7aslq_cxc7q3.webp",
    hero:"https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.webp"
  },
  apiUrls:{
    gamesApi:'https://api.rawg.io/api/games?key=53f520bf819d4fb3b09fd3943522fe25&ordering=released&metacritic=87,100&platforms=1,2&dates=2022-01-01,2023-12-31',
    testPhotos:'https://jsonplaceholder.typicode.com/photos',
    fakeProducts:'https://fakestoreapi.com/products'
  }
}
