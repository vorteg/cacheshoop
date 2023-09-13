export interface CProduct {
  /** Indentificador do item. */
  id: string;
  /** Título do item, é apresentado o fluxo de pagamento. */
  title: string;
  /** Descrição do artigo. */
  description?: string | undefined;
  /** URL da imagem do anúncio. */
  picture_url: string;
  /** Identificador da categoria do item. */
  category_id?: string | undefined;
  /** Quantidade de itens. */
  quantity: number ;
  /** Identificador de moeda em formato ISO_4217. */
  currency_id: Currency;
  /** Preço unitário. */
  unit_price: number ;
}


export type Currency =
 /** Mexican peso */
  'MXN' 