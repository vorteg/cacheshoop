'use client'

import { useEffect } from 'react';
import useModeStore from '@/app/(store)/gameInfoStore'

function FetchData() {
    const { games,apiCall } = useModeStore()
    
    useEffect(() => {
        apiCall()
    }, [])
    console.log(games)
    return (
        <>
        </>
    )
}

export default FetchData