import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';


interface Product {
  id:string
  name: string
  stock_quantity: number
  price: number
}

interface Orden {
  orden: string
  total: number
  products: Product[] 
  address:string

}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request){
  try {
    const body = await req.json()
    const subject = body.type == 'payment' ? "Preparando tu Compra" : "Pago Pendiente" 
    const dta:Orden = body.data
    await resend.emails.send({
      from: 'team@cacheshoop.com',
      to: [`${body.email}`,'vorteg.r@gmail.com','team@cacheshoop.com','cacheshoop@gmail.com'],
      subject: subject,
      react: EmailTemplate({firstName:`${body.firstName}`,type:`${body.type}`,data:dta}),
      text:""
    });
    return NextResponse.json({data:'todo chido'})
  } catch (error) {
    console.log(error)
    return NextResponse.json({data:'Hubo un problema', status:404})
  }
};