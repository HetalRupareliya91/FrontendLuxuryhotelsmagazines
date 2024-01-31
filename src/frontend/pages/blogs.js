import React, { useEffect, useState } from "react"

import { Col, Container, Form, Row } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaSearch } from "react-icons/fa";
import API from "../../utils";
import axios from "axios";

import Rooms4 from "../../assets/img/room/room-4.jpg"
import Rooms5 from "../../assets/img/room/room-5.jpg"
import Rooms6 from "../../assets/img/room/room-6.jpg"
import SearchWithBackground from "../components/searchWithBackground";
function Blogs (){
    const [hotelName, setHotelName] = useState('');
    const [country, setCountry] = useState('');
    const formData = {
     coutry_id: "1",
     hotel_keyword: hotelName
    }
  
    const handleSearch = async (e) => {
     e.preventDefault();
     try {
        const response = await axios.post(
           `${API.BASE_URL}${API.ENDPOINTS.hotelSearch}`,
           JSON.stringify(formData),
           {
              headers: {
                 Authorization: "hXuRUGsEGuhGf6KM",
              },
           }
        );
  
        if (response.status === 200) {
           console.log("signup successful:");
        } else {
           console.error("signup failed:");
        }
     } catch (error) {
        console.error("Error:", error.message);
     }
  };

    const [apiData, setApiData] = useState([]);

    const fetchAllNewsData = async () => {
      const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allNews}`, {
            headers: {
               "Authorization": "Bearer " + token,
            }
          });
          const data = response.data;
          console.log(data)
          if (data.status === true) {
            setApiData(data.data);
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        fetchAllNewsData();
      }, []);

    return(
<>
<Header/>
 {/* <Hero/> */}
 <div className='serch-div'>
 <SearchWithBackground/>
           </div>

 <section className="rooms-section spad ">
        <Container>
     
 <h1 className="text-center mt-5">Our News</h1>
            <Row >
            <Col lg={6} ><h6 style={{lineHeight: "4",marginRight: "6px"}} className='m-0'>Showing 1–12 of 33 results Default sorting</h6>
   </Col>
         
        </Row>

        <Row>
  {apiData.map((news) => (
    <Col key={news.id} lg={4} md={6}>
      <a href="/blog-details/">
        <div className="room-item">
          <img src={Rooms4} alt="" />
          <div className="ri-text">
            <h4>{news.news_title}</h4>
            <p>{news.country}</p>
            <a href="/blog-details/" className="primary-btn">More Details</a>
          </div>
        </div>
      </a>
    </Col>
  ))}
</Row>
        {/* <Row >
           
              <Col lg={4} md={6}  >
                <a href="/blog-details/">
                  <div className="room-item">
                    <img src={Rooms4} alt="" />
                    <div className="ri-text">
                      <h4>Symphony Style Hotel, Quorvus Collection</h4>
                      <p>Kuwait</p>
                      <a href={`/hotel-details/9/kuwait/symphony-style-hotel`} className="primary-btn">More Details</a>
                    </div>
                  </div>
                </a>
              </Col>
          
              <Col lg={4} md={6}  >
                <a href="/blog-details/">
                  <div className="room-item">
                    <img src={Rooms6} alt="" />
                    <div className="ri-text">
                      <h4>Grand Hotel du Palais Royal</h4>
                      <p>Kuwait</p>
                      <a href={`/hotel-details/9/kuwait/grand-hotel-du-palais-royal`} className="primary-btn">More Details</a>
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4} md={6}  >
                <a href="/blog-details/">
                  <div className="room-item">
                    <img src={Rooms5} alt="" />
                    <div className="ri-text">
                      <h4>La Maison des Tetes - Relais & Chateaux</h4>
                      <p>Kuwait</p>
                      <a href={`/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux`} className="primary-btn">More Details</a>
                    </div>
                  </div>
                </a>
              </Col>
          </Row> */}
        </Container>
    </section>
    <Footer/>
 </>
    );
}
export default Blogs;