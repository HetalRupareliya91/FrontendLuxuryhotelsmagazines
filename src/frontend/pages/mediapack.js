import React from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import SocialImage from "../../assets/img/mediapack/social.png";
import DigitalImage from "../../assets/img/mediapack/degitalpack.jpg";
import mediapackimage from "../../assets/img/mediapack/computer.webp"
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function Mediapack() {
    return (
        <>
            <Header />
            <section className="mt-5 mb-3">
                <Container>
                    <h1 className="text-center">Media Pack</h1>
                </Container>
            </section>

            <section className="my-3 media-pack-section">
                <Container>
                    <Row >
                        <Col lg={6} md={6} className="media-pack-cols p-0" > 
                                <div>
                                <a href="">
                                    <Image src={SocialImage} alt="image" />
                                    <div className="px-3 ">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                    </a>
                                </div>

                            
                        </Col>

                        <Col lg={6} md={6}  className="media-pack-cols p-0">
                        <div >
                            <a href="">
                              
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                            
                            </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="media-pack-cols p-0" >
                        <div>
                            <a href="">
                              
                                    <img src={mediapackimage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
                                        MACS EURO DOHA INTERNATIONAL AIRPORT - ADVERTISING OPPORTUNITIES 2023...</h5>
                                    </div>
                                
                            </a>
                            </div>
                        </Col>

                        <Col lg={6} md={6}  className="media-pack-cols p-0">
                        <div >
                            <a href="">
                               
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
                                        QATAR MEDIA KIT 2023 MACS...</h5>
                                  
                                </div>
                            </a>
                            </div>
                        </Col><Col lg={6} md={6}  className="media-pack-cols p-0">
                        <div>
                            <a href="">
                              
                                    <img src={mediapackimage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
                                        LUFTHANSA MAGAZINE 2023 MACS...</h5>
                                    </div>
                               
                            </a>
                            </div>
                        </Col>

                        <Col lg={6} md={6}  className="media-pack-cols p-0">
                        <div >
                            <a href="">
                               
                                    <img src={mediapackimage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                    </div>
                               
                            </a>
                            </div>
                        </Col><Col lg={6} md={6} className="media-pack-cols p-0" >
                        <div>
                            <a href="">
                              
                                    <img src={mediapackimage} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Social Network Content Management, Influencer and Ambassador Program...</h5>
                                    </div>
                                
                            </a>
                            </div>
                        </Col>

                        <Col lg={6} md={6}  className="media-pack-cols p-0 ">
                        <div>
                            <a href="">
                              
                                    <img src={DigitalImage} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">
        Hotels Media Kit- Luxury Hotels Digital and Printed version 2024...</h5>
                                   
                                </div>
                                
                            </a>
                            </div>
                        </Col>
                    </Row>
                </Container>                
            </section>


            <CallToAction />
            <Footer />

        </>
    );
}
export default Mediapack;