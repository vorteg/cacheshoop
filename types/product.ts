interface Image {
    src: string,
    alt: string
}

interface Images {
   
    data:Image[]
    
}

export interface Color
{ name: string, 
  class: string, 
  selectedClass: string 
}

interface Colors
{ data:Color[]
}

export interface Size{
  name:string, 
  inStock: boolean 
}
export interface Sizes {
  data: Size[]
}

interface Highlight {
  data:[string]
}

export interface Product  {
   id: number,
   created_at: string,
   updated_at: string,
   name: string,
   description: string,
   category: string,
   price: number,
   stock_quantity: number,
   images: Images,
   is_active: string,
   user_id: string,
   condition: string,
   colors:Colors,
   sizes: Sizes,
   highlights: Highlight,
   details: string
 }