import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants, Icons } from "@/components/ui"
import MainNav from "@/components/MainNav"
import { ThemeToggle } from "@/components/ThemeToggle"
import { AuthButtonServer } from '@/components/AuthButtonServer'

export function SiteHeader() {
  return (
    <header className="fixed top-4 z-30 w-full border-b bg-background hidden md:block">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants( {
                  size: "sm",
                  variant: "ghost",
                } )}
              >
                <Icons.car />
              </div>

            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants( {
                  size: "sm",
                  variant: "ghost",
                } )}
              >
                <Icons.instagram />
                {/* <span className="sr-only">Instagram</span> */}
              </div>
            </Link>

            <ThemeToggle />
            <div className={buttonVariants( {
              size: "sm",
              variant: "ghost",
            } )}>
              <AuthButtonServer />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
