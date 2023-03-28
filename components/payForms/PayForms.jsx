import { Container, Card, Row, Text } from "@nextui-org/react";
const PayForms = () => {
    return (
        <Container>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Aqui van las distintas formas de pago.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    )
}

export default PayForms