import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import GhostButton from "./ui/GhostButton";
import Image from "next/image";

interface MainNavProps {
    items?: NavItem[]
}

function MobileMenu( { items }: MainNavProps ) {
    return (
        <div className="relative bottom-0 left-0 w-full h-20  bg-blue-700 p-4 text-white text-center md:hidden">
            <GhostButton>
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={siteConfig.images.logo}
                        alt="Descripción de la imagen"
                        width={44}
                        height={38}
                        quality="100"
                    />

                    <span className="font-bold">{siteConfig.name}</span>

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
    );
};

export default MobileMenu