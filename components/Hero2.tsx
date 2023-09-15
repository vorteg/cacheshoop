'use client'

import { siteConfig } from '@/config/site';
import React, { useEffect, useState } from 'react';


const images = [
  siteConfig.images.hero,
  "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
  "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
  "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
];

const Hero2: React.FC = () => {
  const [ activeIndex, setActiveIndex ] = useState( 0 );

  useEffect( () => {
    const interval = setInterval( () => {
      setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % images.length );
    }, 3000 );

    return () => clearInterval( interval );
  }, [] );

  const nextSlide = () => {
    setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % images.length );
  };

  const prevSlide = () => {
    setActiveIndex( ( prevIndex ) => ( prevIndex - 1 + images.length ) % images.length );
  };

  return (
    <section className="container max-w-[1320px] max-h-[580] grid items-center gap-6 pb-8 pt-6">
      <h1 className=" text-3xl font-semibold">{siteConfig.description}</h1>
      <div className="relative">
        <img
          src={images[ activeIndex ]}
          alt="Carousel Image"
          className="w-full h-auto"
        />
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