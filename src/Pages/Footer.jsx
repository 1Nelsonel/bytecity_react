import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import fblogo from '../assets/fb.svg'
import twtlogo from '../assets/twt.svg'
import gglogo from '../assets/gglp.svg'
import mail from '../assets/Mail.svg'
import location from '../assets/Place-Marker.svg'
import phone from '../assets/Ringing-Phone.svg'
import "./Pages.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className="bg-dark">
                <Container className="p-3">
                    <div className="footer-title">
                        <h3 className="text-center fw-bold text-light underline">Get In Touch</h3>
                    </div>
                    <Row>
                        <Col>
                            <img className="footer-logo" src="logo.svg" alt="" />
                            <div className="text-light">
                                <li className="text-light">
                                    <span className="p-1">
                                        <img src={phone} alt="" />
                                    </span>
                                    +254 739 544 266
                                </li>
                                <li>
                                    <span className="p-1"> <img src={mail} alt="" /> </span> info@bytecityinc.com</li>
                                <li className="d-block">
                                    <span className="p-1"> <img src={location} alt="" /> </span>
                                    Block B, Cedar Court, Garden Estate Rd, Off Thika Rd, Nairobi,
                                    Kenya
                                </li>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-services">
                                <div className="footer-service-title text-light p-3 fw-bolder">
                                    <h3>Our Services</h3>
                                </div>
                                <div className="footer-services-links text-light p-2 list-underline">
                                    <li>Product Design</li>
                                    <li>Mobile Development</li>
                                    <li>DeVops</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Blockchain Development</li>
                                    <li>Web Development</li>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-newsletter">
                                <div className="footer-newslater-title text-light p-3 fw-bolder">
                                    <h3>NewsLetter</h3>
                                </div>
                                <div className="footer-newsletter-input">
                                    

                                    <Form>
                                        <FormGroup>
                                            <Input type="email" name="email" id="exampleEmail" className="bg-dark" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" name="password" id="examplePassword" className="bg-dark" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button className="btn btn-bg" type="submit">Subscribe</Button>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                            <p>news latter and button</p>
                        </Col>
                    </Row>
                    <Container className="lower-nav">
                        <div className="link-left">
                            <ul>
                                <li>
                                    <img src={fblogo} alt="fb image"/>
                                </li>
                                <li>
                                    <img src={twtlogo} alt="twt image"/>
                                </li>
                                <li>
                                    <img src={gglogo} alt="gglp image"/>
                                </li>
                            </ul>
                        </div>
                        <div className="link-right text-light">
                            <ul>
                                <li>FAQS |</li>
                                <li>Privacy Policy | </li>
                                <li>Terms & conditions |</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </Container>
                </Container>
            </div>
            <div className="footer-lower bg-light p-2">
                <p className="fw-bold text-center pt-2">
                    <span >{"\u00A9"}</span>  {currentYear} Bytecity Inc (All Rights Reserved)
                </p>
            </div>
        </div>
    );
};

export default Footer;
