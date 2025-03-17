import { useNavigate, Link } from 'react-router'
import { Button, Col, Container, Form, Row, Image } from 'react-bootstrap'

import LoginUpper from '~/assets/LoginUpper.png'
import LoginLower from '~/assets/LoginLower.png'

export default function LoginForm() {
  const navigate = useNavigate()

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image src={LoginUpper} alt="Login top decoration" fluid />
          <h1 className="mt-3">TOO GOOD TO GO</h1>
          <p>Food Wasting Solution</p>
          <Image src={LoginLower} alt="Login bottom decoration" fluid />
        </Col>
        <Col md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/home')
            }}
            className="p-4 border rounded"
          >
            <Form.Group className="mb-3" controlId="loginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                minLength={6}
                maxLength={7}
              />
              <Form.Text className="text-muted">
                <Link to="/forgot-password">Forgot password?</Link>
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
