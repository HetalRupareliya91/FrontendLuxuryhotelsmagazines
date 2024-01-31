import React,{ useState, useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import advimg1 from "../../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../../assets/img/advertise/advbelize.png"
import magazineImage from "../../../assets/img/advertise/advmagazineimg.png"
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";

function AdvertiseTestimonial(){
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
                    slidesToShow: 2,
                },
            },
        ],
    };

    const deals = [
        {
            title: advimg1,
            stars: "\f149",
            description: "“Wanderlust are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! Wanderlust is the best avenue when presenting a new destination/experience/offer to the world!”",
        },
        {
            title: advimg4,
            stars: "*****",
            description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. Wanderlust was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
        },

        {
            title: advimg5,
            stars: "*****",
            description: "“Our campaign with Wanderlust exceeded all expectations (212% of proposed target engagement). We were incredibly pleased with the results and will continue to work with Wanderlust on other campaigns.”",
        },

{
            title: advimg4,
            stars: "*****",
            description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. Wanderlust was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
        },

    ];
    return(
    <section className="spad">
    <Container>
        <h1 className="text-center mb-4">Advertising Testimonials</h1>

        <Slider {...sliderSettings} ref={sliderRef}>
            {deals.map((deal, index) => (
                <div key={index} className=" exclusive-deals1">
                    <a>
                        <img src={deal.title} />
                    </a>
                    <div className="mt-3">
                        {Array.from({ length: 3 }, (_, index) => (
                            <span key={index} className={index < deal.starRating ? "normal-star filled" : "normal-star"}>
                                <FaStar style={{ color: "#EABE12" }} className="m-0" />
                            </span>
                        ))}
                    </div>
                    <div>
                        <a>
                            <h5>{deal.description}</h5>
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    </Container>
</section>
);
}
export default AdvertiseTestimonial;