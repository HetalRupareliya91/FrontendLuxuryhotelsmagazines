// EditBlogModal.js

import { Editor } from 'draft-js';
import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import API from '../../../utils';
import axios from 'axios';

const EditBlogModal = ({ show, handleClose, formData,hotel_id,handleInputChange, handleHotelEditorChange, handleOfferEditorChange }) => {
    const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
    const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
    const [image, setImage] = useState(null)


      const handleimageChange = (e) => {
        const file = e.target.files[0];
        console.log("Selected File:", file);
        setImage(file);
    
      };

      const handleEditSubmit = async (e) => {
        e.preventDefault();
    
        const formDatas = new FormData();
        formDatas.append('bussiness_name', formData.businessName);
        formDatas.append('country', formData.country);
        formDatas.append('full_name', formData.fullName);
        formDatas.append('email_address', formData.email);
        formDatas.append('news_title', formData.blogTitle);
        formDatas.append('youtube_link', formData.youtubeLink);
        formDatas.append('news_image', image);
        formDatas.append('news_desc', formData.hotelDescription);
        formDatas.append('offer_title', formData.offerTitle);
        formDatas.append('offerCountry', formData.offerCountry);
        formDatas.append('contact_no', formData.phoneNumber);
        formDatas.append('redeem_link', formData.link);
        formDatas.append('from_date', formData.offerValidFrom);
        formDatas.append('to_date', formData.offerValidTo);
        formDatas.append('description', formData.blogContent);
        formDatas.append('hotel_id', hotel_id);
        console.log(hotel_id)
        try {
          const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.updateNews}`,
            formDatas,
            {
              headers: {
                "Authorization": "hXuRUGsEGuhGf6KM",
                'Content-Type': 'multipart/form-data',
              },
            }
          );
    
          if (response.status === 200) {
            console.log(response.data);
          } else {
            console.error("Failed to add news");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
   
      };
    return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form id="addBlogForm" >
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="businessName" name="businessName" placeholder='Name Of Business' value={formData.businessName}
              onChange={handleInputChange} />
           
          </Col>
          <Col lg={6}>
            <div className="select-option">
              <select id="country"
                name="country" className="sidebar-input" value={formData.country}
                onChange={handleInputChange} >
                <option value="Kyrgyzstan">Name Of Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
              
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="fullName" name="fullName" placeholder='Your Full Name' required value={formData.fullName}
              onChange={handleInputChange}  />
          
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="email" id="email" name="email" placeholder='Your Email Address' value={formData.email}
              onChange={handleInputChange}  />
            
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="blogTitle" name="blogTitle" placeholder='Blog Title' value={formData.blogTitle}
              onChange={handleInputChange}  />
            
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder='Youtube Link (optional)' value={formData.youtubeLink}
              onChange={handleInputChange} />
            
          </Col>
        </Row>

        <Row className=" mb-3">

          <Col lg={12}>
            <input className="sidebar-input" id="image" name="image" type="file"
              onChange={handleimageChange}  />
            
          </Col>

        </Row>
        <Row className=" mb-3">

          <Col lg={12}>
            <Editor
            editorState={hotelEditorState}
            onEditorStateChange={handleHotelEditorChange}
              value={formData.hotelDescription}
              onChange={handleInputChange}
            />       
            </Col>
        </Row>

        <div className='text-center mb-3'>
          <h5>YOU CAN ADD A “SPECIAL OFFER” HERE. (*non-obligatory) Offer Title</h5>
        </div>
        <Row className="mb-3">
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder='Enter Offer Title' value={formData.offerTitle}
              onChange={handleInputChange}  />
          </Col>
          <Col lg={6}>
            <div className="select-option">
              <select id="country" name="country" value={formData.country}
                onChange={handleInputChange} className="sidebar-input" >
                <option value="Kyrgyzstan">Name Of Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
              </select>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber}
              onChange={handleInputChange} />
            
          </Col>
          <Col lg={6}>
            <input className="sidebar-input" type="text" id="link" name="link" placeholder='Enter The Link Where Client Can Redeem Your Offer' value={formData.link}
              onChange={handleInputChange}  />
            
          </Col>
        </Row>
        <Row>

          <Col lg={6}>
            <input className="sidebar-input" type="date" id="offerValidfrom" name="offerValidFrom" placeholder='Dates Offer Valid From' value={formData.offerValidFrom}
              onChange={handleInputChange}  />
            
          </Col>
          <Col lg={6}>
            <input className="sidebar-input"
              type="date"
              id="offerValidTo"
              name="offerValidTo"
              placeholder='Dates Offer Valid To'
              value={formData.offerValidTo}
              onChange={handleInputChange} />
            
          </Col>
        </Row>
        <Row className=" mb-3">

          <Col lg={12}>

            <Editor
            editorState={blogEditorState}
            onEditorStateChange={handleOfferEditorChange}
              value={formData.blogContent}
              onChange={handleInputChange}
            />       </Col>
        </Row>
      
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBlogModal;
