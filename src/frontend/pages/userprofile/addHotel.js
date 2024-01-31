import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Image, Nav, ProgressBar, Row } from 'react-bootstrap';
import API from "../../../utils";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';

function AddHotel() {
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
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            aboutHotel: htmlContent,
            //   aboutHotel: JSON.stringify(contentRaw),
        });
    };
    const handlelocationEditorChange = (editorState) => {
        setlocationEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            location: htmlContent,
        });
    };

    const handleroomsAndSuitesEditorState = (editorState) => {
        setroomsAndSuitesEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            roomsAndSuites: htmlContent,
        });
    };

    const handlerestaurentsEditorState = (editorState) => {
        setrestaurentsEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            restaurantsAndBars: htmlContent,
        });
    };
    const handlespaAndWellnessEditorState = (editorState) => {
        setSpaAndWellnessEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            spaAndWellness: htmlContent,
        });
    };
    const handleOtherFacilitiesEditorChange = (editorState) => {
        setOtherFacilitiesEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            otherFacilities: htmlContent,
        });
    };
    const handleAdditionalInformationEditorChange = (editorState) => {
        setAdditionalInformationEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            additionalInformation: htmlContent,
        });
    };


    const handleDescriptionEditorState = (editorState) => {
        setDescriptionEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData({
            ...formData,
            description: htmlContent,
        });
    };
    const [image, setImage] = useState(null)

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
        additionalInformation: "",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: [],
        otherInformation1: "",
        otherInformation2: "",

        otherInformation3: "",
        otherInformation4: "",
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
        formDataObject.append('otherInformation3', formData.otherInformation3);
        formDataObject.append('otherInformation4', formData.otherInformation4);

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

    const [validationErrors, setValidationErrors] = useState({
        hotelName: "",
        hotelWebsite: "",
        youtubeLink: "",
        country: "",
        location: "",
        contactInformation: "",
        aboutHotel: "",
        roomsAndSuites: "",
        restaurantsAndBars: "",
        additionalInformation: "",
        spaAndWellness: "",
        otherFacilities: "",
        numberOfRooms: "",
        numberOfRestaurants: "",
        outdoorSwimmingPool: "",
        bars: "",
        amenitiesList: [],
        otherInformation1: "",
        otherInformation2: "",
        otherInformation3: "",
        otherInformation4: "",
    });

    const fetchAmenities = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allHotelAmenities}`, {
                headers: {
                    "Authorization": "Bearer " + token,
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

        let isValid = true;
        const newErrors = { ...validationErrors };

        if (!formData.hotelName) {
            newErrors.hotelName = "Hotel Name is required";
            isValid = false;
        } else {
            newErrors.hotelName = "";
        }

        if (!formData.hotelWebsite) {
            newErrors.hotelWebsite = "Hotel Website is required";
            isValid = false;
        } else {
            newErrors.hotelWebsite = "";
        }

        if (!formData.youtubeLink) {
            newErrors.youtubeLink = "Youtube Link is required";
            isValid = false;
        } else {
            newErrors.youtubeLink = "";
        }

        if (!formData.country) {
            newErrors.country = "Youtube Link is required";
            isValid = false;
        } else {
            newErrors.country = "";
        }

        if (!formData.location) {
            newErrors.location = "Youtube Link is required";
            isValid = false;
        } else {
            newErrors.location = "";
        }

        if (!formData.contactInformation) {
            newErrors.contactInformationcontactInformation = "Contact Information is required";
            isValid = false;
        } else {
            newErrors.contactInformation = "";
        }

        if (!formData.aboutHotel) {
            newErrors.aboutHotel = "aboutHotel is required";
            isValid = false;
        } else {
            newErrors.aboutHotel = "";
        }

        if (!formData.roomsAndSuites) {
            newErrors.roomsAndSuites = "roomsAndSuites is required";
            isValid = false;
        } else {
            newErrors.roomsAndSuites = "";
        }

        if (!formData.restaurantsAndBars) {
            newErrors.restaurantsAndBars = "restaurantsAndBars is required";
            isValid = false;
        } else {
            newErrors.restaurantsAndBars = "";
        }

        if (!formData.additionalInformation) {
            newErrors.additionalInformation = "additionalInformation is required";
            isValid = false;
        } else {
            newErrors.additionalInformation = "";
        }

        if (!formData.spaAndWellness) {
            newErrors.spaAndWellness = "spaAndWellness is required";
            isValid = false;
        } else {
            newErrors.spaAndWellness = "";
        }
        if (!formData.otherFacilities) {
            newErrors.otherFacilities = "otherFacilities is required";
            isValid = false;
        } else {
            newErrors.otherFacilities = "";
        }

        if (!formData.numberOfRooms) {
            newErrors.numberOfRooms = "numberOfRooms is required";
            isValid = false;
        } else {
            newErrors.numberOfRooms = "";
        }

        if (!formData.numberOfRestaurants) {
            newErrors.numberOfRestaurants = "number Of Restaurants is required";
            isValid = false;
        } else {
            newErrors.numberOfRestaurants = "";
        }

        if (!formData.outdoorSwimmingPool) {
            newErrors.outdoorSwimmingPool = "outdoor SwimmingPool is required";
            isValid = false;
        } else {
            newErrors.outdoorSwimmingPool = "";
        }

        if (!formData.bars) {
            newErrors.bars = "bars is required";
            isValid = false;
        } else {
            newErrors.bars = "";
        }

        if (!formData.amenitiesList) {
            newErrors.amenitiesList = "amenitiesList is required";
            isValid = false;
        } else {
            newErrors.amenitiesList = "";
        }

        if (!formData.otherInformation1) {
            newErrors.otherInformation1 = "Other Information is required";
            isValid = false;
        } else {
            newErrors.otherInformation1 = "";
        }

        if (!formData.otherInformation2) {
            newErrors.otherInformation2 = "Other Information is required";
            isValid = false;
        } else {
            newErrors.otherInformation2 = "";
        }

        if (!formData.otherInformation3) {
            newErrors.otherInformation3 = "Other Information is required";
            isValid = false;
        } else {
            newErrors.otherInformation3 = "";
        }

        if (!formData.otherInformation4) {
            newErrors.otherInformation4 = "Other Information is required";
            isValid = false;
        } else {
            newErrors.otherInformation4 = "";
        }
        setValidationErrors(newErrors);
        return isValid;


        // if(validationErrors){
        //     handleValidation()
        // }
        // else if (currentStep < 4) {
        setCurrentStep((prevStep) => prevStep + 1);
        const newProgress = ((currentStep + 1) / 4) * 100;
        setProgress(newProgress);
        //   }

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

    return (
        <>
            <div className="mb-3">
                {currentStep === 1 && <h4 className="stepform-heading">Hotel Details</h4>}
                {currentStep === 2 && <h4 className="stepform-heading">Hotel Contacts</h4>}
                {currentStep === 3 && <h4 className="stepform-heading">Special Offer</h4>}
                {currentStep === 4 && <h4 className="stepform-heading">Home Page Addon</h4>}

            </div>
            <ProgressBar now={progress} label={`${progress}%`} className="ProgressBar h-25 mb-3" />
            <Form>
                {currentStep === 1 && <div>
                    <Row className=" mb-3">

                        <Col lg={6}>
                            <Form.Label>  Hotel Name </Form.Label>
                            <Form.Control className="sidebar-input"
                                type="text"
                                id="hotelName"
                                name="hotelName"
                                placeholder="Hotel Name"
                                required
                                value={formData.hotelName}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.hotelName ? "red" : "" }}


                            />
                            {validationErrors.hotelName && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelName}
                                </div>
                            )}
                        </Col>


                        <Col lg={6}>
                            <Form.Label>  Hotel Website </Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                                onChange={handleInputChange} style={{ borderColor: validationErrors.hotelWebsite ? "red" : "" }}

                            />
                            {validationErrors.hotelWebsite && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelWebsite}
                                </div>
                            )}
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Youtube Link </Form.Label>
                            <Form.Control className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
                                onChange={handleInputChange} style={{ borderColor: validationErrors.youtubeLink ? "red" : "" }}
                            />
                            {validationErrors.youtubeLink && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.youtubeLink}
                                </div>
                            )}
                        </Col>

                        <Col lg={6}>
                            <Form.Label>Name Of Country</Form.Label>
                            <div className="select-option">
                                <select id="country"
                                    name="country" className="sidebar-input" value={formData.country}
                                    onChange={handleInputChange} style={{ borderColor: validationErrors.country ? "red" : "" }}>
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
                                //onChange={handleInputChange}
                                style={{ borderColor: validationErrors.location ? "red" : "" }}

                            />
                            {validationErrors.location && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.location}
                                </div>
                            )}
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
                                onChange={handleimageChange} style={{ borderColor: validationErrors.hotelImage ? "red" : "" }}
                            />
                            {validationErrors.hotelImage && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.hotelImage}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            
                            {/* <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" value={formData.aboutHotel}
                            onChange={handleInputChange} /> */}
                            <h5>About Hotel</h5>


                            <Editor
                                editorState={hotelEditorState}
                                onEditorStateChange={handleHotelEditorChange}
                                name="aboutHotel"
                                value={formData.aboutHotel}
                                style={{ borderColor: validationErrors.aboutHotel ? "red" : "" }}
                            />
                            {validationErrors.aboutHotel && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.aboutHotel}
                                </div>
                            )}
                        </Col>
                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" value={formData.roomsAndSuites}
                            onChange={handleInputChange} /> */}

                            <h5>Rooms And Suites</h5>


                            <Editor
                                editorState={roomsAndSuitesEditorState}
                                onEditorStateChange={handleroomsAndSuitesEditorState}
                                value={formData.roomsAndSuites}
                                style={{ borderColor: validationErrors.roomsAndSuites ? "red" : "" }}
                            />
                            {validationErrors.roomsAndSuites && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.roomsAndSuites}
                                </div>
                            )}
                        </Col>
                    </Row>

                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" value={formData.restaurantsAndBars}
                            onChange={handleInputChange} /> */}
                            <h5>Restaurents And Bars (Optional)</h5>
                            <Editor
                                editorState={restaurentsEditorState}
                                onEditorStateChange={handlerestaurentsEditorState}
                                value={formData.restaurantsAndBars}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.restaurantsAndBars ? "red" : "" }}
                            />
                            {validationErrors.restaurantsAndBars && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.restaurantsAndBars}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" value={formData.spaAndWellness}
                            onChange={handleInputChange} /> */}
                            <h5>Spa And Wellness (Optional)</h5>
                            <Editor
                                editorState={spaAndWellnessEditorState}
                                onEditorStateChange={handlespaAndWellnessEditorState}
                                value={formData.spaAndWellness}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.spaAndWellness ? "red" : "" }}
                            />
                            {validationErrors.spaAndWellness && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.spaAndWellness}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.otherFacilities}
                            onChange={handleInputChange} /> */}
                            <h5>Other Facilities (Optional)</h5>
                            <Editor
                                editorState={otherFacilitiesEditorState}
                                onEditorStateChange={handleOtherFacilitiesEditorChange}
                                value={formData.roomsAndSuites}
                                onChange={handleInputChange}
                                style={{ borderColor: validationErrors.roomsAndSuites ? "red" : "" }}
                            />
                            {validationErrors.roomsAndSuites && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.roomsAndSuites}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className=" mb-3">
                        <Col lg={12}>
                            {/* <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.additionalInformation}
                            onChange={handleInputChange} /> */}
                            
                            <h5>Additional information (Optional)</h5>
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
                            <input className="sidebar-input" type="number" id="numberOfRooms" name="numberOfRooms" placeholder="Number Of Rooms" value={formData.numberOfRooms} onChange={handleInputChange} style={{ borderColor: validationErrors.spaAndWellness ? "red" : "" }}
                            />
                            {validationErrors.numberOfRooms && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.numberOfRooms}
                                </div>
                            )}
                        </Col>

                        <Col lg={3} md={4}>
                            <input className="sidebar-input" type="number" id="numberOfRestaurants" name="numberOfRestaurants" placeholder="Number Of Restaurants" value={formData.numberOfRestaurants} onChange={handleInputChange}
                                style={{ borderColor: validationErrors.numberOfRestaurants ? "red" : "" }}
                            />
                            {validationErrors.numberOfRestaurants && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.numberOfRestaurants}
                                </div>
                            )}
                        </Col>
                        <Col lg={3} md={4}>
                            <input className="sidebar-input" type="number" id="outdoorSwimmingPool" name="outdoorSwimmingPool" placeholder="Swimming Pool" value={formData.outdoorSwimmingPool} onChange={handleInputChange} style={{ borderColor: validationErrors.spaAndWellness ? "red" : "" }}
                            />
                            {validationErrors.outdoorSwimmingPool && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.outdoorSwimmingPool}
                                </div>
                            )}

                        </Col>

                        <Col lg={3} md={4}>
                            <input className="sidebar-input" type="number" id="bars" name="bars" placeholder="Bars" value={formData.bars} onChange={handleInputChange} style={{ borderColor: validationErrors.spaAndWellness ? "red" : "" }}
                            />
                            {validationErrors.bars && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.bars}
                                </div>
                            )}
                        </Col>
                        <Col lg={3} md={4}>
                            <input className="sidebar-input" type="number" id="meetingrooms" name="bars" placeholder="Meeting Rooms" value={formData.amenitiesList} onChange={handleInputChange} style={{ borderColor: validationErrors.amenitiesList ? "red" : "" }}
                            />
                            {validationErrors.amenitiesList && (
                                <div style={{ color: "red", textAlign: "left" }}>
                                    {validationErrors.amenitiesList}
                                </div>
                            )}
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Room service</label>
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Room service</label>
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Breakfast</label>
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>WIFI</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Fitness center</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Concierge service</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Sport Classes</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Spa</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Toiletries</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Kids Club</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Spa</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Additional Classes</label>
                            </Form.Group>
                        </Col>

                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Hair Dryer</label>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={4} className="mb-3">
                            <Form.Group className='d-flex' >
                                <Form.Check
                                    type="checkbox"

                                    className=' me-3'

                                />
                                <label>Parking</label>
                            </Form.Group>
                        </Col>
                    </Row>




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
                            <input className="sidebar-input" type="text" id="otherInformation3" name="otherInformation3" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation3}
                                onChange={handleInputChange} />
                        </Col>
                        <Col lg={3}>
                            <input className="sidebar-input" type="text" id="otherInformation4" name="otherInformation4" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation4}
                                onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <div className="text-end">
                        <button onClick={nextStep} >
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
                                required
                            />
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
        </>

    );
};
export default AddHotel;