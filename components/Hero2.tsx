'use client'

import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const images = [
  siteConfig.images.hero,
  "https://res.cloudinary.com/dehsikb6h/image/upload/q_auto/v1695055792/cachshoop/heros/Corte_1_ceij7s.webp",
  "https://res.cloudinary.com/dehsikb6h/image/upload/q_auto/v1695050396/cachshoop/heros/Gran_Promo_qwwmpc.webp",
];

const Hero2: React.FC = () => {
  const [ activeIndex, setActiveIndex ] = useState( 0 );

  useEffect( () => {
    const interval = setInterval( () => {
      setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % images.length );
    }, 6000 );

    return () => clearInterval( interval );
  }, [] );

  const nextSlide = () => {
    setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % images.length );
  };

  const prevSlide = () => {
    setActiveIndex( ( prevIndex ) => ( prevIndex - 1 + images.length ) % images.length );
  };

  return (
    <section className="container max-w-[1320px] max-h-[580] grid items-center gap-6 pb-8 pt-6 md:mt-20">
      <h1 className=" text-3xl font-semibold">{siteConfig.description}</h1>
      <div className="relative">
        <Link href={"/laser"}>
          <img
            src={images[ activeIndex ]}
            alt="Carousel Image"
            className="w-full h-auto"
          />

        </Link>

        <button
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};


export default Hero2