'use client'

import React from 'react'
import { Button } from '@/components/ui'
import useCounterStore from '../(store)/counter'

function page() {
    const { count, increment } = useCounterStore()
    console.log(count)
    return (
        <>
            <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">

                <h1 className="text-[2rem] font-semibold">{count}</h1>
                <div className='m-18 grid grid-cols-4 gap-12 rounded-md'>
                    <Button className='col-span-4 md:col-span-2 lg:col-span-1' onClick={increment}>inc</Button>
                </div>

            </section>
        </>
    )
}

export default page