'use client'
import { useState } from 'react'
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import GhostButton from "./ui/GhostButton";
import Image from "next/image";
import { Button, buttonVariants, Icons } from "@/components/ui"
import { ThemeToggle } from "@/components/ThemeToggle"

interface MainNavProps {
    items?: NavItem[]
}

function MobileMenu() {
    const items = siteConfig.mainNav
    const [ Toggle, showMenu ] = useState( false )
    console.log( Toggle )
    return (
        <div className={Toggle ? "fixed bottom-0 left-0 w-full h-[8rem] rounded-md border-t-2 dark:border-blue-900  dark:bg-black p-4 dark:text-white bg-gray-300 text-black text-center md:hidden" : "fixed bottom-0 left-0 w-full h-20 border-t-2 dark:border-blue-900  dark:bg-black p-4 dark:text-white bg-gray-300 text-black text-center md:hidden"}>
            {Toggle ? (
                <nav className="grid grid-cols-[repeat(3,1fr)] gap-1">
                    {items?.map(
                        ( item, index ) =>
                            item.href && (
                                <GhostButton key={index.toString()}>
                                    <Link
                                        href={item.href}
                                    >
                                        {item.title}
                                    </Link>

                                </GhostButton>
                            )
                    )}
                    <div
                        className={buttonVariants( {
                            size: "sm",
                            variant: "ghost",
                        } )}
                    >
                        <Icons.car />
                    </div>
                    <div
                        className={buttonVariants( {
                            size: "sm",
                            variant: "ghost",
                        } )}
                    >
                        <Link href='/'>
                            <Icons.home />
                        </Link>
                    </div>
                    <div
                        onClick={() => showMenu( !Toggle )}
                        className={buttonVariants( {
                            size: "sm",
                            variant: "ghost",
                        } )}
                    >
                        <Icons.close className='absolute right-10 bottom-2' />
                    </div>
                </nav>
            ) : null}
            <div className="flex space-x-12 justify-center">
                <div
                    className={Toggle ? 'hidden' : buttonVariants( {
                        size: "sm",
                        variant: "ghost",
                    } )}
                >
                    <Icons.car />
                </div>
                <Button className={Toggle ? 'hidden' : 'bg-gray-300  p-1 shadow-md dark:shadow-sm dark:shadow-white dark:bg-black'}>
                    <Image
                        src={siteConfig.images.logo}
                        alt="Descripción de la imagen"
                        className={Toggle ? 'hidden' : 'flex items-center'}
                        onClick={() => showMenu( !Toggle )}
                        width={44}
                        height={38}
                        quality="100"
                    />
                </Button>
                <div className={Toggle ? 'hidden' : 'show'}>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu