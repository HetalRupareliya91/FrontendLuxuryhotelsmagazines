import React from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import KitdetailPDF from '../../assets/pdf/kitdetail.pdf';
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function KitDetail() {
    return (
        <>
            <Header />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <center>
                                <iframe src={KitdetailPDF + "#toolbar=1&navpanes=0&scrollbar=1"} width="100%" height={1200}></iframe>
                            </center>
                        </Col>
                        <Col md={12}>
                            <h4 class="py-3 text_yellow">
                                Media Kit for All Advertisers (accept Hotels) Luxury Hotels Digital &amp; Printed Editions 2024
                            </h4>
                        </Col>
                    </Row>

                </Container>
            </section>
            <CallToAction />
            <Footer />
        </>
    );
}
export default KitDetail;