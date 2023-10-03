
interface Product {
  id: string
  name: string
  stock_quantity: number
  price: number
}

interface Orden {
  orden: string
  total: number
  products: Product[]
  address: string


}


interface EmailTemplateProps {
  firstName: string;
  type: string;
  data: Orden
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ( {
  firstName, type, data
} ) => {
  if ( type == 'payment' ) {
    return ( <div>
      <h1>Hola, de nuevo!</h1>
      <p>Gracias por tu Compra tu orden esta siendo despachada.Saludos!</p>
      <p>Numero de Orden:{data.orden}</p>
      <p>Se enviara a la siguiente direccion:{data.address}</p>
      <p>Productos: {data.products.map( ( item, index ) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Cantidad:{item.stock_quantity}</p>
          <p>Precio: ${item.price}MXN</p>
        </div>
      ) )}</p>
      <p>Total: ${data.total}MXN</p>
      <p className='font-bold'> Para cualquier duda o aclaracion:</p>
      <p><span className='font-bold'>whatsapp:3318444445</span> <span className='font-bold'>Correos:</span>
        team@cacheshoop.com o al cacheshoop@gmail.com
      </p>
    </div> )

  }
  else {
    return ( <div>
      <h1>Hola, {firstName}!</h1>
      <p>Orden de Compra, estamos en espeara de que se efectue el pago.Saludos!</p>
      <p>Numero de Orden:{data.orden}</p>
      <p>Se enviara a la siguiente direccion:{data.address}</p>
      <p>Productos: {data.products.map( ( item, index ) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Cantidad:{item.stock_quantity}</p>
          <p>Precio: ${item.price}MXN</p>
        </div>
      ) )}</p>
      <p>Total: ${data.total}MXN</p>
    </div> )
  }
}
