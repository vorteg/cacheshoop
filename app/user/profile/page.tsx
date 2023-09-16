import { buttonVariants } from '@/components/ui'


function page() {
  return (
    <div className="container mx-auto p-4">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4">User Profile</h1>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Nombre:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={"userData.name"}
              required
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
              value={"userData.email"}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Telefono:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={"userData.phone"}
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
              value={"userData.address"}
            />
          </label>
        </div>
        <button
          className={`${buttonVariants( {
            size: "sm",
            variant: "default",
          } )} `}

        >
          Guardar
        </button>
      </div>
    </div>
  )
}

export default page