import React from "react";
import { Parallax } from "react-parallax";
import bg1 from "../../../assets/img/magazines/BG7.jpg"
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import HeroImage3 from "../../../assets/img/hero/hero-1.jpg"

function WhatWeDoTop(){

    return(
        <Parallax blur={0} bgImage={HeroImage3} bgImageAlt="the cat" strength={300}>
        <section className="what-we-do-section" >
            <Container>
               
                <div className="main-div">


                    <div className="w-100 " >


                        <div className="text-center title-subtitle">
                            Leading the way in authentic, experiential and adventurous travel
                        </div>

                        <div className="text-center liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container ">Since 1993</span>
                            <span className="right-line"></span>
                        </div>

                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={6}> 
                               <div className="text-center wpb_wrapper">

                                <p>Whether you are looking to reach LUXURY HOTEL’s audience of active, engaged travellers or want to find out how targeted, inspirational travel content can support your brand, we’re the perfect partner to work with.</p>
                            </div></Col>
                        </Row>

                        <div>
                            <Row>
                                <Col lg={3} md={6} className="what-we-do-col">
                                    <div>
                                        <div className="text-center mb-3">
                                            <FaTrophy className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">AWARD-WINNING   </h4>
                                        <p>Over 100 awards </p>
                                    </div>
                                    </div>
                                  
                                </Col>
                                <Col lg={3} md={6} className="what-we-do-col">
                                    <div>
                                        <div className="text-center mb-3">
                                            <FaHandshake className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">AWARD-WINNING   </h4>
                                        <p>Over 100 awards </p>
                                    </div>
                                    </div>
                                   
                                </Col>
                                <Col lg={3} md={6} className="what-we-do-col">
                                    <div>
                                        <div className="text-center mb-3">
                                            <FaLaptopMedical className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">AWARD-WINNING   </h4>
                                        <p>Over 100 awards </p>
                                    </div>
                                    </div>
                                   
                                </Col>

                                <Col lg={3} md={6} className="what-we-do-col">
                                    <div>
                                        <div className="text-center mb-3">
                                            <FaLeaf className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">AWARD-WINNING   </h4>
                                        <p>Over 100 awards </p>
                                    </div>
                                    </div>
                                 
                                </Col>

                            </Row>
                        </div>

                        <div className="title-subtitle text-center">
                            Learn about our campaign options
                        </div>
                        <div className="liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container title  woodmart-font-weight-">Choose your interest</span>
                            <span className="right-line"></span>
                        </div>

                        <div className="d-flex justify-content-around mb-5">
<a href="#print" className="bk-btn w-25">
    PRINT CAMPAIGNS
</a>
<a href="#digital" className="bk-btn w-25">
    DIGITAL CAMPAIGNS
</a>
</div>
                    </div>

                </div>

            </Container>

        </section>
        </Parallax>

    );
}
export default WhatWeDoTop;