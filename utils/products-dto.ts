import axios from 'axios';
import { Product } from '@/types/product';

export const getProductsAPI = async (): Promise<Product[]> => {
  const url =`${process.env.URL_CALLBACK}/api/products`
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