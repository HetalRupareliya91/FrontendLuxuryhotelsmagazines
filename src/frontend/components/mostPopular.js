import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function MostPopular() {
   return (
      <section className="spad most-popular-div">
         <Container >
            <Row >
               <Col lg={12} >
                  <div className="section-title">
                     <h1>Most Popular</h1>
                  </div>
               </Col>
            </Row>
            <Row >
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">1</p>
                     <p className="most-popular-text mt-2">uncover saudi</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">2</p>
                     <p className="most-popular-text">Why now is a great time to visit </p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">3</p>
                     <p className="most-popular-text">The world's 12 weirdest Christmas traditions</p>
                  </a>

               </Col>


               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">4</p>
                     <p className="most-popular-text ">Responsible Thailand Awards 2023: The results</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">5</p>
                     <p className="most-popular-text mt-2">Travel through time in Germany</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">6</p>
                     <p className="most-popular-text">Quiz: How well do you know Africa?</p>
                  </a>

               </Col>

               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">7</p>
                     <p className="most-popular-text ">A wildlife guide to Saudi</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">8</p>
                     <p className="most-popular-text ">See Alberta's cities and towns</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">9</p>
                     <p className="most-popular-text">17 of the best things to do in Vietnam</p>
                  </a>

               </Col>


               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">10</p>
                     <p className="most-popular-text ">A guide to Saudi’s artisanal craft culture</p>
                  </a>
               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">11</p>
                     <p className="most-popular-text ">The 20 best places to visit in January</p>
                  </a>

               </Col>
               <Col lg={4} md={4} sm={12}>

                  <a href="" className="d-flex ">
                     <p className="numbers">12</p>
                     <p className="most-popular-text">9 stops on a slow food travel</p>
                  </a>

               </Col>
            </Row>

         </Container>

      </section>
   );
}
export default MostPopular;