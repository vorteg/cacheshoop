import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { siteConfig } from '@/config/site'

function CardProduct() {
  return (
    <div className="bg-slate-300 rounded-lg shadow-md overflow-hidden">
      <Link href="#">
        <div className="flex">
          <div className="flex-shrink-0">
            <Image
              src={siteConfig.images.logo}
              alt="CacheShoop Logo"
              className="h-12 w-12"
              width={48}
              height={48}
              quality={100}
            />
          </div>
          <div className="flex-grow p-4">
            <h2 className="text-xl text-gray-700 font-semibold mb-2">Celular Nokia</h2>
            <p className="text-gray-600 mb-4">
              Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vero animi, aliquam hic quo.
            </p>
            <p className="text-gray-600">Precio: <span className="text-green-500">$3.50</span></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProduct