import { Button, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { Link, NavLink, redirect } from 'react-router'

import LoginUpper from '~/assets/LoginUpper.png'
import LoginLower from '~/assets/LoginLower.png'

export default function LoginForm() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Image src={LoginUpper}></Image>
          </Row>
          <Row>TOO GOOD TO GO</Row>
          <Row>Food Wasting Solution</Row>
          <Row>
            <Image src={LoginLower}></Image>
          </Row>
        </Col>
        <Col>
          <Form style={{ justifyContent: 'center' }}>
            <Form.Group className="mb-3" controlId="loginUsername"></Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                minLength={6}
                maxLength={7}
              />
              <span>Forgot password?</span>
            </Form.Group>

            <Link to="/home">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
