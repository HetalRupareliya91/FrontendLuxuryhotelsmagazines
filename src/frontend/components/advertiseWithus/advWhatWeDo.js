import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magazines1 from "../../../assets/img/magazines/magazines.webp"
import Magazines2 from "../../../assets/img/magazines/magazines2.webp"
import Magazines3 from "../../../assets/img/magazines/magazines3.webp"
import Hero3 from "../../../assets/img/hero/hero-3.jpg";
import magazineImage from "../../../assets/img/advertise/advmagazineimg.png"
function Advertise() {
    return (
        <>
          <Parallax blur={8} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
                <section className="spad">
                 
                    <Container className="adv-container">
                    <div className="text-white text-center">
                    <h1>What We Do </h1>
                   </div>

                   <div className="text-center liner-continer">
                            <span className="left-line"></span>
                            <span className="woodmart-title-container ">Learn more below</span>
                            <span className="right-line"></span>
                        </div>
                        <Row>

                            <Col lg={4} md={6} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={Magazines1} alt="Paris" />


                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">Video Campaign</p>
                                    </div>
                                    <div className="text-center ">

                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={Magazines2} alt="Paris" />


                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">Promote Your Video To Luxury Hotel Clientele</p>
                                    </div>
                                    <div className="text-center ">

                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} md={6} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={Magazines3} alt="Paris" />
                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">Partners & Ambassador Campaign</p>
                                    </div>
                                    <div className="text-center ">
                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>


                        </Row>

                    </Container>
                </section>

            </Parallax>

        </>
    );
}
export default Advertise;