import React, { useRef } from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaAd, FaAward, FaCalendar, FaGlobe, FaNewspaper, FaShare, FaTrafficLight, FaUser } from "react-icons/fa";
import bgimg from "../../assets/img/news1.jpg"
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import magazineImage from "../../assets/img/magazines/magazines.webp"
import { FaPhoneSquare } from "react-icons/fa";
// import InstagramWidget from "../components/instagramWidget";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";
function Distribution() {
    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const deals = [
        {
            title: "Luxury Hotels Cyprus & Greece  ",
            image: magazineImage
        },
        {
            title: "Mandarin Oriental Guangzou",
            image: magazineImage
        },
        {
            title: "Mandarin Oriental Guangzou",
            image: magazineImage
        },
        {
            title: "Mandarin Oriental Guangzou",
            image: magazineImage
        },
        {
            title: "Mandarin Oriental Guangzou",
            image: magazineImage
        },
        {
            title: "Mandarin Oriental Guangzou",
            image: magazineImage
        },



    ];
    return (
        <>
            <Header />
            <section className="distribution-section spad">
                <Container>
                    <div className="text-center">
                 <h1>Distribution</h1>
                    </div>
                 
                </Container>
            </section>

        

            {/* <InstagramWidget /> */}

            <section className="forthcoming-editions ">
                <Container>
                    <div>
                        <div className="text-center mb-4">
                            <h1>Forthcoming Editions</h1>
                        </div>
                        <div >
                            <div className="text-center"><h5 className="mb-4 "style={{textTransform:"uppercase" ,color:"#000"}} >Luxury Hotels Dubai And Abu Dhabi</h5></div>
                            <Row>
                                <Col lg={6} md={6}>
                                    <div>
                                        <Image src={magazineImage} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="content-section">
                                    <div className="d-flex justify-content-between mx-4 mt-3">
                                        <div>
                                            <p>Hard Copies</p>
                                            <p>120,000</p>
                                        </div>
                                        <div>
                                            <p>Digital Copies</p>
                                            <p>4,5 Million Readers</p>
                                        </div>
                                    </div>
                                    <div className="listing">
                                        <ul >
                                            <li>
                                                In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi
                                            </li>
                                            <li>
                                                Digital edition garners 4-5 million downloads per Edition
                                            </li>
                                            <li>
                                                romotion extended to 89 countries
                                            </li>
                                            <li>
                                                Digital copies with your Ads sent to our 1 million subscribers
                                            </li>
                                            <li>
                                                our Ads will be Promoted across our 13 Social Networks  reaching 13 Million Subscribers every month
                                                qYour 2 Ads will be Promoted on Lux
                                            </li>
                                            <li>
                                                Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform
                                            </li>
                                            <li>Wide distribution on Luxury Yachts in Cyprus, Greece, Monaco, Dubai, and Abu Dhabi Marinas.</li>
                                            <li>Six-months FREE Hotel profile with (Special offer) on Luxury Hotels Magazine Online Platform</li>

                                            <li>Each hotel will be nominated and voted on by our readers as “The Best & Most Luxury Hotel of the Year" with access to data on the voting clients</li>

                                        </ul>
                                    </div>

                                    <div>
                                        <div>
                                            <p>Geographic Spread:</p>
                                            <p>100% Dubai & Abu Dhabi</p>
                                        </div>
                                        <div>

                                        <button className="w-50"> <a href="/kit-detail">Click Here</a></button>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </div>

                        <div className="mt-5">
                            <div className="text-center">
                                <h5 className="mb-4" style={{textTransform:"uppercase" ,color:"#000"}}>Luxury Hotels Europe</h5>
                            </div>
                            <Row>
                                <Col lg={6} md={6} className="order-2">
                                    <div>
                                        <Image src={magazineImage} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="content-section order-1 ">
                                    <div className="d-flex justify-content-between mx-4 mt-3">
                                        <div>
                                            <p>Hard Copies</p>
                                            <p>120,000</p>
                                        </div>
                                        <div>
                                            <p>Digital Copies</p>
                                            <p>4,5 Million Readers</p>
                                        </div>
                                    </div>

                                    <div className="listing">
                                        <ul >
                                            <li>
                                                In every Room of 40 Luxury Hotels across Dubai & Abu Dhabi
                                            </li>
                                            <li>
                                                Digital edition garners 4-5 million downloads per Edition
                                            </li>
                                            <li>
                                                romotion extended to 89 countries
                                            </li>
                                            <li>
                                                Digital copies with your Ads sent to our 1 million subscribers
                                            </li>
                                            <li>
                                                our Ads will be Promoted across our 13 Social Networks  reaching 13 Million Subscribers every month
                                                qYour 2 Ads will be Promoted on Lux
                                            </li>
                                            <li>
                                                Your 2 Ads will be Promoted on Luxury Hotels Magazine Online Platform
                                            </li>
                                            <li>Wide distribution on Luxury Yachts in Cyprus, Greece, Monaco, Dubai, and Abu Dhabi Marinas.</li>
                                            <li>Six-months FREE Hotel profile with (Special offer) on Luxury Hotels Magazine Online Platform</li>

                                            <li>Each hotel will be nominated and voted on by our readers as “The Best & Most Luxury Hotel of the Year" with access to data on the voting clients</li>

                                        </ul>
                                    </div>

                                    <div>
                                        <div>
                                            <p>Geographic Spread:</p>
                                            <p>100% Dubai & Abu Dhabi</p>
                                        </div>
                                        <div>

                                        <button className="w-50"> <a href="/kit-detail">Click Here</a></button>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </div>                        
                    </div>
                    <Row>
                        <Col md={12} className="text-center py-5">
                        <button> <a href="/mediapack">Download Our Full Media Pack</a></button>
                                        
                        </Col>
                    </Row>
                </Container>
            </section>
        

            <section className="recents-magazines py-5">
                <Container>

                    <div className="text-center">
                        <h1 className="mb-4">Recent Magazines</h1>
                    </div>

                    {/* <div>
                        <h1>DownLoad Our Full Media Pack</h1>
                    </div> */}

                    <Slider {...sliderSettings} ref={sliderRef}>
                        {deals.map((deal, index) => (
                            <div key={index} className="text-center exclusive-deals distribution-slider p-0">
                                <div>              <a>
                                    <Image src={deal.image} />
                                </a>
                                </div>

                                <div className="mt-3 mb-3">
                                    <span className="valid">{deal.title}</span>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </Container>


            </section>

            <CallToAction />
            <Footer />
        </>
    );
}
export default Distribution;