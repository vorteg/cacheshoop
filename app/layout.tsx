import "@/styles/globals.scss"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/SiteHeader"
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

export default async function RootLayout( { children }: RootLayoutProps ) {
  const siteHeader = await SiteHeader()
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

            <div className="relative flex flex-col min-w-[320px] min-h-screen md:min-w-[640px] md:min-h-screen lg:min-w-[1024px] lg:min-h-screen xl:min-w-[1280px] xl:min-h-screen">
              <FreeShipping />
              {siteHeader}
              <div className='pt-0 p-5 md:pb-64 md:pt-16 w-full flex-grow-1 flex-shrink-0 flex flex-col items-center justify-center'>
                {children}
              </div>
              <CustomFooter />
              <MobileMenu />
            </div>
            <TailwindIndicator />
          </ThemeProvider>

        </body>
      </html>
    </>
  )
}
