import React from "react";
import Logo from "../../assets/img/logo.svg";
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram,FaTwitter,FaTripadvisor, FaAddressBook, FaBell} from 'react-icons/fa';
import { Col, Container, Row } from "react-bootstrap";

function Footer(){

    return(
        <>
        <footer className="footer-section">
         
        <Container >
           
           <div className="footer-text">
              <Row className="row">
                 <Col lg={3} >
                    <div className="ft-about">
                       <div className="logo">
                          <a href="/">
                             <img src={Logo} alt="" className="footer-logo"/>
                                                     </a>
                       </div>
                       <p>BRAND RECOGNITION</p>
                      
                       <ul>
                          <li className="mb-4"><a href="trademark-registration">Trademark Registry</a></li>
                          <li><a href="trademark-registration">Branding Registration</a></li>
                       </ul>
                       <div className="fa-social">
                          <a href="https://www.facebook.com/LuxuryHotelsMagazines"><FaFacebook/></a>
                          <a href="https://www.instagram.com/luxuryhotelsbrand/"><FaInstagram/></a>
                          <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg'><FaYoutube/></a>
                       </div>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>About Us</h6>
                       <p><a href="/our-team" className="footer-links">Our Team</a></p>
                       <p><a href="/about-us" className="footer-links">About Us</a></p>
                    <p><a href="hotels-selection" className="footer-links">Luxury Hotel Selection</a></p>
                    <p><a href="hotels-editions" className="footer-links">Luxury Hotels Editions</a></p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-newslatter">
                       <h6>ADVERTISERS</h6>
                       <p><a href="distribution" className="footer-links">Distribution</a></p>
                       <p><a href="userprofile" className="footer-links">Publish Hotels News</a></p>
                       <p><a href="userprofile" className="footer-links">Publish News </a></p>
                       <p><a href="mediapack" className="footer-links">Media Pack</a></p>
                       <p><a href="advertise-with-us" className="footer-links">Advertise With Us</a></p>
                       <p><a href="signup" className="footer-links">Create Hotel Profile</a></p>
                      
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="ft-contact">
                       <h6>Connect with Us</h6>
                       <ul>
                          <li><FaAddressBook /><a href="contact-us">Contact Us </a></li>
                          <li><FaPhone /><a href="tel:1234567890">(12) 345 67890</a></li>
                          <li><FaEnvelope /><a href="mailto:info@luxuryhotelsmagazines.com">info@luxuryhotelsmagazines.com</a></li>
                  
                       </ul>
                    </div>
                 </Col>
                 
              </Row>
           </div>
        </Container>
        <div className="copyright-option">
           <div className="container">
              <Row >
                 <Col lg={7}>
                    <ul>
                       <li><a href="#">Terms of use</a></li>
                       <li><a href="#">Privacy</a></li>
                    </ul>
                 </Col>
                 <Col lg={5} >
                    <div >
                       <p className="co-text">
                          © 2023 Copyright: Luxury Hotels Magazines.
                       </p>
                    </div>
                 </Col>
              </Row>
           </div>
        </div>
     </footer>
   
     <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
           <div className="search-close-switch"><i className="icon_close"></i></div>
           <form className="search-model-form">
              <input type="text" id="search-input" placeholder="Search here....."/>
           </form>
        </div>
     </div>
     </>
    );
}
export default Footer;