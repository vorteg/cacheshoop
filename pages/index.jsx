import Layout from '@/layouts/Layout'
import CustomHero from '@/components/customHero/CustomHero'
import PayForms from '@/components/payForms/PayForms'

export default function Home() {
  return (
    <>
      <Layout>
        <CustomHero/>
        <PayForms/>
      </Layout>
    </>
  )
}
