import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../Components/Header/Header';
import heroImage from '../assets/hero-image-1.svg';
import './Pages.css'

const Hero = () => {
  return (
    <div>
        <Header/>
        <Container className='pt-4'>
            <Row>
                <Col>
                <div className="hero-text-heading p-3">
                    <h1>
                    ByteCity turning dreams into Multi Million Dollar success stories.
                    </h1>
                </div>
                <div className="hero-text-pararaph p-3">
                    <p>
                    We design program, launch & mantain custom Mobile Apps, 
                    Websites, Web Applications and software solutions for companies worldwide.
                    </p>
                </div>
                <div className="hero-button">
                    <button className='btn btn-warning p-3 m-2'>Read More</button>
                </div>
                </Col>
                <Col>
                <div className="hero-image">
                    <img className='hero-image' src={heroImage}  alt="hero-image" />
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero