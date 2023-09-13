'use client'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

function MPButton( { publicKey, preferenceId }: { publicKey: string | undefined, preferenceId: string } ) {

  if ( publicKey ) {
    console.log( preferenceId )

    initMercadoPago( publicKey )
    return (
      <div className='w-64'>
        <Wallet initialization={{ preferenceId: preferenceId }} locale='es-MX' />
      </div>
    )

  } else {
    return (
      <div>
        <h2>Falta datos </h2>
      </div>
    )
  }



}

export default MPButton