'use client'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

function MPButton( { publicKey, preferenceId }: { publicKey: string | undefined, preferenceId: string } ) {

  if ( publicKey ) {
    initMercadoPago( publicKey )
    return (
      <div className='w-64'>
        <Wallet initialization={{ preferenceId: preferenceId }} locale='es-MX' />
      </div>
    )

  } else {
    return (
      <div>
        <h2>Faltan datos </h2>
      </div>
    )
  }



}

export default MPButton