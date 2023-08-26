import axios from 'axios';
import { Game } from '@/types/game';

export const getGamesAPI = async (url: string): Promise<Game[]> => {
  try {
    const response = await axios.get(url);
    return response.data as Game[]; // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch games');
  }
};