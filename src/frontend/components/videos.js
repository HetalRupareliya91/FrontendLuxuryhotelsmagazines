import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import VideoBackgrounds from '../../assets/videos/hotelvideo_km2KqTxn.mp4';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg"
const VideoBackground = () => {


  return (
    <>
<section className="video-background p-0">
     <div className='video-iframe'>
      <iframe loading="lazy" style={{width: "100%"}} id="ytplayer" type="text/html" width="100%" height="450px" src="https://www.youtube.com/embed/GCHzng92OEI?&autoplay=1&mute=1&loop=1&color=white&controls=0&playsinline=1&rel=0&playlist=GCHzng92OEI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>   
            </div>
      <div className="text-overlay">
      <Row >
                  <Col lg={6}>
                     <div className="about-text">
                        <div className="section-title  ">
                        <p className=''> <b style={{color:"#b5191fff"}}> Luxury Hotels</b>, a renowned global brand founded in England <b style={{color:"#b5191fff"}}> 17 years ago, </b>is currently present in 89 countries. We provide <b style={{color:"#b5191fff"}}>Luxury Hotels </b>for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.</p>
                <p className=''>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top <b style={{color:"#b5191fff"}}>Luxury Hotels </b> and will ensure a continuous influx of bookings and a consistent occupancy rate of <b style={{color:"#b5191fff"}}> 800,000 to 1 million tourists </b> throughout the year, all without any commission fees.</p>
                        </div>
                     </div>
                  </Col>
                  <Col lg={6} >
                    
                       
                           <div className='videos-content-present text-center'>
                          <Image src={Logo}/>
                          <div className='mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                           </div>
                         
              
                  </Col>
                  </Row>
               </div>
          {/* <Row>
            <Col lg={6}>
              <div className='text-div'>
                <span className=''>Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries. We provide Luxury Hotels for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.</span>
                <span className=''>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure a continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, all without any commission fees.</span>
              </div>
            </Col>
            <Col lg={6} >
              <div className='text-center hotel-present-div'>
                <h1>Luxury Hotels</h1>
                <h4>PRESENTS</h4>
              </div>
            </Col>
          </Row> */}
          
    </section>

   
      {/* <div className='VideoBackground-main'>
        <div className='content-overlay'>
         
        </div>
      </div> */}
    </>
  );
};

export default VideoBackground;
