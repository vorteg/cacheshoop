import { Container, Text, Spacer } from '@nextui-org/react'
import Image from 'next/image'

const Footer = () => {
  return (
    <Container css={{
            display: 'flex',
            width: 'auto',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: '#28d7d7'
        }}>
            <Image
            src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true'
            alt='icono de la app'
            width={320}
            height={180}
            //objectFit="cover"

            />
            
            <Text h6 color='white'>Videojuegos</Text>
            
            <Text h6 color='white'>¿Cómo comprar?</Text>
            <Spacer css={{flex:1}}/>
            <Text size={'$xs'}> 
            <p>Tel: 3328102664</p>
            <p>cacheshoop@gmail.com</p>
            <p>Roca 61 Zapopan Jalisco</p>

 </Text>
        </Container>
  )
}

export default Footer