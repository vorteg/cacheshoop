'use client'

import React from 'react'
import useCounterStore from '@/app/(store)/gameInfoStore'
import { Button } from '@/components/ui'

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