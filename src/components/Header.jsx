import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Container className='bg-light'>
        <Row>
          <Col xxl={{span:6}}>
            <h6>You should become profesional programmer</h6>
          </Col>
          <Col xxl={{span:4}}>
            <h6>Tel: +989308674284</h6>
          </Col>
          <Col xxl={{span:1}}>
            <a href=''>English</a>
          </Col>
          <Col xxl={{span:1}}>
            <a href="">USD $</a>
          </Col>
        </Row>
      </Container>
      <Container className='bg-dark'>
        <Row className='text-center'>
          <Col>
            <a href="">Home</a>
          </Col>
          <Col>
            <a href="">About</a>
          </Col>
          <Col>
            <a href="">Gallery</a>
          </Col>
          <Col>
            <a href="">Blog</a>
          </Col>
          <Col>
            <a href="">Contact</a>
          </Col>
        </Row>
    </Container>
  </>
  )
}

export default Header