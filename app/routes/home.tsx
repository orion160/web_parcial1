import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import type { Route } from './+types/home'
import menuBackground from '~/assets/MenuBackground.jpg'
import CartImage from '~/assets/Cart.png'
import MenuImage from '~/assets/Menu.png'
import StoresImage from '~/assets/Stores.png'
import { Link } from 'react-router'

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

  const navItems = [
    { link: '/carrousel/menu', image: MenuImage, label: 'Menu', alt: 'Menu' },
    {
      link: '/carrousel/stores',
      image: StoresImage,
      label: 'Stores',
      alt: 'Stores',
    },
    { link: '/carrousel/cart', image: CartImage, label: 'Cart', alt: 'Cart' },
  ]

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={backgroundStyle}
    >
      <Card className="p-3">
        <Row>
          {navItems.map((item, index) => (
            <Col key={index} className="text-center">
              <Link to={item.link} className="text-decoration-none text-reset">
                <Image src={item.image} alt={item.alt} fluid className="mb-2" />
                <div>{item.label}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  )
}
