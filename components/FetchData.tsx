'use client'

import { useEffect } from 'react';
import useModeStore from '@/app/(store)/gameInfoStore'


function FetchData() {
    const { apiCall, isLoading } = useModeStore()


    useEffect( () => {
        apiCall()
    }, [] )

    if ( isLoading ) {
        return <p>Cargando...</p>
    }
    return (
        <>
        </>
    )
}

export default FetchData