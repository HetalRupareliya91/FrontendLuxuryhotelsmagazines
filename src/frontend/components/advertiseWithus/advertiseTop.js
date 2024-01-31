import React from "react";
import { Parallax } from "react-parallax";
import bg1 from "../../../assets/img/magazines/BG7.jpg"
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import HeroImage3 from "../../../assets/img/hero/hero-1.jpg"
function AdvertiseTop (){

    return(
        <Parallax blur={0} bgImage={HeroImage3} bgImageAlt="the cat" strength={300}>
        <section className="advertise-top-section" >
            <Container>
               
                <div className="main-div">


                    <div className="w-100 " >


                        <div className="text-center title-subtitle">
                           The UK's Longest Running Hotel
                        </div>

                        <div className="text-center liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container ">Since 1993</span>
                            <span className="right-line"></span>
                        </div>

                     
                      
                       

            </div>

                </div>
                <div>
                            <Row className="mb-5">
                                <Col lg={2} md={6} sm={6} >
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaTrophy className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">Adventurous  </h4>
                                        
                                    </div>
                                    </div>  
                                  
                                </Col>
                                <Col lg={2} md={6}  sm={6}>
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaHandshake className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">Passionate</h4>
                                       
                                    </div>
                                    </div>
                                   
                                </Col>
                                <Col lg={2} md={6} sm={6} >
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaLaptopMedical className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">AWARD-WINNING   </h4>
                                       
                                    </div>
                                    </div>
                                   
                                </Col>

                                <Col lg={2} md={6} sm={6}  >
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaLeaf className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">Collaborative </h4>
                                       
                                    </div>
                                    </div>
                                 
                                </Col>
                                <Col lg={2} md={6} sm={6}>
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaLeaf className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">Omni_Channel </h4>
                                       
                                    </div>
                                    </div>
                                 
                                </Col>
                                <Col lg={2} md={6} sm={6} >
                                    <div className="what-we-do-col">
                                        <div className="text-center mb-3">
                                            <FaLeaf className="element-icon " />
                                        </div>
                                        <div className="text-center">
                                    <h4 className="title">Responsible </h4>
                                       
                                    </div>
                                    </div>
                                 
                                </Col>

                            </Row>
                        </div>

            </Container>

        </section>
        </Parallax>
    );
}
export default AdvertiseTop;