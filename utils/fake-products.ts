import axios from 'axios';
import { FProduct } from '@/types/fproduct';

export const getFProductsAPI = async (url: string): Promise<FProduct[]> => {
  try {
    const response = await axios.get(url);
    return response.data as FProduct[]; // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch games');
  }
};