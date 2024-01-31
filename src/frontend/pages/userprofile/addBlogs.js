import React, { useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Form, Row } from "react-bootstrap";
import { stateToHTML } from 'draft-js-export-html';
import axios from "axios";
import API from "../../../utils";
import PayPalButton from "../../components/paypal";
function AddBlogs() {
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());

  const [image, setImage] = useState(null)
  const handleInputChange = (e) => {
    const { name, value } = e.target || {};;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleimageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    setImage(file);

  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target || {};
  //   setFormData({
  //     ...formData,
  //     [name]: files[0],
  //   });
  // };


  // const handleHotelEditorChange = (editorState) => {
  //   setHotelEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     hotelDescription: JSON.stringify(contentRaw),
  //   });
  // };

  // const handleOfferEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   setFormData({
  //     ...formData,
  //     blogContent: JSON.stringify(contentRaw),
  //   });
  // };
  // const handleBlogEditorChange = (editorState) => {
  //   setBlogEditorState(editorState);
  // };

  const [formData, setFormData] = useState({
    businessName: '',
    country: '',
    fullName: '',
    email: '',
    blogTitle: '',
    youtubeLink: '',
    image: [],
    hotelDescription: '',
    offerTitle: '',
    contactPhoneNumber: '',
    phoneNumber: '',
    link: '',
    offerValidTo: '',
    offerValidFrom: '',
    blogContent: '',
    user_id: 2,
    status:"1",
    catagory:"DGFGYUGFU",
    editor_choice:"fgufg",
    news_views:"fdhjgffbjhfbf",
    news_likes:"fifhisfghkjfghf",
    hotelDescriptionHTML: '', 
  blogContentHTML: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    businessName: "",
    country: "",
    fullName: "",
    email: "",
    blogTitle: "",
    youtubeLink: "",
    image: "",
    offerTitle: "",
    phoneNumber: "",
    contactPhoneNumber: "",
    link: "",
    offerValidFrom: "",
    offerValidTo: "",
    
  });


  const handleHotelEditorChange = (editorState) => {
    setHotelEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    setFormData({
      ...formData,
      hotelDescriptionHTML: htmlContent,
    });
  };

  const handleOfferEditorChange = (editorState) => {
    setBlogEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    setFormData({
      ...formData,
      blogContentHTML: htmlContent,
    });
  };

  const handleAddBlogs = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append('bussiness_name', formData.businessName);
    formDatas.append('country', formData.country);
    formDatas.append('full_name', formData.fullName);
    formDatas.append('email_address', formData.email);
    formDatas.append('news_title', formData.blogTitle);
    formDatas.append('youtube_link', formData.youtubeLink);
    formDatas.append('news_image', image);
    formDatas.append('news_desc', formData.hotelDescriptionHTML);
    formDatas.append('offer_title', formData.offerTitle);
    // formDatas.append('offerCountry', formData.offerCountry);
    formDatas.append('contact_no', formData.contactPhoneNumber);
    formDatas.append('phone_number', formData.phoneNumber);

    formDatas.append('redeem_link', formData.link);
    formDatas.append('from_date', formData.offerValidFrom);
    formDatas.append('to_date', formData.offerValidTo);
    formDatas.append('description', formData.blogContentHTML);
    formDatas.append('user_id', formData.user_id);
    formDatas.append('status', formData.status);
    formDatas.append('catagory', formData.catagory);
    formDatas.append('editor_choice', formData.editor_choice);
    formDatas.append('news_likes', formData.news_likes);
    formDatas.append('news_views', formData.news_views);
    try {
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.createNews}`,
        formDatas,
        {
          headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log("news  added successfully");
      } else {
        console.error("Failed to add news");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    let isValid = true;
    const newErrors = { ...validationErrors };

    // Validate businessName
    if (!formData.businessName ) {
      newErrors.businessName = "Business Name is required";
      isValid = false;
    } else {
      newErrors.businessName = "";
    }


    // Validate country
    if (!formData.country) {
      newErrors.country = "country is required";
      isValid = false;
    } else {
      newErrors.country = "";
    }

    // Validate fullName
    if (!formData.fullName) {
      newErrors.fullName = "fullName is required";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate blogTitle
    if (!formData.blogTitle) {
      newErrors.blogTitle = "News Title is required";
      isValid = false;
    } else {
      newErrors.blogTitle = "";
    }

    // Validate youtubeLink
    if (!formData.youtubeLink) {
      newErrors.youtubeLink = "youtubeLink is required";
      isValid = false;
    } else {
      newErrors.youtubeLink = "";
    }


    if (!image) {
      newErrors.image = "Image is required";
      isValid = false;
    } else {
      newErrors.image = "";
    }

    // Validate email
    if (!formData.offerTitle) {
      newErrors.offerTitle = "offerTitle is required";
      isValid = false;
    } else {
      newErrors.offerTitle = "";
    }
    // Validate email
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "phoneNumber is required";
      isValid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.offercountry) {
      newErrors.offercountry = "Offer Country is required";
      isValid = false;
    } else {
      newErrors.offercountry = "";
    }

    // Validate email
    if (!formData.link) {
      newErrors.link = "link is required";
      isValid = false;
    } else {
      newErrors.link = "";
    }
    // Validate email
    if (!formData.offerValidFrom) {
      newErrors.offerValidFrom = "offer ValidFrom is required";
      isValid = false;
    } else {
      newErrors.offerValidFrom = "";
    }

    // Validate email
    if (!formData.offerValidTo) {
      newErrors.offerValidTo = "Offer ValidTo is required";
      isValid = false;
    } else {
      newErrors.offerValidTo = "";
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  return (
    <>
      {/* <h3 className="mb-4">Add A New Blog</h3> */}
      <Form id="addBlogForm" onSubmit={handleAddBlogs}>
        <Row className="mb-3">

        <Col lg={6}>
            <div className="select-option">
              <select id="country" name="contactPhoneNumber" value={formData.contactPhoneNumber}
                onChange={handleInputChange} className="sidebar-input" >
                <option value="newsType">Select News Type</option>
                <option value="newsType">Hotel News</option>
                <option value="newsType">General News</option>
                
              </select>

            </div>
          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="businessName"
              name="businessName"
              placeholder='Name Of Business'
              value={formData.businessName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.businessName ? "red" : "" }}
            />
            {validationErrors.businessName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.businessName}
              </div>
            )}
          </Col>
          <Col lg={6}>
            <div className="select-option">
              <select id="country"
                name="country"
                className="sidebar-input"
                value={formData.country}
                onChange={handleInputChange}
                style={{ borderColor: validationErrors.country ? "red" : "" }}
              >

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
              {validationErrors.country && (
                <div style={{ color: "red", textAlign: "left" }}>
                  {validationErrors.country}
                </div>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder='Your Full Name'
              value={formData.fullName}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.fullName ? "red" : "" }}
            />
            {validationErrors.fullName && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.fullName}
              </div>
            )}
          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="email"
              id="email"
              name="email"
              placeholder='Your Email Address'
              value={formData.email}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.email ? "red" : "" }}
            />

            {validationErrors.email && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.email}
              </div>
            )}

          </Col>

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="blogTitle"
              name="blogTitle"
              placeholder='News Title'
              value={formData.blogTitle}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.blogTitle ? "red" : "" }}
            />
            {validationErrors.blogTitle && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.blogTitle}
              </div>
            )}
          </Col>
          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              type="text"
              id="youtubeLink"
              name="youtubeLink"
              placeholder='Youtube Link (optional)'
              value={formData.youtubeLink}
              onChange={handleInputChange}
              style={{ borderColor: validationErrors.youtubeLink ? "red" : "" }}
            />

            {validationErrors.youtubeLink && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.youtubeLink}
              </div>
            )}

          </Col>

          <Col lg={6}>
            <Form.Control
              className="sidebar-input"
              id="image"
              name="image"
              type="file"
              value={formData.image}
              onChange={handleimageChange}
              style={{ borderColor: validationErrors.image ? "red" : "" }}
            />
            {validationErrors.image && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.image}
              </div>
            )}
          </Col>
        </Row>
       
       

        {/* <Row className=" mb-3">

          <Col lg={12}>
            <Form.Control
              className="sidebar-input"
              id="image"
              name="image"
              type="file"
              value={formData.image}
              onChange={handleimageChange}
              style={{ borderColor: validationErrors.image ? "red" : "" }}
            />
            {validationErrors.image && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.image}
              </div>
            )}
          </Col>
        </Row> */}
        <Row className=" mb-3">

          <Col lg={12}>
            <Editor
              editorState={hotelEditorState}
              onEditorStateChange={handleHotelEditorChange}
              value={formData.hotelDescriptionHTML}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <div className='text-center mb-3'>
          <h5>YOU CAN ADD A “SPECIAL OFFER” HERE. (*non-obligatory)</h5>
        </div>
        <Row className="mb-3">
          <Col lg={6}>
            <Form.Control className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder='Enter Offer Title' value={formData.offerTitle}
              onChange={handleInputChange}/>
          </Col>
          <Col lg={6}>
            <div className="select-option">
              <select id="country" name="contactPhoneNumber" value={formData.contactPhoneNumber}
                onChange={handleInputChange} className="sidebar-input" >
                <option value="Kyrgyzstan">Select Country</option>
                <option value="Kyrgyzstan">Kyrgyzstan(12)</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic(27)</option>
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
            <Form.Control className="sidebar-input" type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber}
              onChange={handleInputChange}  />
            {/* {validationErrors.phoneNumber && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.phoneNumber}
              </div>
            )} */}
          </Col>
          <Col lg={6}>
            <Form.Control className="sidebar-input" type="text" id="link" name="link" placeholder='Enter The Link Where Client Can Redeem Your Offer' value={formData.link}
              onChange={handleInputChange}  />
            {/* {validationErrors.link && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.link}
              </div>
            )} */}
          </Col>
        </Row>
        <Row>

          <Col lg={6}>
            <Form.Control className="sidebar-input" type="date" id="offerValidfrom" name="offerValidFrom" placeholder='Dates Offer Valid From' value={formData.offerValidFrom}
              onChange={handleInputChange} />
            {/* {validationErrors.offerValidFrom && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.offerValidFrom}
              </div>
            )} */}
          </Col>
          <Col lg={6}>
            <Form.Control className="sidebar-input"
              type="date"
              id="offerValidTo"
              name="offerValidTo"
              placeholder='Dates Offer Valid To'
              value={formData.offerValidTo}
              onChange={handleInputChange} />
            {/* {validationErrors.offerValidTo && (
              <div style={{ color: "red", textAlign: "left" }}>
                {validationErrors.offerValidTo}
              </div>
            )} */}
          </Col>
        </Row>
        <Row className=" mb-3">

          <Col lg={12}>

            <Editor
              editorState={blogEditorState}
              onEditorStateChange={handleOfferEditorChange}
              value={formData.blogContentHTML}
              onChange={handleInputChange}
            />       
            </Col>
        </Row>
        <Row className=" mb-3">
         
          <Col lg={6}>
            <button type="submit" >Add News</button>
          </Col>
        </Row>
        <div className="text-center">
          <p>Your article/views will stay on our Platform for unlimited period of time</p>
        </div>

        <div className="paypal_buttons">
                                        <PayPalButton />                                        
                                    </div>
      </Form>

     
    </>
  );
}
export default AddBlogs;