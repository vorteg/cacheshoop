import mercadopago from 'mercadopago'


export function startMercadoPago(){
  try {
    if (process.env.ML_ACCESS_TOKEN){
       mercadopago.configure({
            access_token: process.env.ML_ACCESS_TOKEN
           })
       return mercadopago
     
    }
  } catch (error) {
    console.log(error)
    return null
  }
  
  
}

