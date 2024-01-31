import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap";
import overlayimage from "../../../assets/img/newforimg.png";
import Logo from "../../../assets/img/logo.svg"
import { Link } from "react-router-dom";
function NewFor (){

    return(

        <section className="new-for-section spad">
<Container>

    <Row>

        <Col lg={4}>
            <div>

                <div>

                <h1 className="mb-5">NEW FOR 2022</h1>
                </div>
                <div>
<Image src={Logo} className="mb-5"/>
                </div>
                <div>
                    <p>Take our audience of super-travellers on a journey that is fully immersive and can capture their imagination like never before…</p>
              <p>Wanderlust is the first travel media brand globally to offer the epitome of the digital travel experience – Wanderlust MetaTravel Experiences.</p>
               <p>Transport our highly engaged audience of curious travellers to multiple destinations – a local coffee shop, a fascinating museum, a glorious park, a curious wildlife encounter, or a bustling town square – whatever your brief, Wanderlust will deliver an enthralling experience to the user.</p>
               {/* <div>
                <button>
                <Link>
                Request Demo    
                </Link>
                </button>
               </div> */}
                </div>
            </div>
        </Col>

        <Col lg={8} >
            <div className="newfor-image">
<Image src={overlayimage}></Image></div>
        </Col>
    </Row>
</Container>
        </section>
    );
}

export default NewFor;