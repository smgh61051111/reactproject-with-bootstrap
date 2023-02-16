import React from 'react'
import {Container, Form, Row, Col,Label, Button} from 'react-bootstrap'

const Contact = () => {
  return (
    <>
    <Container>
      <Row>
        <h1>Form</h1>
      </Row>
      <Row className='bg-light'>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Email Address'></Form.Control>
              <Form.Text className='text-muted'>We'll never share you'r email</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password'></Form.Control>
              <Form.Text className='text-muted'>You'r password shoul'd be include 6 characters wit upper , lower and cymboles and numbers</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='check me'></Form.Check>
            </Form.Group>
            <Button variant='primary' type='submit'>submit</Button>
          </Form>
          </Col>
        <Col>
          gh
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default Contact

