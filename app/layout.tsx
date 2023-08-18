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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <div className="relative flex max-h-screen flex-col">
              <FreeShipping />

              <SiteHeader />
              {/* <div className="max-h-screen flex-grow overflow-y-auto mb-24">{children}</div> */}
              <div className='flex-grow m-20' >{children}</div>
              <CustomFooter />

            </div>
            <MobileMenu />
            <TailwindIndicator />
          </ThemeProvider>

        </body>
      </html>
    </>
  )
}
