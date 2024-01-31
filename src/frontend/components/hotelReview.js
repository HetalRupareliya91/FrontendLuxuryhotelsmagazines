import React, { useRef } from "react";
import { Col, Container, Row,Image } from "react-bootstrap";
import { FaArrowUp, FaCross, FaPlug, FaPlus, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import images from "../../assets/img/hero/hero-3.jpg"
function Review() {

    const sliderRef = useRef(null);

    const reviews = [
        {
            img:images,
          author: "Prasanna",
          country: "India",
          comment:
            "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
          link:"Read More"
        },
        {
            img:images,
            author: "Kaushal",
            country: "India",
            comment:
              "location is fantastic Reception team is good . however they are expecting guest to reach out.Breakfast spread and varieties are good.",
              link:"Read More"
            },
          {
            img:images,
            author: "Prasanna",
            country: "India",
            comment:
              "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
              link:"Read More"
            },
          {
            img:images,
            author: "Prasanna",
            country: "India",
            comment:
              "Everything from the room, the view, the space to the food the service and the ambience- everything was delightful.",
              link:"Read More"
            },

        // Add more reviews as needed
      ];
    
      // Settings for the slider
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <section>
      <Container>
        <div >
          <h1 className="text-center mt-5">Guest Review</h1>
          <div>
            <h3 className="rd-title">Categories:</h3>

            <Row>

                <Col lg={4}>
<div className="d-flex justify-content-between " ><div>   Staff <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
              
                <div className="progress">
               
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
                </Col>
<Col lg={4}>

<div className="d-flex justify-content-between " ><div>   Facilities <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
<div className="progress mb-4">
              
              <div
                className="progress-bar  "
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
</Col>

<Col lg={4}>
 
<div className="d-flex justify-content-between " ><div>   Cleanliness <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
<div className="progress">
             
              <div
                className="progress-bar  "
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
</Col>
<Col lg={4} >
 
<div className="d-flex justify-content-between " ><div>   Comfort <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
<div className="progress">
             
              <div
                className="progress-bar  "
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
</Col>
<Col lg={4}>
 
<div className="d-flex justify-content-between " ><div>   Value for money <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
<div className="progress">
             
              <div
                className="progress-bar  "
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
</Col>
<Col lg={4}>
 
<div className="d-flex justify-content-between " ><div>   Another Category <FaArrowUp className="view_icon"/>   </div><div>70.5</div></div>
<div className="progress">
              
              <div
                className="progress-bar  "
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
</Col>


            </Row>

            {/* <div className="progress">
             <p>Staff</p> 
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div> */}

            

          
          </div>
        </div>
        <Row className="mt-5 mb-4">
            <h3 className="mb-4 rd-title">Select topics to read reviews:</h3>
            <div className="topics"><span className="readreview Breakfast" ><FaTimes/>Breakfast</span><span className="readreview Dinner" ><FaTimes/>Dinner</span><span className="readreview" ><FaPlus/>Room</span><span className="readreview" ><FaPlus/>Location</span><span className="readreview" ><FaPlus/>Pool</span></div>
        </Row>


   <Row>
    <div>
    <h3 className="rd-title">See what guests loved the most:</h3>
    </div>
    <Col>
    <Slider {...sliderSettings} ref={sliderRef}>
          {reviews.map((deal, index) => (
            <div key={index} className="review-slider ">
              <a className="d-flex">
                {/* <Image src={deal.img}></Image> */}
                <h6>{deal.author}</h6>
              </a>
            
             
              <div>
                <a>
                  <h6>{deal.country}</h6>
                </a>
              </div>
              <div>
                <span className="valid">{deal.comment}</span>
              </div>
             <div>
                <a>{deal.link}</a>
             </div>
            </div>
          ))}
        </Slider>
</Col>
   </Row>
       
      </Container>
    </section>
  );
}

export default Review;
