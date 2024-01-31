import React  from "react";
import Header from "../components/header";
import { Col, Container, Row } from "react-bootstrap";
import Rooms4 from "../../assets/img/room/room-4.jpg"
import Rooms5 from "../../assets/img/room/room-5.jpg"
import Rooms6 from "../../assets/img/room/room-6.jpg"
import Search from "../components/search";
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import SearchWithBackground from "../components/searchWithBackground";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
function HotelSelection(){

    return(
        <>
<Header/>
<section className="spad hotel-selection-section">
<Container>
<h1 className="text-center">LUXURY HOTELS SELECTION</h1>
<div className="hotel-selection spad">
<p><a>Luxury Hotels:</a> connecting high-end hotels with discerning luxury clientele globally. In the current competitive market, attracting and retaining esteemed clients poses a considerable challenge. We present a solution inspired by successful hotel groups like Marriott, Mandarin Oriental, and Four Seasons—a groundbreaking rotation program that successfully has been implemented for the last 17 years and guarantees to bring visitors to your hotel.</p>

<p><a>Each Edition Rotation Program: </a> Your hotel becomes one of the 40 most luxurious hotels that our clients intend to visit. This ensures a continuous stream of bookings and consistent room occupancy by 800,000 to 1 million tourists throughout the year.</p>


<p><a>Zero commission charges: </a>  The hotel receives the full amount from all bookings made</p>
<p><a>Global exposure: </a>Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.</p>

<p><a>Global Reach:</a>Published in 89 countries, integrating online (70%) and print (30%) components.</p>


<p><a>Extensive Digital Presence: </a>Our magazines are available as free downloads on 5 independent digital platforms, attracting 4-5 million readers per edition</p>

<p><a>Social Media Engagement:</a>We actively promote hotels on 13 social networks, engaging with 13 million monthly users.</p>


<p><a>Effortless Bookings:</a>Every hotel ad in the printed version is accompanied by QR codes with direct access to your website for easy bookings.</p>


<p><a>Data Analysis:</a>Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.</p>

<p><a>Recognition: </a>Each hotel could be nominated by our readers as "The Best & Most Luxury Hotel of the Year," and you will have access to data on the voting clients</p>

</div>


</Container>
</section>
<SearchWithBackground />
<section className="spad">
  <Container>
    
<Row >
          
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} className="hotel-selection-image " alt="image"/>
                    <div className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
            
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image"  className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">The Setai Tel Aviv</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Symphony Style Hotel, Quorvus Collection</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>

              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>


              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image" className="hotel-selection-image"/>
                    <div  className="px-3" >
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms4} alt="image" className="hotel-selection-image"/>
                    <div className="px-3" >
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon m-0" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms5} alt="image"className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="">
                  <div className="room-item selection-img-div">
                    <img src={Rooms6} alt="image"className="hotel-selection-image"/>
                    <div  className="px-3">
                      <h5 className="mt-3">Six Senses Shaharut</h5>
                      <div className="d-flex"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                      
                    </div>
                  </div>
                </a>
              </Col>
          </Row>


          </Container>
          <div class="col-lg-12">
                    <div class="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
</section>


<CallToAction/>
<Footer/>

</>
    );
}
export default HotelSelection;