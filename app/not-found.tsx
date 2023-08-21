import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Esta pagina no se encuentra en Cacheshoop</p>
            <Link href="/">Regresa a Home</Link>
        </div>
    )
}