'use client'
import { buttonVariants } from '@/components/ui'
import Image from 'next/image';
import { useState, useEffect } from "react";
import axios from "axios";
import { siteConfig } from '@/config/site';
import { useSearchParams } from 'next/navigation';

function page() {
  const searchParams = useSearchParams();
  const u = searchParams.get( 'u' )?.toString()
  const [ userData, setUserData ] = useState( {
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar_url: "",
  } );
  const updateUserData = async () => {
    try {
      await axios.post( `${siteConfig.mainUrl}/api/updateUserData`, {
        id: u,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
      } );
      // Handle success, e.g., show a success message
    } catch ( error ) {
      console.error( 'Error al enviar los datos:', error );
      // Handle error, e.g., show an error message
    }
  }


  useEffect( () => {

    axios.get( `${siteConfig.mainUrl}/api/getUserData?id=${u}` ) // Ajusta la URL de la API según tu estructura
      .then( ( response ) => {
        const { name, email, phone, address, avatar_url } = response.data;
        setUserData( { name, email, phone, address, avatar_url } );
      } )
      .catch( ( error ) => {
        console.error( "Error al obtener los datos del usuario:", error );
      } );
  }, [] );
  return (
    <div className="my-16 container mx-auto grid place-content-center p-4">
      <div className="max-w-screen-md shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4">User Profile</h1>
        <div className="mb-4 flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={userData.avatar_url} // Debe ser la URL de la imagen del avatar
              alt="Avatar"
              width={64} // Ancho deseado de la imagen
              height={64} // Alto deseado de la imagen
            />
          </div>
          <label className="block  text-sm font-bold mb-2">
            Nombre:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={userData.name}
              required
              onChange={( e ) => setUserData( { ...userData, name: e.target.value } )}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Email:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={userData.email}
              required
              onChange={( e ) => setUserData( { ...userData, email: e.target.value } )}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Telefono:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              value={userData.phone ? userData.phone : " "}
              onChange={( e ) => setUserData( { ...userData, phone: e.target.value } )}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Dirección:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={userData.address ? userData.address : " "}
              onChange={( e ) => setUserData( { ...userData, address: e.target.value } )}
            />
          </label>
        </div>
        <button
          className={`${buttonVariants( {
            size: "sm",
            variant: "default",
          } )} `}
          onClick={updateUserData}

        >
          Guardar
        </button>
      </div>
    </div>
  )
}

export default page