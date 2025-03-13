import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import type { Route } from './+types/home'
import { useEffect, useState } from 'react'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Cart' }]
}

export default function Carrousel({ params }: Route.ComponentProps) {
  const type = params.type

  let [foods, changeFoods] = useState([])

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/parcial_mock_api.json?key=fccb2050')
      .then((data) => data.json())
      .then((d) => {
        changeFoods(d)
      })
  }, [])

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Card>
        <Row>{type}</Row>
        <Row>
          {type} Carrousel
          <Carousel>
            <Carousel.Item>1</Carousel.Item>
            <Carousel.Item>2</Carousel.Item>
            <Carousel.Item>3</Carousel.Item>
            <Carousel.Item>4</Carousel.Item>
          </Carousel>
        </Row>
      </Card>
    </Container>
  )
}
