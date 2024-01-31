import React from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import Team1 from "../../assets/img/team/65402_TanyaCEO.webp";
import Team2 from "../../assets/img/team/team1.jpg";
import Team3 from "../../assets/img/team/team2.jpg";
import Team4 from "../../assets/img/team/28566_ChrisCameraman.webp";
import Team5 from "../../assets/img/team/28660_ConstantinosOnlineDeveloper.webp";
import Team6 from "../../assets/img/team/team3.jpg";
import Team7 from "../../assets/img/team/3808_Team.webp";
import Team8 from "../../assets/img/team/26217_Alex.webp";
import Team9 from "../../assets/img/team/45294_Kim.webp";
import Team10 from "../../assets/img/team/12765_Ina.webp";
import Team11 from "../../assets/img/team/25843_Kate.webp";
import Team12 from "../../assets/img/team/235443_team2.webp";


import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function OurTeam() {

    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <h1 className="text-center">MEET THE TEAM</h1>
                    <div className="hotel-selection my-4">
                        <p>We are very pleased and proud to be working closely with the below group of Luxury Magazine staff and team members, who are responsible for running our offices and Luxury Hotels Brand around the world. Without them, we're nothing</p>
                    </div>
                </Container>
            </section>

            <section className="my-3">
                <Container>
                    <Row >
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team1} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">TANYA</h5>
                                        <div className="d-flex">
                                            <p>CEO</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member ">
                                    <img src={Team2} alt="image"/>
                                    <div className="px-3">
                                        <h5 className="mt-3">JOHN</h5>
                                        <div className="d-flex">
                                            <p>EDITOR</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member ">
                                    <img src={Team3} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">ALINA</h5>
                                        <div className="d-flex">
                                            <p>WRITER</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team4} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">CHRIS</h5>
                                        <div className="d-flex">
                                            <p>CAMERA MAN</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>


                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team5} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">CONSTANTINOS</h5>
                                        <div className="d-flex">
                                            <p>ONLINE DEVELOPER</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team6} alt="image"/>
                                    <div className="px-3" >
                                        <h5 className="mt-3">DENISH</h5>
                                        <div className="d-flex">
                                            <p>UK OFFICE DIRECTOR</p></div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team7} alt="image" />
                                    <div className="px-3" >
                                        <h5 className="mt-3">ARIS & KEN</h5>
                                        <div className="d-flex">
                                            <p>CONTENT CREATORS</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team8} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">ALEX</h5>
                                        <div className="d-flex">
                                            <p>DIGITAL OFFICER</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team9} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">INA</h5>
                                        <div className="d-flex">
                                            <p>EXECUTIVE PR</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team10} alt="image" />
                                    <div className="px-3" >
                                        <h5 className="mt-3">ARIS & KEN</h5>
                                        <div className="d-flex">
                                            <p>CONTENT CREATORS</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team11} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">KATE</h5>
                                        <div className="d-flex">
                                            <p>TRAVELLING EDITOR</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}  >
                            <a href="">
                                <div className="team-member">
                                    <img src={Team12} alt="image" />
                                    <div className="px-3">
                                        <h5 className="mt-3">FAWAD</h5>
                                        <div className="d-flex">
                                            <p>ONLINE SUPPORT</p></div>

                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>                
            </section>


            <CallToAction />
            <Footer />

        </>
    );
}
export default OurTeam;