import { Container,  Text } from '@nextui-org/react';

const CustomHero = () => {
  return (
    <hero
      //bgImage="https://www.example.com/hero-image.jpg"
      gradient
      background={{
        color: '#0000FF',
        alpha: 0.3
      }}
      className="hero"
    >
      <Container>
        <Text h1 size="2xl" color="inherit">
          Bienvenido a la tienda
        </Text >
        <Text color="inherit" size="lg">
          Encuentra aqui los mejores productos de Consolas y Videojuegos.
        </Text>
      </Container>
    </hero>
  );
};

export default CustomHero;