import { getGamesAPI } from '@/utils/games-api';
import {useGameStore} from '@/app/(store)/storeGames/slices/gameSlice'; // Asegúrate de que la ruta sea correcta
import { siteConfig } from '@/config/site';

export const fetchGamesAction = async () => {
  try {
    useGameStore.setState({isLoading:true})
    const url = siteConfig.apiUrls.gamesApi;
    const games = await getGamesAPI(url);
    useGameStore.setState({games:games})

  } catch (error) {
    console.error(error);
  } finally {
    useGameStore.setState({isLoading:false})
  }
};

export const readGamesAction = async () => {
  const {games} = useGameStore.getState()
  return games
}

export const readLoadingGameAction = async () => {
  const {isLoading} = useGameStore.getState()
  return isLoading
}