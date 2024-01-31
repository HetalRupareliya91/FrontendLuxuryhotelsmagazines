import React, { useState, useRef } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
import { FaBook, FaBookOpen, FaHandshake, FaLaptopMedical, FaLeaf, FaQuestionCircle, FaTrophy } from "react-icons/fa";
import MagazineImage from "../../assets/img/magazines/whatwedomagazineimage.png"
import icons from "../../assets/img/magazines/RETAILERS-LOGOS-4.png";
import printImage1 from "../../assets/img//magazines/1.jpg"
import printImage2 from "../../assets/img//magazines/2.jpg"
import printImage3 from "../../assets/img//magazines/4.jpg"
import printImage4 from "../../assets/img//magazines/5.jpg"
import printImage5 from "../../assets/img//magazines/3 (1).jpg"
import printImage6 from "../../assets/img//magazines/6.jpg"
import magazineImage from "../../assets/img/advertise/advmagazineimg.png"
import Tabs from "../components/tabs";
import ClientLogo from "../components/clientLogo";
import advimg1 from "../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../assets/img/advertise/advbelize.png"
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News5 from '../../assets/img/news5.jpg'
import Slider from "react-slick";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";
import Magazines1 from "../../assets/img/magazines/magazines.webp"
import Magazines2 from "../../assets/img/magazines/magazines2.webp"
import Magazines3 from "../../assets/img/magazines/magazines3.webp"
import Magazines4 from "../../assets/img/magazines/magazines4.webp"
import Header from "../components/header";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import HeroImage3 from "../../assets/img/hero/hero-1.jpg"
import { Parallax } from "react-parallax";
import bg1 from "../../assets/img/magazines/BG7.jpg"
import bg2 from "../../assets/img/magazines/BG16.jpg"
import WhatWeDoTop from "../components/whatWeDo/whatWeDoTop";
import WhatWeDoPrint from "../components/whatWeDo/WhatWeDoPrint";
import Collections from "../components/collection";

function WhatWeDo() {


    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const deals = [
        {
            title: advimg1,
            stars: "\f149",
            description: "“LUXURY HOTEL are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! LUXURY HOTEL is the best avenue when presenting a new destination/experience/offer to the world!”",
        },
        {
            title: advimg2,
            stars: "*****",
            description: " “LUXURY HOTEL interpreted our ideas and suggestions brilliantly to come up with a very impactful piece of collateral that portrayed Tasmania’s adventure product in a way that had not been achieved in the UK before.”						",
        },
        {
            title: advimg3,
            stars: "*****",
            description: " “LUXURY HOTEL are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! LUXURY HOTEL is the best avenue when presenting a new destination/experience/offer to the world!”						",
        },
        {
            title: advimg4,
            stars: "*****",
            description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. LUXURY HOTEL was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
        },
        {
            title: advimg5,
            stars: "*****",
            description: "“Our campaign with LUXURY HOTEL exceeded all expectations (212% of proposed target engagement). We were incredibly pleased with the results and will continue to work with LUXURY HOTEL on other campaigns.”",
        },

    ]
    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }


    return (
        <>
            <Header />

            <WhatWeDoTop />

            <WhatWeDoPrint />

            <section className="print-campaign-options spad">

                <Container>
                    <div className="text-center">
                        <Image src={Logo} className="print-campaign-logo"></Image>
                    </div>
                    <div className="title-subtitle text-center ">

                        Print Campaign Options
                    </div>

                    <div className="liner-continer">
                        <span className="left-line"></span>
                        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
                        <span className="right-line"></span>
                    </div>


                    <Row className="image-flip-div">
                        <Col lg={3} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Hotel Spread</h3>

                            </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, LUXURY HOTEL has numerous titles under its belt. We can work with you to publish content in book form. </p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={3} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Company Ads</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines2} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Sponsor one of our regular features to consistently get in serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers</p>
                                    </div>
                                </div>

                            </div>

                        </Col>


                        <Col lg={3} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Editorial</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />
                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">LUXURY HOTEL can produce a bespoke,  you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={3} md={6} className="p-5">
                            <div >
                                <h3>Best Hotel Of The Year</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines2} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Where better to advertise your brand than in  higher design specification and even further distribution (including many of the top UK high street stores).</p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                    </Row>

                    <div className="btn-div text-center ">
                        <button className="more-info w-25 "><FaQuestionCircle /> MORE INFORMATION</button>
                    </div>

                </Container>
            </section>

            <Parallax blur={0} bgImage={bg1} bgImageAlt="the cat" strength={300}>
                <section className="what-we-do-digital-section" id="digital">

                    <Container>

                        <div className="main-div text-center ">
                            <div className="title-subtitle">DIGITAL</div>

                            <div className="liner-continer">
                                <span className="left-line"></span>
                                <span className="woodmart-title-container title ">Take a look at some of our print options below</span>
                                <span className="right-line"></span>
                            </div>

                            <div>
                                <Row>
                                    <Col lg={6} md={6} className="">
                                        <div className="mt-5">
                                            <Image src={Magazines2} className="what-we-do-digital-section-image"></Image>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} className="mt-5">
                                        <div className="vc_column-inner text-left">
                                            <div className="mb-5">
                                                <h3>LUXURY HOTEL MAGAZINE</h3>
                                            </div>
                                            <div className="mb-5">
                                                <p>Generating 1.2 million page views a month from an average of 682,000 unique users, our website is currently going through a re-design, offering a platform for you to reach serious travellers across the world with creative, interactive and inspiring online campaigns that can combine written content with video, audio, interactivity and much more.</p>
                                            </div>
                                            <div>

                                                <Row>
                                                    <Col lg={7}>
                                                        <p className="mb-5">1.2 million page views a month
                                                            (average in 2020)
                                                            682k users per month (average
                                                            peak in 2020)</p>
                                                        <div className="mb-5"> <button className="w-100"><FaBookOpen />REQUEST DIGITAL ISSUE</button></div>

                                                    </Col>
                                                </Row>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <section className="special spad tabs-section" data-scrollax-parent="true">


                                <div className="text-start mb-4">

                                    <h1 className="mb-3 text-white ">NEW FOR 2021</h1>
                                    <h4 className="text-white">View some of our digital immersive campaigns below</h4>
                                </div>
                                <div className="content tabcontainer2">
                                    <div>
                                        <div className="w3-sidebar w3-bar-block  w3-card">
                                            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom')}><i className="fa fa-globe" aria-hidden="true"></i> SPAIN</button>
                                            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom2' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom2')}><i className="fa fa-globe" aria-hidden="true"></i> QUEENSLAND</button>
                                            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom3' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom3')}><i className="fa fa-globe" aria-hidden="true"></i> GREAT AMERICAN WEST</button>
                                        </div>
                                        <div className="zoom-content">
                                            <div id="Zoom" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom' ? '' : 'hidden'}`}>
                                                <img src={Logo} alt="" className="w-50" />
                                                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                            <div id="Zoom2" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom2' ? '' : 'hidden'}`}>
                                                <img src={Logo} alt="" className="w-50" />
                                                <p className="">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                            <div id="Zoom3" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom3' ? '' : 'hidden'}`}>
                                                <img src={Logo} alt="" className="w-50" />
                                                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=PdW4fKdvAkI6E_Oc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>

                    </Container>
                </section>
            </Parallax>


            <section className="digital-campaign-options">

                <Container>
                    <div className="text-center">
                        <Image src={Logo} className="digital-campaign-logo"></Image>
                    </div>
                    <div className="title-subtitle text-center ">

                        Digital  Campaign Options
                    </div>

                    <div className="liner-continer">
                        <span className="left-line"></span>
                        <span className="woodmart-title-container title ">Hover over the options to see more information</span>
                        <span className="right-line"></span>
                    </div>


                    <Row className="image-flip-div">
                        <Col lg={4} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Video Campaign</h3>

                            </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">From bookazines and beautiful coffee table books to a ‘how to’ series and a quiz book, luxury hotel has numerous titles under its belt. We can work with you to publish high-quality evergreen content in book form. </p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col lg={4} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Promote Your Video To Luxury Hotel Clientele</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines2} />


                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity to show your expertise to our readers   Sponsor one of our regular features to consistently get in front of our audience of serious travellers. Not only will this raise brand awareness but gives you an opportunity.</p>
                                    </div>
                                </div>

                            </div>

                        </Col>


                        <Col lg={4} md={6} className="p-5">
                            <div className="text-center">
                                <h3>Partners & Ambassador Campaign</h3> </div>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <Image src={Magazines1} />
                                    </div>
                                    <div class="flip-box-back">
                                        <p className="heading">LUXURY HOTEL can produce a bespoke, high-quality print supplement for you that gives you the space to showcase all that your brand has to offer in a long-form piece with expert-written copy and stunning visuals.</p>
                                    </div>
                                </div>

                            </div>

                        </Col>

                    </Row>

                    <div className="btn-div text-center ">
                        <button className="w-25 more-info"><FaQuestionCircle /> MORE INFORMATION</button>
                    </div>

                </Container>
            </section>



            <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
                <section className="what-are-you-intersted-in spad">
                    <Container>
                        <div>
                            <div className="title-subtitle mt-0 text-center">
                                What are you interested in?
                            </div>
                            <div className="woodmart-title-container text-center">
                                Submit the form below and we'll get back to you with the information you requested along with some great examples
                            </div>
                            <Form>

                                <Form.Label>
                                    What Is Your Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                >

                                </Form.Control>
                                <Form.Label>
                                    Your work email
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                >

                                </Form.Control>
                                <Form.Label>
                                    Which Tourism Board are you representing?
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-3"
                                >

                                </Form.Control>
                               
                                <Form.Label>
                                What Hotel or Business Are Your Representing
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3} // You can adjust the number of rows as needed
                                    className="mb-3"
                                    placeholder="Leave Your Message"
                                />
                                <Form.Label>
                                    Would you like to request a sample of our latest magazine issue?
                                </Form.Label>
                                <div className="d-flex mb-3">
                                    <Form.Check
                                        type="checkbox"

                                        name="sampleRequest"
                                        id="sampleRequestYes"
                                        className="pe-3"
                                    />
                                    <Form.Label className="pe-3">YES</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        name="sampleRequest"
                                        id="sampleRequestNo"
                                        className="pe-3"
                                    />
                                    <Form.Label>NO</Form.Label>
                                </div>


                                <Form.Label>
                                    Select the campaign options you would like more information on
                                </Form.Label>

                                <div className="d-flex">
                                    <Form.Check
                                        type="checkbox"
                                        label="Hotel Spread (print)"
                                        id="campaignSponsorship"
                                        className="pe-4"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Company (print)"
                                        id="campaignSupplements"
                                        className="pe-4"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Hotel  Spread(Digital)"
                                        id="campaignSupplements"
                                        className="pe-4"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Company (Digital)"
                                        id="campaignSupplements"
                                        className="pe-4"
                                    />



                                </div>
                                <button className="mt-4 w-25">SUBMIT</button>
                            </Form>

                        </div>

                    </Container>

                </section>
            </Parallax>


            <ClientLogo />

            <section className="what-we-do-slider-section ">
                <Container>
                    <AdvertiseTestimonial />
                </Container>
            </section>


             <section className="case-study spad">   <Container>
                <div className="alternate-hotels mt-3">
                    <div className="text-center m-4">
                        <h1>Case Studies</h1>
                    </div>
                    <div className="card-deck">
                        <Row>
                            <Col lg={4} md={6} className="mb-3">
                                <div className="card">
                                    <img className="card-img-top" src={News5} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Londa Residences Cyprus</h5>
                                        <h6 className="card-title">Dubai</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mb-3">
                                <div className="card">
                                    <img className="card-img-top" src={News1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Radisson Blu Hotel, Lusa</h5>
                                        <h6 className="card-title">England</h6>
                                       
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mb-3">
                                <div className="card">
                                    <img className="card-img-top" src={News2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">The Mandarin Oriental, Sa</h5>
                                        <h6 className="card-title">Dubai</h6>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div></Container></section> 

{/* <Collections/> */}

            <section >
                <div className="rounddiv">
                    <Col lg={6} md={6} className="what-we-do p-0">
                        <div className="hovermaindiv">
                            <div className="inner-div">
                                <div className="text-center">
                                    <p>Continue Reading</p></div>
                                <div className="text-center">
                                    <h2><a href="about-us">ABOUT US</a></h2>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col lg={6} md={6} className="contact-us p-0">
                        <div className="hovermaindivtwo">
                            <div className="inner-div">
                                <div className="text-center">
                                    <p>Looks Great?</p></div>
                                <div className="text-center">
                                    <h2><a href="contact-us">CONTACT US</a></h2>
                                </div>
                            </div>
                        </div>

                    </Col>
                </div>

            </section>

            <CallToAction />
            <Footer />
        </>
    );
}
export default WhatWeDo;