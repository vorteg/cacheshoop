import React from 'react';
import { styled, Text } from "@nextui-org/react"

const Box = styled("div", {
  lineHeight: 1.25,
  padding: '8px 10px',
  alignItems: 'center',
  backgroundColor: '#333',
  boxSizing:'border-box',
  color: '#ffffff',
  display:'flex',
  justifyContent: 'center',
  minHeight:'30px',
  textAlign:'center',
  top:'0',
  width: '100%',
  position:'stick',
  zIndex: 1000
});

const cssText={
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }
const FlashComponent = () => {
  return (
    <Box>
    <Text h3 size={'$xs'} css={cssText}>
      ENVÍOS GRATIS EN PRODUCTOS SELECCIONADOS
    </Text>
    </Box>
    
  );
};

export default FlashComponent;