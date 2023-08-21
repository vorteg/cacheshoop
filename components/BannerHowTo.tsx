import { Separator } from './ui'

const BannerHowTo = () => {
    return (
        <>
            <section className="container grid items-center justify-center pb-8 pt-6">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-4">
                    <div className="max-w-[20rem]">
                        <p className="text-sm font-semibold">Elige los productos que vas a comprar</p>
                        <p className="text-xs">Si quieres más de uno, añádelos a tu carrito.</p>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block" /> {/* Agregado de clase hidden y md:block */}
                    <div className="max-w-[20rem]">
                        <p className="text-sm font-semibold">Paga con el medio de pago que quieras</p>
                        <p className="text-xs">Compra con seguridad: utilizamos la tecnología de Mercado Pago.</p>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block" /> {/* Agregado de clase hidden y md:block */}
                    <div className="max-w-[20rem]">
                        <p className="text-sm font-semibold">Recibe el producto que esperas</p>
                        <p className="text-xs">Elige la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BannerHowTo