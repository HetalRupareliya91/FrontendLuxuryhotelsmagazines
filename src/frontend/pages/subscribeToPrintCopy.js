import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg"
import { Parallax } from "react-parallax";
import Header from "../components/header";
import Footer from "../components/footer";
import ReCAPTCHA from "react-google-recaptcha";
import ConnectWithUS from "../components/connectwithus";
import PayPalButton from "../components/paypal";
function SubscribeToPrintCopy() {

    return (
        <>
            <Header />
            <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
                <section className="Contact-us-section spad">
                    <Container>
                        <h1 className="text-center">SUBSCRIBE TO PRINTED COPY</h1>
                        <Row>
                            <Col lg={7}>
                                <Form >

                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Name"
                                    >

                                    </Form.Control>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="mb-3"
                                        placeholder="Enter Email"
                                    >

                                    </Form.Control>
                                    <Row className="d-flex">
                                        <Col lg={6} md={6}>
                                            <Form.Check
                                                type="checkbox"
                                                label="Cyprus & Greece Edition"
                                                id="cyprus_greece_edition"
                                                className="pe-4"
                                            />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Check
                                                type="checkbox"
                                                label="Europe Edition"
                                                id="europe_edition"
                                                className="pe-4"
                                            />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Check
                                                type="checkbox"
                                                label="Dubai & Abu Edition"
                                                id="dubai_abu_edition"
                                                className="pe-4"
                                            />
                                        </Col>
                                    </Row>

                                    <Form.Label>
                                        Where did you hear about us
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        className="mb-3"
                                        placeholder=""
                                    >
                                    </Form.Control>

                                    <div className="paypal_buttons">
                                        <PayPalButton />                                        
                                    </div>
                                    <button className="mt-4 w-25">SubScribe</button>                                </Form>
                            </Col>

                            <Col lg={5}>
                                <ConnectWithUS />
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Parallax>

            <Footer />
        </>
    );
}
export default SubscribeToPrintCopy;