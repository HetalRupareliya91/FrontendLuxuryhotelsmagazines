import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import Search from '../components/search';
import Footer from '../components/footer';
import Hero from '../components/hero';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import Rooms4 from "../../assets/img/room/room-4.jpg"
import Rooms5 from "../../assets/img/room/room-5.jpg"
import Rooms6 from "../../assets/img/room/room-6.jpg"
import CallToAction from '../components/callToAction';
import axios from 'axios';
import API from '../../utils';
import { FaSearch } from 'react-icons/fa';
import SearchWithBackground from '../components/searchWithBackground';

function HotelSearch(){
    const [apiData, setApiData] = useState([]);

    const fetchAllHotels = async () => {
      const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotels}`, {
            headers: {
               "Authorization": "Bearer " + token,
            }
          });
          const data = response.data;
          console.log(data)
          if (data.status === true) {
            setApiData(data.data);
            console.log(data)
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        fetchAllHotels();
      }, []);
    return (
        <>
 <Header/>
 <section className='all-hotel-section'>


           <SearchWithBackground/>

    <section className="rooms-section spad ">
        <Container>
     
 <h1 className="text-center mt-5">Our Hotels</h1>
            <Row >
            <Col lg={6} ><h6 style={{lineHeight: "4",marginRight: "6px"}} className='m-0'>Showing 1–12 of 33 results
  Default sorting</h6>
   </Col>
           
        </Row>
        {/* <Row >
           
              <Col lg={4} md={6}  >
                <a href="/hotel-details/9/kuwait/symphony-style-hotel">
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
                <a href="/hotel-details/9/kuwait/grand-hotel-du-palais-royal">
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
                <a href="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux">
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
  <Row>
{apiData.map((hotel) => (

  <Col key={hotel.id} lg={4} md={6}>
    <a href={`/hotel-details/9/kuwait/symphony-style-hotel`}>
      <div className="room-item">
        <img src={Rooms5} alt="" />
        <div className="ri-text">
          <h4>{hotel.hotel_title}</h4>
          <p>{hotel.country}</p>
          <a href={`/hotel-details/9/kuwait/symphony-style-hotel`} className="primary-btn">More Details</a>
        </div>
      </div>
    </a>
  </Col>
  
))}
</Row>
        </Container>
    </section>
    </section>
    <CallToAction/>
    <Footer/>
 </>
    );
}
export default HotelSearch;
