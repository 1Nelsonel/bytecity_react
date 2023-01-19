import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const WhyChooseUs = () => {
  return (
    <Container className='p-4'>
        <div className="why-choose-us-header p-4">
            <h2>Why Choose Us?</h2>
        </div>
        <Row>
            <Col>
                <div className="text-left p-3">
                    <div className="text-l-heading t">
                        <h3 className='text-color-why-choose-us'>
                            Build It Right the First Time
                        </h3>
                   </div>
                   <div className="text-l-content p-3">
                    <p>
                        No great venture should be held back by technical execution. Translating this core belief into action, 
                        we work closely with our partners to launch new initiatives and scale existing ones. We help passionate 
                        founders and stakeholders mitigate risk and advance their goals.
                    </p>
                   </div>
                </div>
            </Col>
            <Col>
                <div className='text-right p-3'>
                    <div className='p-3 '>
                        <h3 className='text-color-why-choose-us'>
                            Be Responsive, Reliable, and Ready(RRR)
                            </h3>
                    </div>
                    <div className='p-3'>
                        <p>
                            We as Bytecity are known for communicating valuable and honest feedback imediately, always being available and 
                            treating your business like it’s a family member.
                            </p>
                            
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default WhyChooseUs