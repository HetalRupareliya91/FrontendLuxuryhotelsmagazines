import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Image, Nav, ProgressBar, Row } from 'react-bootstrap';
import API from "../../utils";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from "../components/header";
import Footer from "../components/footer";
import hotelImage1 from "../../assets/img/hero/hero-1.jpg"
import { Link } from "react-router-dom";

function EditHotel(){
    const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
    const [locationEditorState, setlocationEditorState] = useState(EditorState.createEmpty());
    const [roomsAndSuitesEditorState, setroomsAndSuitesEditorState] = useState(EditorState.createEmpty());
    const [restaurentsEditorState, setrestaurentsEditorState] = useState(EditorState.createEmpty());
    const [spaAndWellnessEditorState, setSpaAndWellnessEditorState] = useState(EditorState.createEmpty());
    const [otherFacilitiesEditorState, setOtherFacilitiesEditorState] = useState(EditorState.createEmpty());
    const [additionalInformationEditorState, setAdditionalInformationEditorState] = useState(EditorState.createEmpty());
    const [descriptionEditorState, setDescriptionEditorState] = useState(EditorState.createEmpty());
    // const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
    const [currentStep, setCurrentStep] = useState(1);
    const handleHotelEditorChange = (editorState) => {
        setHotelEditorState(editorState);
    };

    const handlelocationEditorChange = (editorState) => {
        setlocationEditorState(editorState);
    };

    const handleroomsAndSuitesEditorState = (editorState) => {
        setroomsAndSuitesEditorState(editorState);
    };

    const handlerestaurentsEditorState = (editorState) => {
        setrestaurentsEditorState(editorState);
    };
    const handlespaAndWellnessEditorState = (editorState) => {
        setSpaAndWellnessEditorState(editorState);
    };
    const handleOtherFacilitiesEditorChange = (editorState) => {
        setOtherFacilitiesEditorState(editorState);
    };
    const handleAdditionalInformationEditorChange = (editorState) => {
        setAdditionalInformationEditorState(editorState);
    };


    const handleDescriptionEditorState = (editorState) => {
        setDescriptionEditorState(editorState);
    };
    const [image, setImage] = useState(null)

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation:"",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: ["WiFi", "Parking"],
        otherInformation1: "",
        otherInformation2: "",
        contact1: { name: "", email: "", contactInformation: "" },
        contact2: { name: "", email: "", contactInformation: "" },
        contact3: { name: "", email: "", contactInformation: "" },
        offerTitle: "",
        phoneNumber: "",
        offerValidFrom: "",
        offerValidTo: "",
        description: "",
        redeemLink: "",
        addHotelToHomePageLatestNews: "",
        addHotelToHomePageHotelLatestNews: "",
        addSpecialOfferToHomepage: "",
        addHotelToHomePageSpotlight: "",

    });

    const handleimageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target || {};

        if (type === "checkbox") {
            // Check if the checkbox is related to an amenity
            const isAmenityCheckbox = formData.amenitiesList.some(amenity => amenity.title === name);

            if (isAmenityCheckbox) {
                // If it's an amenity checkbox, update the state accordingly
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: prevData.amenitiesList.map(amenity => ({
                        ...amenity,
                        checked: amenity.title === name ? checked : amenity.checked || false,
                    })),
                }));
            } else {
                // If it's not an amenity checkbox, update the state as before
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: checked,
                }));
            }
        } else {
            // For non-checkbox inputs, update the state as before
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleChange = (contactNumber, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [contactNumber]: {
                ...prevData[contactNumber],
                [field]: value,
            },
        }));
    };

    // const nextStep = () => {
    //     setStep(step + 1);
    // };

    // const prevStep = () => {
    //     setStep(step - 1);

    // };

    const handleCreateHotel = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const formDataObject = new FormData();
        formDataObject.append('user_id', 3);
        formDataObject.append('hotel_title', formData.hotelName);
        formDataObject.append('website', formData.hotelWebsite);
        formDataObject.append('youtube_link', formData.youtubeLink);
        formDataObject.append('country', formData.country);
        formDataObject.append('address', formData.location);
        formDataObject.append('contact_no', formData.contactInformation);
        formDataObject.append('hotel_images', image);
        formDataObject.append('about_hotel', formData.aboutHotel);
        formDataObject.append('rooms_and_suites', formData.roomsAndSuites);
        formDataObject.append('restaurent_bars', formData.restaurantsAndBars);
        formDataObject.append('spa_wellness', formData.spaAndWellness);
        formDataObject.append('other_facilities', formData.otherFacilities);
        formDataObject.append('numberOfRooms', formData.numberOfRooms);
        formDataObject.append('numberOfRestaurants', formData.numberOfRestaurants);
        formDataObject.append('outdoorSwimmingPool', formData.outdoorSwimmingPool);
        formDataObject.append('bars', formData.bars);
        formDataObject.append('email', "rohit@gmail.com");
        formDataObject.append('otherInformation1', formData.otherInformation1);
        formDataObject.append('otherInformation2', formData.otherInformation2);
        formDataObject.append('type', 2);
        // Adding contact objects
        for (let i = 1; i <= 3; i++) {
            formDataObject.append(`name[${i}]`, formData[`contact${i}`].name);
            formDataObject.append(`email[${i}]`, formData[`contact${i}`].email);
            formDataObject.append(`contact[${i}]`, formData[`contact${i}`].contactInformation);
        }

        formDataObject.append('offer_title', formData.offerTitle);
        formDataObject.append('contact_no', formData.phoneNumber);
        formDataObject.append('from_date', formData.offerValidFrom);
        formDataObject.append('to_date', formData.offerValidTo);
        formDataObject.append('description', formData.description);
        formDataObject.append('redeem_link', formData.redeemLink);
        formDataObject.append('home_page_latest_news', formData.addHotelToHomePageLatestNews);
        formDataObject.append('hotel_latest_news', formData.addHotelToHomePageHotelLatestNews);
        formDataObject.append('special_offer_to_homepage', formData.addSpecialOfferToHomepage);
        formDataObject.append('home_page_spotlight', formData.addHotelToHomePageSpotlight);
        const amenities = [];
        for (const amenity of formData.amenitiesList) {
            // formDataObject.append(`amities[${amenity.id}]`, amenity.checked || false);
        }

        const amenitiesArray = formData.amenitiesList.map((amenity) => ({
            [amenity.id]: amenity.checked || false
        }));
        formDataObject.append('amities', JSON.stringify(amenitiesArray));
        const notCheckedAmenities = formData.amenitiesList.filter(amenity => !amenity.checked);
        for (const amenity of notCheckedAmenities) {
            // formDataObject.append(`amities[${amenity.id}]`, false);
        }
        try {
            const response = await axios.post(
                
                `${API.BASE_URL}${API.ENDPOINTS.createHotel}`,
                formDataObject,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.status === 200) {
                console.log("hotel added successfully");
            } else {
                console.error("Failed to add hotel");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const fetchAmenities = async () => {
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    'Authorization': 'hXuRUGsEGuhGf6KM',
                },
            });
            const data = response.data;
            console.log('Amenities data:', data);
            if (data.status === true && Array.isArray(data.data)) {
                setFormData((prevData) => ({
                    ...prevData,
                    amenitiesList: data.data,
                }));

            } else {
                console.error('Invalid format: Amenities data is not an array.');
            }
        } catch (error) {
            console.error('Error fetching amenities:', error);
        }
    };

    useEffect(() => {
        fetchAmenities();
    }, []);



    const [progress, setProgress] = useState(0);

    const nextStep = async (e) => {
      if (currentStep < 4) {
        setCurrentStep((prevStep) => prevStep + 1);
        const newProgress = ((currentStep + 1) / 4) * 100;
        setProgress(newProgress);
      }
    };
    
    const prevStep = () => {
      if (currentStep > 1) {
        setCurrentStep((prevStep) => prevStep - 1);
        const newProgress = ((currentStep - 1) / 4) * 100;
        setProgress(newProgress);
      }
    };
    
    useEffect(() => {
      // Set initial progress when the component mounts
      setProgress((currentStep / 4) * 100);
    }, []);
    

    
    return(
<>
<Header/>
<section className="spad">
    <Container>

        <div className="text-center">
            <h1>
                Update Hotel profile
            </h1>
        </div>
        
<div className="mb-3">
{currentStep === 1 && <h4 className="stepform-heading">Hotel Details</h4>}
{currentStep === 2 && <h4 className="stepform-heading">Hotel Contacts</h4>}
{currentStep === 3 && <h4 className="stepform-heading">Special Offer</h4>}
{currentStep === 4 && <h4 className="stepform-heading">Home Page Addon</h4>}

</div>
<ProgressBar now={progress} label={`${progress}%`} className="ProgressBar h-25 mb-3" />
        <Form>

            <div className="mb-3">
                <h1>Image</h1>
            </div>
            <Row className="mb-3">
                <Col lg={3}>
                  
                <Image src={hotelImage1}/>
                <div className="mt-3 d-flex justify-content-between ">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                </Col>
            </Row>
            {currentStep === 1 && <div>
                <Row className=" mb-3">

                    <Col lg={6}>
                        <Form.Control className="sidebar-input"
                            type="text"
                            id="hotelName"
                            name="hotelName"
                            placeholder="Hotel Name"
                            required
                            value={formData.hotelName}
                            onChange={handleInputChange} />
                    </Col>

                    <Col lg={6}>
                        <Form.Control className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                            onChange={handleInputChange} />
                    </Col>
                    <Col lg={6}>
                        <Form.Control className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
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

                <Row className=" mb-3">

                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location" value={formData.location}
                            onChange={handleInputChange} /> */}
                             <label>Location</label>

                            
<Editor
              editorState={locationEditorState}
              onEditorStateChange={handlelocationEditorChange}
              name="location"
              value={formData.location}
            //   onChange={handleInputChange}
            />
                    </Col>
                    {/* <Col lg={6}>
                        <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation}
                            onChange={handleInputChange} />
                    </Col> */}

                </Row>

                <Row className=" mb-3">
                    <Col lg={12}>
                        <label>Hotel Image</label>
                        <Form.Control className="sidebar-input" type="file" id="hotelImage" name="hotelImage" placeholder="Hotel Image" value={formData.hotelImage}
                            onChange={handleimageChange} />

                    </Col>
                </Row>
                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" value={formData.aboutHotel}
                            onChange={handleInputChange} /> */}
                            <label>About Hotel</label>

                            
<Editor
              editorState={hotelEditorState}
              onEditorStateChange={handleHotelEditorChange}
              name="aboutHotel"
              value={formData.aboutHotel}
            //   onChange={handleInputChange}
            />
                    </Col>
                </Row>

                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" value={formData.roomsAndSuites}
                            onChange={handleInputChange} /> */}

<label>Rooms And Suites</label>

                            
<Editor
              editorState={roomsAndSuitesEditorState}
              onEditorStateChange={handleroomsAndSuitesEditorState}
              value={formData.roomsAndSuites}
            //   onChange={handleInputChange}
            />
                    </Col>
                </Row>

                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" value={formData.restaurantsAndBars}
                            onChange={handleInputChange} /> */}
                            <label>Restaurents And Bars (Optional)</label>
                            <Editor
              editorState={restaurentsEditorState}
              onEditorStateChange={handlerestaurentsEditorState}
              value={formData.restaurantsAndBars}
              onChange={handleInputChange}
            />
                    </Col>
                </Row>
                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" value={formData.spaAndWellness}
                            onChange={handleInputChange} /> */}
                            <label>Spa And Wellness (Optional)</label>
                            <Editor
              editorState={spaAndWellnessEditorState}
              onEditorStateChange={handlespaAndWellnessEditorState}
              value={formData.spaAndWellness}
              onChange={handleInputChange}
            />
                    </Col>
                </Row>
                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.otherFacilities}
                            onChange={handleInputChange} /> */}
                            <label>Other Facilities (Optional)</label>
                            <Editor
              editorState={otherFacilitiesEditorState}
              onEditorStateChange={handleOtherFacilitiesEditorChange}
              value={formData.roomsAndSuites}
              onChange={handleInputChange}
            />
                    </Col>
                </Row>


                <Row className=" mb-3">
                    <Col lg={12}>
                        {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.additionalInformation}
                            onChange={handleInputChange} /> */}
                            <label>Additional information (Optional)</label>
                            <Editor
              editorState={additionalInformationEditorState}
              onEditorStateChange={handleAdditionalInformationEditorChange}
              value={formData.additionalInformation}
              onChange={handleInputChange}
            />
                    </Col>
                </Row>
                <h5>Hotel Amenities</h5>
                <Row className="mb-3">
                    <Col lg={3} md={4}>
                        <input className="sidebar-input" type="number" id="numberOfRooms" name="numberOfRooms" placeholder="Number Of Rooms" value={formData.numberOfRooms} onChange={handleInputChange} />
                    </Col>

                    <Col lg={3} md={4}>
                        <input className="sidebar-input" type="number" id="numberOfRestaurants" name="numberOfRestaurants" placeholder="Number Of Restaurants" value={formData.numberOfRestaurants} onChange={handleInputChange} />
                    </Col>
                    <Col lg={3} md={4}>
                        <input className="sidebar-input" type="number" id="outdoorSwimmingPool" name="outdoorSwimmingPool" placeholder="Swimming Pool" value={formData.outdoorSwimmingPool} onChange={handleInputChange} />
                    </Col>

                    <Col lg={3} md={4}>
                        <input className="sidebar-input" type="number" id="bars" name="bars" placeholder="Bars" value={formData.bars} onChange={handleInputChange} />
                    </Col>
                    <Col lg={3} md={4}>
                        <input className="sidebar-input" type="number" id="meetingrooms" name="bars" placeholder="Meeting Rooms"  />
                    </Col>

                    <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Room service</label>
                            </Form.Group>
                        </Col>

                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>

                        <Col  lg={3} md={4}className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Room service</label>
                            </Form.Group>
                        </Col>

                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Breakfast</label>
                            </Form.Group>
                        </Col>

                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>WIFI</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Fitness center</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4}  className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Sport Classes</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Spa</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Toiletries</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Kids Club</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Spa</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Additional Classes</label>
                            </Form.Group>
                        </Col>

                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Hair Dryer</label>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={4} className="mb-3">
                            <Form.Group  className='d-flex' >
                                <Form.Check
                                    type="checkbox"
                                   
                                    className=' me-3'
                                   
                                />
                                <label>Parking</label>
                            </Form.Group>
                        </Col>
                </Row>
                {/* <Row className="mb-3">
                    
                </Row> */}


             
                <Row className="mb-3">
                    <Col lg={3}>
                        <input className="sidebar-input" type="text" id="otherInformation1" name="otherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation1}
                            onChange={handleInputChange} />
                    </Col>
                    <Col lg={3}>
                        <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                            onChange={handleInputChange} />
                    </Col>
                    <Col lg={3}>
                        <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                            onChange={handleInputChange} />
                    </Col>
                    <Col lg={3}>
                        <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                            onChange={handleInputChange} />
                    </Col>
                </Row>
                <div className="text-end">                <button onClick={nextStep} >
                    next
                </button>
                </div>


            </div>}
            {currentStep === 2 && <div>
                <Row className="mb-3">
                    <h5>Contact 1 </h5>
                    <Col lg={4}>
                        <Form.Control
                            className="sidebar-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" Name"
                            value={formData.contact1.name}
                            onChange={(e) => handleChange("contact1", "name", e.target.value)}
                            required />
                    </Col>
                    <Col lg={4}>
                        <Form.Control className="sidebar-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" Email"
                            value={formData.contact1.email}
                            onChange={(e) => handleChange("contact1", "email", e.target.value)}
                            required />
                    </Col>
                    <Col lg={4}>
                        <Form.Control className="sidebar-input"
                            type="text"
                            id="contactInformation"
                            name="contactInformation"
                            placeholder="Contact Information"
                            value={formData.contact1.contactInformation}
                            onChange={(e) => handleChange("contact1", "contactInformation", e.target.value)}
                            required />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <h5>Contact 2 </h5>
                    <Col lg={4}>
                        <Form.Control className="sidebar-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" Name"
                            value={formData.contact2.name}
                            onChange={(e) => handleChange("contact2", "name", e.target.value)} />
                    </Col>
                    <Col lg={4}>
                        <Form.Control type="email"
                            id="email"
                            name="email"
                            placeholder=" Email"
                            value={formData.contact2.email}
                            onChange={(e) => handleChange("contact2", "email", e.target.value)} />
                    </Col>
                    <Col lg={4}>
                        <Form.Control type="text"
                            id="contactInformation"
                            name="contactInformation"
                            placeholder="Contact Information"
                            value={formData.contact2.contactInformation}
                            onChange={(e) => handleChange("contact2", "contactInformation", e.target.value)}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <h5 className="third-child">Contact 3 </h5>
                    <Col lg={4}>
                        <Form.Control className="sidebar-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" Name"
                            value={formData.contact3.name}
                            onChange={(e) => handleChange("contact3", "name", e.target.value)} />
                    </Col>
                    <Col lg={4}>
                        <Form.Control type="email"
                            id="email"
                            name="email"
                            placeholder=" Email"
                            value={formData.contact3.email}
                            onChange={(e) => handleChange("contact3", "email", e.target.value)} />
                    </Col>
                    <Col lg={4}>
                        <Form.Control type="text"
                            id="contactInformation"
                            name="contactInformation"
                            placeholder="Contact Information"
                            value={formData.contact3.contactInformation}
                            onChange={(e) => handleChange("contact3", "contactInformation", e.target.value)} />
                    </Col>
                </Row>
                <div className="text-end">
                    <button onClick={prevStep} >
                        Previous
                    </button>
                    <button onClick={nextStep} >
                        next
                    </button>
                </div>
            </div>}
            {currentStep === 3 && <div>
                <Row className='mb-3'>
                    <Col lg={6}>
                        <input className="sidebar-input" type="text" id="offerTitle" name="offerTitle" placeholder="Offer Title" value={formData.offerTitle}
                            onChange={handleInputChange} required />
                    </Col>
                    <Col lg={6}>
                        <input className="sidebar-input" type="text" id="phoneNumber" name="phoneNumber" placeholder="Contact Phone Nunmber" value={formData.phoneNumber}
                            onChange={handleInputChange} required />
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col lg={6}>
                        <input className="sidebar-input" type="date" id="offerValidFrom" name="offerValidFrom" value={formData.offerValidFrom}
                            onChange={handleInputChange} required />
                    </Col>
                    <Col lg={6}>
                        <input className="sidebar-input" type="date" id="offerValidTo" name="offerValidTo" value={formData.offerValidTo}
                            onChange={handleInputChange} required />
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col lg={12}>
                        {/* <textarea className="sidebar-input" rows={4} placeholder="Description" name="description" value={formData.description}
                            onChange={handleInputChange} required /> */}
                            <label>Description</label>
                            <Editor
              editorState={descriptionEditorState}
              onEditorStateChange={handleDescriptionEditorState}
              value={formData.description}
              onChange={handleInputChange}
            />

                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col lg={12}>
                        <input type="text" id='redeemLink' name='redeemLink' className="sidebar-input" placeholder='Redeem Link' value={formData.redeemLink}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <div className="text-end">
                    <button onClick={prevStep} >
                        Previous
                    </button>
                    <button onClick={nextStep} >
                        next
                    </button>
                </div>
            </div>}
            {currentStep === 4 && <div>
                <Row className='mb-3'>
                    <Col>
                        <h6>
                            Add Hotel to The Home Page Latest News?
                        </h6>
                        <div className="select-option">
                            <select id="addHotelToHomePageLatestNews" className="sidebar-input" name="addHotelToHomePageLatestNews" value={formData.addHotelToHomePageLatestNews}
                                onChange={handleInputChange}>
                                <option value="Kyrgyzstan">No</option>
                                <option value="Display For 1 Week (+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                <option value="">Display For 1 Month (+25 Euro)</option>

                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col>
                        <h6>
                            Add Hotel to The Home Page Hotel Latest News?
                        </h6>
                        <div className="select-option">
                            <select id="addHotelToHomePageHotelLatestNews" className="sidebar-input" name="addHotelToHomePageHotelLatestNews" value={formData.addHotelToHomePageHotelLatestNews}
                                onChange={handleInputChange}
                            >
                                <option value="No">No</option>
                                <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                            </select>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <h6 className="third-child">
                            Add Special Offer to The Homepage?
                        </h6>
                        <div className="select-option">
                            <select id="addSpecialOfferToHomepage" className="sidebar-input" name="addSpecialOfferToHomepage" value={formData.addSpecialOfferToHomepage}
                                onChange={handleInputChange}>
                                <option value="No">No</option>
                                <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                            </select>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <h6>
                            Add hotel to The Home Page Spotlight?
                        </h6>
                        <div className="select-option">
                            <select id="addHotelToHomePageSpotlight" className="sidebar-input" name="addHotelToHomePageSpotlight" value={formData.addHotelToHomePageSpotlight}
                                onChange={handleInputChange}
                            >
                                <option value="No">No</option>
                                <option value="DisplayFor1Week(+10 Euro)">Display For 1 Week (+10 Euro)</option>
                                <option value="DisplayFor1Month(+25 Euro)">Display For 1 Month (+25 Euro)</option>

                            </select>
                        </div>
                    </Col>
                </Row>

                <div className="text-end">
                    <button onClick={prevStep} >
                        Previous
                    </button>
                    <button onClick={handleCreateHotel}>
                        Submit
                    </button>
                </div>
            </div>}

        </Form>
   

        </Container>
</section>

<Footer/>
</>
    )
}
export default EditHotel