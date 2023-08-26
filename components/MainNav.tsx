
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import GhostButton from "./ui/GhostButton";
import Image from 'next/image';

interface MainNavProps {
  items?: NavItem[]
}

export default function MainNav( { items }: MainNavProps ) {
  return (
    <div className="flex gap-6 md:gap-10">
      <GhostButton>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={siteConfig.images.logo}
            alt="CacheShoop Logo"
            className="mr-3 h-8"
            width={44}
            height={38}
            quality="100"
          />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>

      </GhostButton>

      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            ( item, index ) =>
              item.href && (
                <GhostButton key={index.toString()}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>

                </GhostButton>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
