import React from "react";
import { Col, Container, Row ,Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import icons from "../../../assets/img/magazines/RETAILERS-LOGOS-4.png";
function OurStory (){
return(
<section className="our-story-section spad">

<Container className="">
<div className="our-story-section-container">
    <Row>

        <Col lg={6} className="vc_custom_16234106116-col">
        <div className="vc_custom_16234106116">
<div>
    <h1 className="mb-5">OUR STORY</h1>
    <div>

        <p className="mb-4">Founded 28 years ago by a pair of travellers who couldn’t find the right mix of travel inspiration and information elsewhere, Wanderlust is the original and leading independent travel magazine in the UK.</p>
  <p className="mb-4">Wanderlust has won multiple awards over the years and has an unrivalled reputation for trusted, authentic and relevant content. Starting as a magazine, Wanderlust has since evolved into an internationally recognised, multi-platform media brand.</p>
    </div>

    <div>
        <button className="mb-4">
            <Link >
            Read More
            </Link>
        </button>
    </div>
</div>

        </div>
        </Col>

        <Col lg={6}>

            <div className="numbers-div">
                <div>
                    <p className="numbersp">215</p>
                    <p className="contentp">ISSUES</p>
                </div>
                <div>
                    <p className="numbersp">100000</p>
                    <p className="contentp">READERS PER ISSUE</p>
                </div>
                <div>
                    <p className="numbersp">163000</p>
                    <p className="contentp">SOCIAL FOLLOWERS</p>
                </div>
                <div>
                    <p className="numbersp">1500000</p>
                    <p className="contentp">PAGE VIEWS PER MONTH</p>
                </div>

            </div>
        </Col>

        <Col lg={12} className="avail">
        <div>

            <h1 >AVAILABLE IN</h1>
        </div>
<div>
    <span className="sep_line">

    </span>
</div>
        <div className="logos">
                        <Image src={icons}></Image>
                    </div>

    </Col>
   
    </Row>


   
    </div>
</Container>
</section>

);
}

export default OurStory;