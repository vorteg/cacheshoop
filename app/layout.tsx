import "@/styles/globals.scss"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/SiteHeader"
import { TailwindIndicator } from "@/components/ui"
import { ThemeProvider } from "@/components/ThemeProvider"
import CustomFooter from '@/components/CustomFooter'
import FreeShipping from '@/components/FreeShipping'
import MobileMenu from "../components/MobileMenu";
import FloatingButton from '@/components/FloatingButton'

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
      <html lang="en" suppressHydrationWarning>
        {/* <head /> */}
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <div className="grid grid-rows-[.5%,auto,3%] md:grid-rows-[3%,auto,1%] min-h-screen">
              <div className='row-span-1'>
                <FreeShipping />
                {/* @ts-expect-error Async Server Component */}
                <SiteHeader />
              </div>
              <div className='max-h-full row-span-1 '>
                {children}
                <FloatingButton />
              </div>

              <div className='row-span-1'>
                <CustomFooter />
                <MobileMenu />
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>

        </body>
      </html>
    </>
  )
}
