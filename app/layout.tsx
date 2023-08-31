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

            <div className="relative grid grid-cols-1 md:grid-rows-[2%,auto,5%] min-w-[320px] min-h-screen md:min-w-[640px] md:min-h-screen lg:min-w-[1024px] lg:min-h-screen xl:min-w-[1280px] xl:min-h-screen">
              <div>
                <FreeShipping />
                {/* @ts-expect-error Async Server Component */}
                <SiteHeader />
              </div>
              <div className='pt-0 p-5 md:pb-4 w-full flex-grow-1 flex-shrink-0 flex flex-col items-center justify-center'>
                {children}
              </div>
              <div>
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
