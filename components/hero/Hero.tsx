'use client'
import { siteConfig } from "@/config/site"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

const Hero = () => {

    return (
        <>
            <section className="w-full container grid items-center gap-6 pb-8 pt-6">
                <h1 className=" text-3xl font-semibold">{siteConfig.description}</h1>
                <div className="flex flex-col items-center gap-2">
                    {/* <Image
                        src={siteConfig.slides[0].url}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    /> */}
                   <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image
                        src={siteConfig.slides[0].url}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    /></SwiperSlide>
                        <SwiperSlide><Image
                        src={siteConfig.slides[1].url}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    /></SwiperSlide>
                        <SwiperSlide><Image
                        src={siteConfig.slides[2].url}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    /></SwiperSlide>
                        <SwiperSlide><Image
                        src={siteConfig.slides[3].url}
                        width={1024}
                        height={384}
                        alt="cover"
                        priority={true}
                    /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Hero