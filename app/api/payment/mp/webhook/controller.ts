import {startMercadoPago } from '@/app/api/helpers/config-ml'

export const receiveWebhook = async (payment:any) => {
  try {
    const mp = startMercadoPago()
    if(payment.type === 'payment'){
      const payId: number = parseInt(payment["data.id"], 10)
      console.log("desde dentro de webhook")
      console.log(payment)
      console.log(payId)
      const data = await mp?.payment.findById(payId)
      console.log(data)
    }
    return 204
    
  } catch (error) {
    if (error instanceof Error && error.message === 'Payment not found')
      return 404
    console.log(error)
    return 500
  }
}