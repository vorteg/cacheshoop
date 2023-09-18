
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';
import Loading from './Loading';
import VideogameCarousel from '../CarouselVideogame';




const RecomendedVideogames = async () => {
  const data = await readGamesAction()
  const isLoading = await readLoadingGameAction()

  if ( isLoading ) {
    return <Loading />;
  }

  if ( data.length === 0 ) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <section className="container grid items-center gap-6 md:pb-8 pt-6 md:py-10">
      <h1 className="text-[2rem] text-center md:font-semibold">Video juegos recomendados</h1>

      <VideogameCarousel data={data} />

    </section>
  );
};

export default RecomendedVideogames;