import Head from 'next/head'
import Footer from '@/components/footer/Footer'
import FlashComponent from '@/components/flashComponent/FlashComponent'
import MyNavBar from '@/components/myNavBar/MyNavBar'

const Layout = ({ children, title = 'CacheShoop' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header data-testid="header" css>
        <FlashComponent/>
        <MyNavBar/>
      </header>
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout