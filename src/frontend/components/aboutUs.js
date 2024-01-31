import React from "react";
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'
import News3 from '../../assets/img/news3.jpg'
import News4 from '../../assets/img/news4.jpg'
import News5 from '../../assets/img/news5.jpg'
import News6 from '../../assets/img/news6.jpg'
import News7 from '../../assets/img/news7.jpg'
import about1 from '../../assets/img/about/about-1.jpg'
import about2 from '../../assets/img/about/about-2.jpg'
import HeroImage from '../../assets/img/hero/hero-2.jpg'
import { Container, Row, Col, Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
// import VideoBackgrounds from '../../assets/videos/hotelvideo_km2KqTxn.mp4';
// import ReactPlayer from "react-player";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
function AboutUs() {

    return(
        <>
            <section className="aboutus-section spad">
        <Container>
          <div className="hp-room-items">
            <h1 className="text-center mb-4">Recently Added Hotels</h1>
            <Row>
              <Col lg={3} md={6}>
                <figure>
                <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>

                  <div className="thumbnail">
                    <div>
                      <Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link>
                    </div>
                    <Image src={News1} alt="" />
                  </div>

                </figure>
              </Col>
              <Col lg={6} md={6}>
                <figure>
                  <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                  <div className="thumbnail">
                    <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                    <Image src={News2} alt="" />
                  </div>
                </figure>
              </Col>
              <Col lg={3} md={6}>
                <figure>
                  <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                  <div className="thumbnail">
                    <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                    <Image src={News3} alt=""/>
                  </div>
                </figure>
              </Col>

              <Col lg={3} md={6}>
                    <figure>
                        <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                       <div className="thumbnail">
                          <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                          <Image src={News4} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>  
                       <div className="thumbnail">
                          <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                          <Image src={News5} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                       <div className="thumbnail">
                          <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                          <Image src={News6} alt=""/>
                       </div>
                    </figure>
                 </Col>
                 <Col lg={3} md={6}>
                    <figure>
                        <div className="img-dec">Jumeirah Al Qasr Hotel, Dubai</div>
                       <div className="thumbnail">
                          <div><Link to="/hotel-details/9/kuwait/la-maison-des-tetes-relais-chateaux" className="readmore">Read More</Link></div>
                          <Image src={News7} alt=""/>
                       </div>
                    </figure>
                 </Col>
            </Row>
              {/* <Row className=" mt-3">
                 
              </Row> */}
           </div>
        
        </Container>
     </section>

     <section className="video-background p-0">
      
     <div className='video-iframe'>
      <iframe loading="lazy" style={{width: "100%"}} id="ytplayer" type="text/html" width="100%" height="500px" src="https://www.youtube.com/embed/GCHzng92OEI?autoplay=1&mute=1&loop=1&color=white&controls=0&playsinline=1&rel=0&playlist=GCHzng92OEI&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>   
            </div>
            <Container>
      <div className="text-overlay">
      <Row >
                  <Col lg={6} >
                     <div className="about-text">
                        <div className="section-title ">
                           <span className="text-white">About Us</span>
                           <h3 >Luxury Hotels Magazines</h3>
                           <p className="f-para text-white">Sona.com is a leading online accommodation site. We’re passionate about
                           travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                           languages.
                        </p>
                        <p className="s-para text-white">So when it comes to booking the perfect hotel, vacation rental, resort,
                           apartment, guest house, or tree house, weve got you covered.
                        </p>

                        <a href="aboutus" className="primary-btn about-btn text-white">Read More</a>

                        </div>
                        
                     </div>
                  </Col>
                  <Col lg={6} className="aboutus-section-present">
                    <div className="text-center">
                    <Image src={Logo}/>
                    </div>
                
                          <div className='text-center mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                  </Col>
               </Row>


               {/* <Row className=" aboutus-section-present mobile-view">
                           <Col className='videos-content-present text-center'>
                          <Image src={Logo}/>
                          <div className='mt-4'>
                          <h4 >PRESENTS</h4>
                          </div>
                           </Col>
                         
                       
                     </Row> */}
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
          </div>
          </Container>
    </section>
    
     {/* <Parallax blur={5} bgImage={HeroImage} bgImageAlt="the cat" strength={350}>

     <section className="special spad" >
         <div className="content">
            <div className="container">
              
            </div>
         </div>
        
      </section>
      </Parallax> */}
      
</>
    );
}
export default AboutUs;