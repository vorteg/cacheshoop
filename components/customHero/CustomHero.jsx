import { Container,  Text } from '@nextui-org/react';
import Image from 'next/image';



const CustomHero = () => {
  
  return (
   
      <Container
      css={{
      backgroundImage:"url('https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.png')",
      backgroundSize:"cover",
      height:"600px",
      display:'flex',
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      textAlign:"center"
      }}
      >
        
        <Text h1 color='white' size="2xl" >
          Bienvenido a la tienda
        </Text >
        <Text color="white" size="lg">
          Encuentra aqui los mejores productos de Consolas y Videojuegos.
        </Text>
      </Container>
  );
};

export default CustomHero;