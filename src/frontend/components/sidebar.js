import React, { useEffect, useState } from "react";
import { FaBlog, FaDollarSign, FaHotel, FaPowerOff, FaUser } from 'react-icons/fa';
import News1 from '../../assets/img/news1.jpg'

import { Col, Image, Nav, NavItem, NavLink, Row ,Card,CardBody} from 'react-bootstrap';
import { isUserLoggedIn } from "../../utils";
import { useNavigate } from "react-router-dom";
import AllHotels from "../pages/userprofile/allHotels";
import AllBlogs from "../pages/userprofile/allBlogs";
import AddBlogs from "../pages/userprofile/addBlogs";
import AddHotel from "../pages/userprofile/addHotel";
import PersionalInformation from "../pages/userprofile/persionalInformation";
import EditHotel from "../pages/editHotel";
function UserSidebar (){


  const [showEditHotelForm, setShowEditHotelForm] = useState(false);

    const navigate = useNavigate()
    const [currentSection, setCurrentSection] = useState('myProfile');
    const showSection = (section) => {
        console.log("dsidshihgfiugfuygfy")
        setCurrentSection(section);

        setShowEditHotelForm(false);
        console.log(section)
      };

      const ClearUserDataFromLocalStorage = () => {
        localStorage.removeItem("isLoggedIn");
       navigate("/login")
      };

      useEffect(() => {
        if (!isUserLoggedIn()) {
          navigate("/login")
          return;
        }
      }, []);

      const handleEditButtonClick = () => {
        // Do something when the "Edit" button is clicked
        setShowEditHotelForm(true);
      };
    return(
<>
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
                    href="/userprofile"
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
                    href="/userprofile"
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
            {currentSection === 'myHotels' && !showEditHotelForm && (
              <div id="myHotels" >
                <button className='userprofilebuttons' >All Hotels</button>
                <button className='userprofilebuttons' onClick={() => showSection('addHotels')} >Add Hotel</button>
           
                  <AllHotels onEditClick={handleEditButtonClick} />

              </div>
 )}
  {currentSection === 'myBlogs' && !showEditHotelForm && (
              <div id="myBlogs" style={{ display: currentSection === 'myBlogs' ? 'block' : 'none' }}>
                <button className='userprofilebuttons'  >All News</button>
                <button className='userprofilebuttons' onClick={() => showSection('addBlogs')}>Add News</button>
                 <AllBlogs />
              </div>
              )}


{currentSection === 'myProfile' && !showEditHotelForm && (
              <div id="myProfile" >
              <PersionalInformation/>
              </div>

)}

{currentSection === 'addBlogs' && !showEditHotelForm && (
              <div id="addBlogs">
              <AddBlogs />
                
              </div>
               )}
          
          {currentSection === 'addHotels' && !showEditHotelForm && (
              <div id="addHotels" style={{ display: currentSection === 'addHotels' ? 'block' : 'none' }}>
                {/* <MultiStep activeStep={0} > */}
              <AddHotel/>
                {/* {/* </MultiStep>         */}
              </div>
              )}

              {showEditHotelForm && (
        <div id="editHotelForm" >
          <EditHotel onClose={() => setShowEditHotelForm(false)} />
        </div>
         )}
          
            </div>
          </div>


         
</>
);
}
export default UserSidebar;