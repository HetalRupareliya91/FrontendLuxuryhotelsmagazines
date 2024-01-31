import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import pdf from '../../assets/pdf/lodge.pdf'
import pdf2 from '../../assets/pdf/kashbah.pdf'
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaShareAlt, FaSnapchat, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
function MagazineDetails (){

    return(

        <>
        
        <Header/>
<section className="spad">
    <Container>
<div className="text-center">

    <h1 className="pb-5">
    LUXURY MAGAZINES - DETAIL
    </h1>

    <div className="mb-3 text-end">
        <button>
        <Link to="/hotels-editions">
            Back To Magazine
        </Link>
        </button>
    </div>

</div>
{/* <iframe src={pdf} frameborder="0" width="100%" height="1200px"></iframe> */}
 <Row>

 <Col md={12}>
                            <center>
                            <iframe src={pdf} frameborder="0" width="100%" height="1200px"></iframe>
                            </center>
                        </Col>

                        <Col md={12}>
                            <center>
                            <iframe src={pdf2} frameborder="0" width="100%" height="1200px"></iframe>
                            </center>
                        </Col>
 </Row>

<div class="sharethis-inline-share-buttons"></div>
 
    </Container>
</section>

<Footer/>
</>


    );
}

export default MagazineDetails;