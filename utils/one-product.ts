import axios from 'axios';
import { Product } from '@/types/product';

export const getOneProduct = async (id:number): Promise<Product> => {
  const url =`http://localhost:3000/api/products/${id}`
  try {
    const response = await axios.get(url);    
    return response.data as Product; // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch Products');
  }
};