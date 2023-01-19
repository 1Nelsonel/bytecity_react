import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import aboutUsImage from '../assets/aboutUs.svg';
import './Pages.css';

const AboutUs = () => {
  return (
    <div className='pt-3 pb-3'>
        <Container className='p-4'>
            <Row>
                <Col>
                    <div className='about-us-image'>
                        <img className='about-us-image' src={aboutUsImage} alt="about us image" />
                    </div>
                </Col>
                <Col>
                    <div className="about-text">
                        <div className="about-heading">
                            <h2>Who We Are</h2>
                        </div>
                        <div className="about-paragraph">
                            <p>
                            Bytecity is a software development and digital transformation consultancy company that provides cutting edge 
                            engineering solutions, helping startups, large corporations, and enterprise clients to solve complex issues 
                            that always emerge during their digital evolution journey.<br></br><br></br>

                            We build business-changing software that aims to solve problems, not create new ones.  We know that 
                            beautiful design and well-written code leads to happier users, more sales and grows your business. 
                            Our average site increases sales by 350% and some of our applications are used by millions of people 
                            each day.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutUs;