
import axios from 'axios';
import { Product } from '@/types/product';
import { siteConfig } from '@/config/site';


export const getOneProduct = async (id:string): Promise<Product> => {
 
  const url =`${siteConfig.mainUrl}/api/products/product?id=${id}`
 
  try {
    const response = await axios.get(url);    
    return response.data as Product; // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch Product');
  }
};