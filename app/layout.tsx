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

export default function RootLayout({ children }: RootLayoutProps) {
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

            <div className="relative flex flex-col min-w-[320px] min-h-[784px] md:min-w-[640px] md:min-h-[1024px] lg:min-w-[1024px] lg:min-h-[768px] xl:min-w-[1280px] xl:min-h-[1024px]">
              <FreeShipping />
              <SiteHeader />
              <div className='flex flex-col items-center justify-center'>
                <div className='w-full'>
                  {children}
                </div>
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
