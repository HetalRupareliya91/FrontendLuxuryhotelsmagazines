import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneSquare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function KnoledgeTest() {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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

  // const handlePrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  // const handleNext = () => {
  //   sliderRef.current.slickNext();
  // };

  const deals = [
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },
    {
      title: "Mandarin Oriental Guangzou",
      phone: "7779020705",
      description: "Timeless luxury and legendary hospitality in exotic Lombok",
      valid: "Valid from  05-01-2023 to 28-03-2024",
    },

   
  ];

  return (
    <section className="spad">
      <Container>
        <h1 className="text-center mb-4">Exclusive Deals </h1>

        <Slider {...sliderSettings} ref={sliderRef}>
          {deals.map((deal, index) => (
            <div key={index} className="text-center exclusive-deals">
              <a>
                <h6>{deal.title}</h6>
              </a>
              <div>
                <FaPhoneSquare className="phone-icon m-0" />
              </div>
              <div>
                <a>
                  <span>{deal.phone}</span>
                </a>
              </div>
              <div>
                <a>
                  <h6>{deal.description}</h6>
                </a>
              </div>
              <div>
                <span className="valid">{deal.valid}</span>
              </div>
              <hr className="m-0"/>
              <div>
                <span>
                  Stay with us for three or five nights at The Oberoi Beach Resort,
                  Lombok. For the holiday of a lifetime.
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default KnoledgeTest;
