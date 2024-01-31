import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News4 from '../../assets/img/news4.jpg';
import News5 from '../../assets/img/news5.jpg';
import News6 from '../../assets/img/news6.jpg';
import News7 from '../../assets/img/news7.jpg';
import { Col, Container, Row, Image } from 'react-bootstrap';

function Collections() {
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

    const newsItems = [
        { id: 1, image: News4, title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 2, image: News5, title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 3, image: News6, title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 4, image: News7, title: 'Jumeirah Al Qasr Hotel, Dubai' },
        { id: 5, image: News7, title: 'Jumeirah Al Qasr Hotel, Dubai' },
    ];

    return (
        <section className="services-section spad">
            <Container>
                <h1 className="text-center mb-5">Best Luxury Hotels Of The Year</h1>

                <Slider {...sliderSettings}>
                    {newsItems.map((item) => (
                        <div key={item.id}>
                            <figure>
                                <div className="img-dec">{item.title}</div>
                                <div className="thumbnail">
                                    <div>
                                        <a href="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">
                                            Read More
                                        </a>
                                    </div>
                                    <Image src={item.image} />
                                </div>
                            </figure>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
}

export default Collections;
