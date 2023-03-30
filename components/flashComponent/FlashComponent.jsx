import React from 'react';
import { Container, Text, Spacer } from '@nextui-org/react'

// const Box = styled("div", {
//   lineHeight: 1.25,
//   padding: '8px 10px',
//   alignItems: 'center',
//   backgroundColor: '#333',
//   boxSizing:'border-box',
//   color: '#ffffff',
//   display:'flex',
//   justifyContent: 'center',
//   minHeight:'30px',
//   textAlign:'center',
//   top:'0',
//   width: '100%',
//   position:'stick',
//   zIndex: 1000
// });

const cssText={
          color:'white',
          textAlign:'center',
          margin:'$1'
        }
const FlashComponent = () => {
  return (
    <Container css={{
            display: 'flex',
            width: 'auto',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor: '#28d7d7',
            
        }}>
    <Text h3 size={'$s'} css={cssText}>
      ENVÍOS GRATIS EN PRODUCTOS SELECCIONADOS
    </Text>
    </Container>
    
  );
};

export default FlashComponent;