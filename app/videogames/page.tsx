'use client'

import React from 'react'
import { Button } from '@/components/ui'
import useCounterStore from '../(store)/counter'

function page() {
    const { count, increment } = useCounterStore()
    console.log(count)
    return (
        <>
            <h1>{count}</h1>
            <Button onClick={increment}>inc</Button>
        </>
    )
}

export default page