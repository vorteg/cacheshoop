'use client'

import { addAddress } from '@/app/(store)/userData/actions/userActions'
import { siteConfig } from '@/config/site'
import axios from 'axios'
import { useEffect, useState } from 'react'

function AddressInput( { id }: { id: string | undefined } ) {
  const [ addr, setAddr ] = useState( '' )
  useEffect( () => {
    const getData = async () => {
      const response = await axios( `${siteConfig.mainUrl}/api/getUserData?id=${id}` )
      const { address } = response.data
      setAddr( address )
      addAddress( address )
    }
    getData()
  }, [] )
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">
        Dirección de Envío:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="address"
          value={addr}
          onChange={( e ) => addAddress( e.target.value )}
        />
      </label>
    </div>
  )
}

export default AddressInput

