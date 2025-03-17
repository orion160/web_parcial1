import { Card, Carousel, Container, Row } from 'react-bootstrap'
import type { Route } from './+types/home'
import { useEffect, useState } from 'react'

interface Food {
  imageUrl: string
  name: string
  description: string
}

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Cart' }]
}

export default function Carrousel({ params }: Route.ComponentProps) {
  const { type } = params
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/parcial_mock_api.json?key=fccb2050')
      .then((res) => res.json())
      .then((data: Food[]) => setFoods(data))
  }, [])

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <Card className="p-4">
        <Row className="mb-3">
          <h2 className="text-center">{type} Carousel</h2>
        </Row>
        <Row>
          <Carousel>
            {foods.map((food, index) => (
              <Carousel.Item key={index}>
                <img
                  src={food.imageUrl || 'https://via.placeholder.com/800x400'}
                  alt={food.name || 'Food item'}
                  style={{
                    width: '800px',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
                <Carousel.Caption>
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Card>
    </Container>
  )
}
