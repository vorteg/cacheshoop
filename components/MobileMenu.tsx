import * as React from "react"
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import GhostButton from "./ui/GhostButton";

interface MainNavProps {
    items?: NavItem[]
}

function MobileMenu({ items }: MainNavProps) {
    return (
        <div className="relative bottom-0 left-0 w-full h-20  bg-blue-700 p-4 text-white text-center md:hidden">
            <GhostButton>
                <Link href="/" className="flex items-center space-x-2">
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <img src={siteConfig.images.logo} alt='logo' className="h-10 w-10" />
                    <span className="inline-block font-bold">{siteConfig.name}</span>
                </Link>

            </GhostButton>

            {items?.length ? (
                <nav className="flex gap-6">
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <GhostButton key={uuidv4()}>
                                    <Link
                                        key={uuidv4()}
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
    );
};

export default MobileMenu