import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaTelegram, FaLinkedin, FaSnapchat, FaEye, FaHeart, FaMapMarker, FaBuilding, FaSpaceShuttle, FaHome, FaList, FaPencilAlt, FaWifi } from 'react-icons/fa';


import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import Logo from "../../assets/img/logo.svg"
// import video from "../../assets/videos/hotelVideo.mp4"
import API from "../../utils";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GeoAltFill } from "react-bootstrap-icons";
import Review from "../components/hotelReview";
function RoomDetails() {
    const { hotelId } = useParams();
    console.log(hotelId);

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem("token");
            try {
                // Make a POST request with the id
                const response = await axios.post(
                    `${API.BASE_URL}${API.ENDPOINTS.editHotel}`,
                    { hotel_id: hotelId },
                    {
                        headers: {
                            "Authorization": "Bearer " + token,
                        },
                    }
                );

                const responseData = response.data;

                if (responseData.status === true) {
                    setPostData(responseData.data);
                } else {
                    console.error('Failed to fetch post data');
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        if (hotelId) {
            fetchData();
        }
    }, [hotelId]);
    return (
        <><Header />
            <section className="room-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                         
                            <div className="row ">
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" className="mb-2" /></div>
                                        <div className="col-lg-12 col-6"><img src={News5} alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <img src={News5} alt="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 text-end ">
                                    <h4 className="mt-4">Jumeirah Al Qasr Hotel </h4>
                                    <div className="d-flex justify-content-end"><GeoAltFill className="m-0 locaton-icon" />
                      <p>Kuwait</p></div>
                             
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/D0UnqGm_miA?si=qnB4y7REmVnd-Lyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-8">
                            <div className="rd-text">

                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>
                            </div>

                            <div className="rd-text">
                                <div className="rd-title">
                                <GeoAltFill className="m-0 locaton-icon" /> Location
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaBuilding /></i> Rooms & Suites
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i className="fa fa-cutlery" aria-hidden="true"><FaSpaceShuttle /></i>  Restaurants & Bars
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaHome /></i> Spa & Wellness
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaList /></i> Other Facilities
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>
                            <div className="rd-text">
                                <div className="rd-title">
                                    <i aria-hidden="true"><FaPencilAlt /></i>  Additional information
                                </div>


                                <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                    advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                    When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                    wheeler? The advantages and disadvantages of both are studied so that you can make your
                                    choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                    achievement of a lifetime. It can be similar to sojourning with your residence as you
                                    search the various sites of our great land, America.</p>

                            </div>

                            <div className="rd-text">
                                <div className="rd-title">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i> Share This
                                </div>

                                <div className="row">
                                    <div className="col-lg-8"><p className="f-para sharethis mt-2"><i aria-hidden="true"><FaFacebook /></i>
                                        <i aria-hidden="true"><FaTwitter /></i><i aria-hidden="true"><FaWhatsapp /></i><i aria-hidden="true"><FaTelegram /></i><i aria-hidden="true"><FaLinkedin /></i><i aria-hidden="true"><FaSnapchat /></i><i aria-hidden="true"><FaEnvelope /></i>
                                    </p></div>
                                    {/* <div className="col-lg-4 mt-3">

                                        <p className="f-para likeview mt-2">
                                            <i aria-hidden="true">&nbsp;5 <FaEye /></i>
                                            <i aria-hidden="true">&nbsp;10 <FaHeart /></i>
                                        </p>
                                    </div> */}
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hotel-logo">
                                <img src={Logo} alt="" className="w-50" />
                            </div>
                            <div className=" ">
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h5 className="text-center px-4 mt-0">VOTE FOR THE BEST LUXURY HOTELS OF THE YEAR</h5>
                                            <input type="text" placeholder="Your Full Name" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="text" placeholder="Your Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Describe Your Experience"></textarea>
                                            <button type="submit" className=" btn-default-submit ">Submit Now</button>
                                        </div>
                                    </div>
                                </form>

                                {/* <div className="youtube-video mt-3">
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/D0UnqGm_miA?si=qnB4y7REmVnd-Lyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div> */}

                                <div className="locationmap mt-3">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29759.049789885605!2d72.75953112132576!3d21.196876856223426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c351ceae251%3A0x1d35b30f855a2c36!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703916461865!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                                </div>
                                <div className="row  ">
                                    <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Book Online</button></div>
                                    <div className="col-lg-6 mt-3 text-center"><button className=" btn-default w-100">Visit Website</button>

                                    </div>
                                    <div className="col-lg-12 mt-3 text-center"><a href="/pricing-plan"><button className=" btn-default w-100">Claim Listing</button></a>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h2>Hotel Website Visits</h2>

                                    <p className="f-para likeview mt-4 d-flex justify-content-around">
                                            <i aria-hidden="true"><FaEye />&nbsp;10 Views</i>
                                            <i aria-hidden="true"><FaHeart />&nbsp;5 Likes</i>
                                        </p>
                                </div>
                            </div>
                        </div>

                        <div className="room-details-aminites">
                            <div className="text-center m-4">
                                <h1>Hotel Aminites</h1>
                            
                            </div>
                           <div>


                            <Row className="room-details-aminites-row">
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p>Numbers Of Rooms</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> swimming pool:1</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Bars :1</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p>Kids club</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Teens Club</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Private driver</p>
                                    </div>
                                </Col>

                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Room service</p>
                                    </div>
                                </Col>

                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Sport classes</p>
                                    </div>
                                </Col>

                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Concierge service
</p>
                                    </div>
                                </Col>
                                <Col lg={3} className="col-section">
                                    <div className="aminites d-flex">
                                        <FaWifi className="m-0"/>
                                        <p> Fitness center</p>
                                    </div>
                                </Col>
                            </Row>

                        
                           </div>
                        </div>


                        <Review/>
                        <div className="alternate-hotels mt-3">
                            <div className="text-center m-4">
                                <h1>You May Also Like</h1>
                            </div>
                            <div className="card-deck">
                                <Row>
                                    <Col lg={4}>
                                        <div className="card">
                                            <Image className="card-img-top" src={News5} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Londa Residences Cyprus</h5>
                                                <h6 className="card-title">India</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="card">
                                            <img className="card-img-top" src={News1} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">England</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="card">
                                            <img className="card-img-top" src={News2} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hotel Taj</h5>
                                                <h6 className="card-title">Dubai</h6>
                                                <p className="card-text">7.8/10 (Good)</p>
                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}
export default RoomDetails;