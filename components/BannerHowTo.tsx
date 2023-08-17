import { Separator } from './ui'

const BannerHowTo = () => {
    return (
        <>
            <section className="container grid items-center pb-8 pt-6">
                <div className="flex h-[2rem] items-center justify-center space-x-4">

                    <div className="items-center justify-center">
                        <p className=" text-center text-sm font-semibold">Elige los productos que vas a comprar</p>
                        <p className='text-center text-xs'>Si quieres mas de uno, sumalos a tu carrito.</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="max-w-[20rem]" >
                        <p className="text-center justify-center text-sm font-semibold">Paga con el medio de pago que quieras</p>
                        <p className='text-center text-xs'>Compra con seguridad: usamos la tecnologia de Mercado Pago.</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="max-w-[20rem]" >
                        <p className=" text-center text-sm font-semibold">Recibe el producto que esperas</p>
                        <p className='text-center text-xs'>Elige la forma de entrega que prefieras !y listo! Aseguramo tu entrega con Mercado Envios.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default BannerHowTo