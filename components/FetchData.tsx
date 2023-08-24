'use client'

import { useEffect } from 'react';
import useModeStore from '@/app/(store)/gameInfoStore'
// import useProductsStore from '@/app/(store)/products';

function FetchData() {
    const { apiCall, isLoading } = useModeStore()
    // const prd = useProductsStore()

    useEffect( () => {
        apiCall()
        // prd.apiCall()
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