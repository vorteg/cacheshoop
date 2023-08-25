import { siteConfig } from "@/config/site"
import Image from 'next/image'

const Hero = () => {

    return (
        <>
            <section className="w-full container grid items-center gap-6 pb-8 pt-6">
                <h1 className=" text-3xl font-semibold">{siteConfig.description}</h1>
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src={siteConfig.images.hero}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    />
                </div>
            </section>
        </>
    )
}

export default Hero