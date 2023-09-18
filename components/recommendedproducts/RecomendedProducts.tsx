
import Image from 'next/image';
import { Game } from '@/types/game';
import Link from 'next/link';
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';
import Loading from '../recommendedvideogames/Loading';
import { readfproductsAction } from '@/app/(store)/storeFProducts/actions/fproductAction';
import ProductCarousel from '../Carousel';


const RecomendedProducts = async () => {
    const data = await readfproductsAction()

    if ( data.length === 0 ) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-[2rem] text-center font-semibold">Productos recomendados</h1>
            <ProductCarousel products={data} />
        </section>
    );
};

export default RecomendedProducts;