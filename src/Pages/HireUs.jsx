import React from 'react'
import { Container } from 'reactstrap';
import './Pages.css';

const HireUs = () => {
  return (
    <div className='hire-us'>
        <Container className='p-5' >
            <div className="hire-us-content container">
                <p className='p-3 text-light'>
                    <span className='fw-bolder'>
                    Need a Custom Software for Your Business?  Ready to Start something great with Bytecity Team? A team that listens 
                    to your requirements?</span> <br></br>
                    From the inception of the idea and strategy to design and development. We bring applications 
                    to the market to boost your business.
                </p>
            </div>
            <div className="hire-us-button justify-content-center">
                <button className='btn btn-warning btn-lg text-light'>Hire Us</button>
            </div>
        </Container>
    </div>
  )
}

export default HireUs