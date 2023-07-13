import { siteConfig } from "@/config/site"
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <h1 className="text-[2rem] font-semibold">{siteConfig.description}</h1>
                <div className="flex flex-col items-center gap-2">
                    <Image src="https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.png" width={1100} height={900} alt="cover" />
                </div>
            </section>
        </>
    )
}

export default Hero