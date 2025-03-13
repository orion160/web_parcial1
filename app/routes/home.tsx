import { Card, Col, Container, Row, Image, NavLink } from 'react-bootstrap'
import type { Route } from './+types/home'
import menuBackground from '~/assets/MenuBackground.jpg'
import CartImage from '~/assets/Cart.png'
import MenuImage from '~/assets/Menu.png'
import StoresImage from '~/assets/Stores.png'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Parcial Web' }]
}

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${menuBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={backgroundStyle}
    >
      <Card>
        <Row>
          <Col>
            <Row>
              <Image src={MenuImage}></Image>
            </Row>
            <Row>Menu</Row>
          </Col>
          <Col>
            <Row>
              <Image src={StoresImage}></Image>
            </Row>
            <Row>Stores</Row>
          </Col>
          <Col>
            <Row>
              <Image src={CartImage}></Image>
            </Row>
            <Row>Cart</Row>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
