import {startMercadoPago } from '@/app/api/helpers/config-ml'

export const receiveWebhook = async (payment:any) => {
  try {
    const mp = startMercadoPago()
    console.log(payment)
    if(payment.type === 'payment'){
      const payId: number = parseInt(payment["data.id"], 10)
      console.log(payId)
      const data = await mp?.payment.findById(payId)
      console.log(data)
    }
    return 204
    
  } catch (error) {
    console.log(error)
    return 500
  }
}