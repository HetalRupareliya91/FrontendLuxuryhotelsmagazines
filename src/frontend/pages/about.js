import React from "react";
import Header from "../components/header";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import HotelsImage from "../../assets/img/about_page/hotels.jpg";
import ClientImage from "../../assets/img/about_page/clients.jpg";
import YachetsImage from "../../assets/img/about_page/yachets.jpg";
import CountriesImage from "../../assets/img/about_page/countries.jpg";
import SocialImage from "../../assets/img/about_page/social.jpg";
import DownloadImage from "../../assets/img/about_page/download.jpg";
import SubscriberImage from "../../assets/img/about_page/subscribers.jpg";
import AboutImage from "../../assets/img/magazines/magazines.webp";
function AboutUsPage() {

    return (
        <>
            <Header />
            <section className="about-content my-5">
                <Container>
                    <h1 className="text-center">ABOUT US</h1>
                    <Row>
                        <Col className="my-4" md={4}>
                            <Image src={AboutImage} />
                        </Col>
                        <Col className="my-4" md={8}>
                            <p className="my-2">Luxury Hotels Magazines and Luxury Platform are distinguished by their reputable brand aesthetic and authoritative content. With offices in England and 7 locations worldwide, Luxury Hotels Magazines offer an all-encompassing luxury lifestyle guide full of captivating articles and the latest news published by our clients, featuring a range of topics that appeal to luxury enthusiasts, including Luxury Hotels, Super Cars, Mega Yachts for Sale & Charter, Luxury Boutiques & Exclusive Jewellery, Best Restaurants & Bars, Most Luxury Properties, Exotic Spas & Luxurious cosmetic products.</p>
                            <p className="my-4">Luxury Hotels Magazines take readers on a journey to explore exotic destinations, experience local traditions, taste local cuisine, try treatments at the most exotic spas, visit historical places and discover myths and religious sites, learn about investments and new luxury developments, and indulge in famous brands and boutiques, all while immersing themselves in the world of luxury.</p>
                            <p className="my-4">The complimentary print edition of Luxury Hotels Magazines is published annually, with digital editions released prior printed version. Each edition contains a staggering 100,000 high-quality printed copies, each featuring QR codes on hotel pages, distributed in 89 countries.</p>
                        </Col>
                    </Row>

                </Container>
               
            </section>
            
            <CallToAction />
            <Footer />

        </>
    );
}
export default AboutUsPage;