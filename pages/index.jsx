import Layout from '@/layouts/Layout'
import CustomHero from '@/components/customHero/CustomHero'
import PayForms from '@/components/payForms/PayForms'
import GalleryPro from '@/components/galleryPro/GalleryPro'

export default function Home() {
  return (
    <>
      <Layout>
        <CustomHero/> 
        {/* <PayForms/>  */}
         <GalleryPro/>
      </Layout>
    </>
  )
}
