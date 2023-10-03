'use client'

import { getAddress } from '@/app/(store)/userData/actions/userActions';
import QuotePage from './QuotePage';

function Resume() {

  const { address } = getAddress()

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Resumen de la Compra</h2>

      <QuotePage />
      <p className='font-bold'>Direccion de envio : </p>
      <span>{address}</span>
    </div>
  )
}

export default Resume