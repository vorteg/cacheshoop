import { Separator } from './ui'

const BannerHowTo = () => {
    return (
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <div className="flex h-[10rem] items-center justify-center space-x-4">

                    <div className="max-w-[20rem] items-center justify-center">
                        <h1 className="text-[1.5rem] font-semibold">Elige los productos que vas a comrar</h1>
                        <p>Si quieres mas de uno, sumalos a tu carrito.</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="max-w-[20rem]">
                        <h1 className="justify-center text-[1.5rem] font-semibold">Paga con el medio de pago que quieras</h1>
                        <p>Compra con seguridad: usamos la tecnologia de Mercado Pago.</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="max-w-[20rem]">
                        <h1 className="text-[1.5rem] font-semibold">Recibe el producto que esperas</h1>
                        <p>Elige la forma de entrega que prefieras !y listo! Aseguramo tu entrada con Mercado Envios.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default BannerHowTo