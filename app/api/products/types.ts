
export interface product  {
   id: number,
   created_at: string,
   updated_at: string,
   name: string,
   description: string,
   category: string,
   price: number,
   stock_quantity: number,
   images: {},
   is_active: string,
   user_id: string,
   condition: string,
   colors:{},
   sizes: {},
   highlights: string,
   details: string
 }