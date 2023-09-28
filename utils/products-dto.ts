import axios from 'axios';
import { Product } from '@/types/product';
import { siteConfig } from '@/config/site';

export const getProductsAPI = async (): Promise<Product[]> => {
  const url =`${siteConfig.mainUrl}/api/products`
  try {
    const response = await axios.get(url);        
    if(response != undefined){
      return response.data as Product[]; // Assuming the response structure has a "results" property

    }
    return([])
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch Products');
  }
};