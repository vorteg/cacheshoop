
import Image from 'next/image';
import { Game } from '@/types/game';
import Link from 'next/link';
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';
import Loading from '../recommendedvideogames/Loading';
import { readfproductsAction } from '@/app/(store)/storeFProducts/actions/fproductAction';


const RecomendedProducts = async () => {
    const data = await readfproductsAction()

    if ( data.length === 0 ) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-[2rem] text-center font-semibold">Productos recomendados</h1>
            <div className="px-5 md:px-0 grid grid-cols-1 md:m-18 md:grid-cols-3 md:gap-12 rounded-md">
                {data?.slice( 1, 4 ).map( ( prod ) => (


                    <div className="md:col-span-1" key={prod.id}>
                        <Link key={prod.id} href={`/videogames/${prod.id}`} >
                            <p className='font-bold'>{prod.title}</p>

                            <div className="relative aspect-square">
                                <Image
                                    src={prod.image}
                                    fill
                                    className="rounded-md object-cover"
                                    alt={prod.title}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                                />

                            </div>
                            <div className='flex justify-end gap-1'>


                                <p className='font-serif text-right'>$</p>
                                <p className='font-semibold'>{prod.price} MXN</p>
                            </div>

                        </Link>

                    </div>



                ) )}
            </div>
        </section>
    );
};

export default RecomendedProducts;