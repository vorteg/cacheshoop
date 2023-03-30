import Head from 'next/head'
import Footer from '@/components/footer/Footer'
import FlashComponent from '@/components/flashComponent/FlashComponent'
import MyNavBar from '@/components/myNavBar/MyNavBar'

const Layout = ({ children, title = 'CacheShoop' }) => {
  const favIcon = 'https://res.cloudinary.com/dehsikb6h/image/upload/v1680203558/cachshoop/icons/shopping-bag_dqfphy.png'
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favIcon} />
      </Head>
      
      <header >
        <FlashComponent/>
        <MyNavBar/>
      </header>
      <main>{children}</main>

      {/* <Footer /> */}
    </>
  )
}

export default Layout