import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap'
import type { Route } from './+types/home'

interface Food {
  imageUrl: string
  name: string
  description: string
}

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Menu' }]
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
    <Container fluid className="p-0">
      <Row className="bg-info text-white py-3 align-items-center justify-content-center">
        <Col xs="auto">
          <h1 className="mb-0 text-uppercase">{type}</h1>
        </Col>
      </Row>
      <Row className="my-4 px-3 justify-content-center">
        <Col md={10}>
          <Carousel>
            {foods.map((food, index) => (
              <Carousel.Item key={index}>
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  className="d-block w-100"
                  style={{ objectFit: 'cover', height: '400px' }}
                />
                <Carousel.Caption>
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
