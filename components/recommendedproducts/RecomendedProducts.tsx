

import ProductCarousel from '../Carousel';
import { readProductsAction } from '@/app/(store)/storeProducts/actions/productAction';


const RecomendedProducts = async () => {
    const data = await readProductsAction()

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