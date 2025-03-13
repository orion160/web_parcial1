import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { redirect } from 'react-router'

export default function LoginForm() {
  function handleFormSubmit() {
    redirect('/home')
  }

  return (
    <Container fluid>
      <Row>
        <Col>Banner</Col>
        <Col>
          <Form style={{ justifyContent: 'center' }}>
            <Form.Group className="mb-3" controlId="loginUsername"></Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <span>Forgot password?</span>

            <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
