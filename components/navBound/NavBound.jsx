import { Container, Text, Spacer, Image} from '@nextui-org/react'

const NavBound = () => {
    return (
        <Container css={{
            disply: 'flex',
            width: '100',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: '#28d7d7'
        }}>
            <Image
            src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true'
            alt='icono de la app'
            width={70}
            height={70}
            objectFit="cover"

            />
            <Text color='white'>Videojuegos</Text>
            <Spacer css={{ flex:1}}/>
            <Text color='white'>¿Cómo comprar?</Text>
        </Container>
    )
}


export default NavBound