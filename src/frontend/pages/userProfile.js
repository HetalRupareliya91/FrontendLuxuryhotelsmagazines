import React, { useEffect } from 'react'
import Header from '../components/header';
import { Card, CardBody, Col, Container, Form, Image, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
import News1 from '../../assets/img/news1.jpg'
import News2 from '../../assets/img/news2.jpg'

import { useState } from 'react';
// import MultiStep from 'react-multistep';

import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Footer from '../components/footer';


import AllHotels from './userprofile/allHotels';
import AllBlogs from './userprofile/allBlogs';
import AddBlogs from './userprofile/addBlogs';
import AddHotel from './userprofile/addHotel';
import { isUserLoggedIn } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { FaBlog, FaDollarSign, FaHotel, FaPowerOff, FaUser } from 'react-icons/fa';


function UserProfile() {
  const [currentSection, setCurrentSection] = useState('myProfile');
  const showSection = (section) => {
    setCurrentSection(section);
  };
  const navigate = useNavigate()



  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login")
      return;
    }
  }, []);

  const ClearUserDataFromLocalStorage = () => {
    localStorage.removeItem("isLoggedIn");
   navigate("/login")
  };
  return (
    <>
      <Header />
      <section className="sidebar-section">
        <Container className='d-flex sidebar-div order-1'>
          <div id="sidebar" className="col-col-3 col-lg-2 d-col-block  sidebar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="sidebar-sticky desktopmenu">

              <div className="text-center">
                <Image id="userImage" src={News1} alt="User Image" />
                <h5 className="text-light">Adam Milne</h5>
                <h6 className="text-light">Traveller</h6>
              </div>
              <hr className="sidebar-line" />
              <Nav className="flex-column">
                <NavItem className="nav-item">
                  <NavLink
                    className={`nav-link sidebar-list ${currentSection === 'myHotels' ? 'active' : ''
                      }`}
                    to="#"
                    onClick={() => showSection('myHotels')}
                  >
                    <FaHotel/>
                    My Hotel
                  </NavLink>
                </NavItem><hr className="sidebar-line" />
                <NavItem className="nav-item">
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myBlogs' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myBlogs')}
                  >
                    <FaBlog/>
                    My Special Offers
                  </a>
                </NavItem><hr className="sidebar-line" />
                <NavItem >
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    href="#"
                    onClick={() => showSection('myProfile')}
                  >
                    <FaUser/>
                    My Profile
                  </a>
                </NavItem><hr className="sidebar-line" />
                <NavItem >
                  <a
                    className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                      }`}
                    onClick={ClearUserDataFromLocalStorage}
                  ><FaPowerOff/>
                    Logout
                  </a>
                </NavItem>
              </Nav>
              <hr className="sidebar-line mb-5" />

            </div>
            <div className="sidebar-sticky mobile-menuone">
              <Row>
                <Col lg={8} >
                  <Row>


                    <Col lg={3} className='col-4'><Image id="userImage" src={News1} alt="User Image" className='ms-2' /></Col>
                    <Col lg={9} className='col-8'><h5 className="text-light">Adam Milne</h5>
                      <h6 className="text-light">Traveller</h6></Col>
                  </Row>



                </Col>
                <Col lg={4} ><div className="text-center ">
                  <div className='d-flex p-0'>
                  <FaPowerOff/>
                    Logout
                  </div>
                </div></Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <ul className='d-flex'>
                    <li className="nav-item">
                      <a
                        className={`nav-link sidebar-list ${currentSection === 'myHotels' ? 'active' : ''
                          }`}
                        href="#"
                        onClick={() => showSection('myHotels')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f2f2f2" d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                        My Hotel
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link sidebar-list ${currentSection === 'myBlogs' ? 'active' : ''
                          }`}
                        href="#"
                        onClick={() => showSection('myBlogs')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f0f2f4" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                        My News
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link sidebar-list ${currentSection === 'myProfile' ? 'active' : ''
                          }`}
                        href="#"
                        onClick={() => showSection('myProfile')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#e6e7ea" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                        My Profile
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>


            </div>
          </div>
          <div id="content">
            <div id="welcomeMessage" >
              <div id="myHotels" style={{ display: currentSection === 'myHotels' ? 'block' : 'none' }}>
                <button className='userprofilebuttons' >All Hotels</button>
                <button className='userprofilebuttons' onClick={() => showSection('addHotels')} >Add Hotel</button>
           
                  <AllHotels/>

              </div>


              <div id="myBlogs" style={{ display: currentSection === 'myBlogs' ? 'block' : 'none' }}>
                <button className='userprofilebuttons'  >All News</button>
                <button className='userprofilebuttons' onClick={() => showSection('addBlogs')}>Add News</button>
                 <AllBlogs />
              </div>
              <div id="myProfile" style={{ display: currentSection === 'myProfile' ? 'block' : 'none' }}>
                <h4 className="mb-4">Personal information</h4>

                <Row >
                  <Col lg={8} className=" p-0 mt-3">
                    <Card className="card">
                      <CardBody className=" card-body-div">
                        <Row className=" mb-3">
                          <Col sm={3} >
                            <h6 className="mb-0">Full Name</h6>
                          </Col>
                          <Col className="col-sm-9 text-secondary">
                            <input type="text" className="sidebar-input" value="John Doe" />
                          </Col>
                        </Row>
                        <div className="row mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Email</h6>
                          </Col>
                          <Col sm={9} className="text-secondary">
                            <input type="text" className="sidebar-input" value="john@example.com" />
                          </Col>
                        </div>
                        <Row className=" mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Password</h6>
                          </Col>
                          <Col sm={9} className="text-secondary">
                            <input type="password" className="sidebar-input" value="(239) 816-9029" />
                          </Col>
                        </Row>
                        <Row className=" mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Confirm Password</h6>
                          </Col>
                          <Col sm={9} className=" text-secondary">
                            <input type="password" className="sidebar-input" value="(320) 380-4539" />
                          </Col>
                        </Row>
                        <div className="mt-3 text-center "><button className="btn btn-block btn-default w-25 ">Save Details</button></div>

                      </CardBody>
                    </Card>

                  </Col>
                  <Col lg={4} className="p-0 mt-3">
                    <div className="card ">
                      <div className="card-body current-subscription">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Current Subcription :</h6>
                            <b><span className="">Basic</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Amount:</h6>
                            <b><span className=""><FaDollarSign className='m-0'/>199</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Expiry Date :</h6>
                            <b><span className="">31/12/2024</span></b>
                          </li>


                        </ul>

                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Subcription Name:</h6>
                            <b><span className="text-dark"><i className="fa fa-eur" aria-hidden="true"></i>Premium</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Amount :</h6>
                            <b><span className="text-dark"><i className="fa fa-eur" aria-hidden="true"></i>399</span></b>
                          </li>
                         
                        </ul>

                      </div>
                    </div>
                    <div className='text-center'>
                      <div className="mt-3"><a className="btn btn-block btn-default w-50 " href="/subscription">View All</a></div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div id="addBlogs" style={{ display: currentSection === 'addBlogs' ? 'block' : 'none' }}>
              <AddBlogs />
                
              </div>
          
              <div id="addHotels" style={{ display: currentSection === 'addHotels' ? 'block' : 'none' }}>
                {/* <MultiStep activeStep={0} > */}
              <AddHotel/>
                {/* {/* </MultiStep>         */}
              </div>


          
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default UserProfile;
