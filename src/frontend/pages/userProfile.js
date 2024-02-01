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
import UserSidebar from '../components/sidebar';


function UserProfile() {
 
  const navigate = useNavigate()



  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login")
      return;
    }
  }, []);


  return (
    <>
      <Header />
      <section className="sidebar-section">
        <Container className='d-flex sidebar-div order-1'>
         
          <UserSidebar/>
        
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default UserProfile;
