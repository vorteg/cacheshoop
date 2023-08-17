import { siteConfig } from "@/config/site"
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <h1 className=" text-3xl font-semibold">{siteConfig.description}</h1>
                <div className="flex flex-col items-center gap-2">
                    <Image src={siteConfig.images.hero} width={1100} height={900} alt="cover" />
                </div>
            </section>
        </>
    )
}

export default Hero