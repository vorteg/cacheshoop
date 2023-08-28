import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import SiteHeader from "@/components/SiteHeader"
import FreeShipping from '@/components/FreeShipping'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export const dynamic = 'force-dynamic'

export default function RootLayout( { children }: RootLayoutProps ) {

  return (
    <>

      <div className="grid gap-5 md:grid-rows-[5%,auto,20%]">
        <div className='row-span-1'>

          <FreeShipping />
          {/* @ts-expect-error Async Server Component */}
          <SiteHeader />
        </div>

        <main className='h-screen w-[90%] max-w-full m-auto px-2 row-span-2 md:px10 '>
          {children}
        </main>
        <div className='row-span-3'>
        </div>

      </div>

    </>
  )
}
