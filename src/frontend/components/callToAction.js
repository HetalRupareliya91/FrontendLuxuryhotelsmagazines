import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Col, Container, Row } from "react-bootstrap";
function CallToAction (){
    return(
<section >
         <div className="call-to-action-div">
         <div className="footer-top">
            <Container>
               
                <Row className=" align-items-center">
                    <Col lg={3} xs={12}>
                     <div className="logo mt-3 mb-0">
                        <a href="/">
                        <img src={Logo} alt=""/>
                        </a>
                     </div>                 
                        </Col>
                    <Col  xs={12} sm={6} lg={4} xl={3} >
                        <span className="footer-newsletter-notice">
                            Sign up for our newsletter today<br/>
                            and <strong>never miss out again</strong>
                        </span>
                    </Col>
                    <Col  xs={12} sm={6} lg={5} xl={6} >
                        <form id="footer-newsletter" className="d-flex  ">
                            <input type="text" className="form-control newsletteremailfield" name="email" id="emailsignupAddr" placeholder="Your email address"/>
                            <input type="hidden" id="footerToken" className="tokenfield" name="token"/>
                            <button type="submit" id="sitefooter_emailsignup" className="btn btn-default emailsignup" name="emailPopupSubscribe" href="/signup">Sign up</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
      </div>
      </section>
    );
}
export default CallToAction;