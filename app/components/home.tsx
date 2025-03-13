import { Card, Col, Container, Row } from 'react-bootstrap'

export default function LoginForm() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Card>
        <Row>
          <Col>Menu</Col>
          <Col>Stores</Col>
          <Col>Cart</Col>
        </Row>
      </Card>
    </Container>
  )
}
