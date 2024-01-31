import { Editor } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col ,Form} from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import API from '../../../utils';
import axios from 'axios';

function EditHotelModal({ show, handleClose, hotel_id,handleHotelEditorChange, handleOfferEditorChange }){
    const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
    const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
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


  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

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
  
    
      const handleimageChange = (e) => {
        const file = e.target.files[0];
        console.log("Selected File:", file);
        setImage(file);
    
      };

   

      const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);



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

  const fetchAmenities = async () => {
    const token = localStorage.getItem("token");
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

const handleEditHotel = async (e) => {
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
  formDataObject.append('hotel_id', hotel_id);
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
          `${API.BASE_URL}${API.ENDPOINTS.upateHotels}`,
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

    return(
<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Hotel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <form id="addBlogForm" >
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
      
      </form> */}

<Form>

{step === 1 && <div>
    <Row className=" mb-3">

        <Col lg={6}>
            <input className="sidebar-input"
                type="text"
                id="hotelName"
                name="hotelName"
                placeholder="Hotel Name"
                required
                value={formData.hotelName}
                onChange={handleInputChange} />
        </Col>

        <Col lg={6}>
            <input className="sidebar-input" type="text" id="hotelWebsite" name="hotelWebsite" placeholder="Hotel Website" required value={formData.hotelWebsite}
                onChange={handleInputChange} />
        </Col>
        <Col lg={6}>
            <input className="sidebar-input" type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube Link" value={formData.youtubeLink}
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

        <Col lg={6}>
            <input className="sidebar-input" type="text" id="location" name="location" placeholder="Location" value={formData.location}
                onChange={handleInputChange} />
        </Col>
        <Col lg={6}>
            <input className="sidebar-input" type="text" id="contactInformation" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation}
                onChange={handleInputChange} />
        </Col>

    </Row>

    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="file" id="hotelImage" name="hotelImage" placeholder="Hotel Image" value={formData.hotelImage}
                onChange={handleimageChange} />
        </Col>
    </Row>
    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="text" id="aboutHotel" name="aboutHotel" placeholder="About Hotel" value={formData.aboutHotel}
                onChange={handleInputChange} />
        </Col>
    </Row>

    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="text" id="roomsAndSuites" name="roomsAndSuites" placeholder="Rooms And Suites" value={formData.roomsAndSuites}
                onChange={handleInputChange} />
        </Col>
    </Row>

    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="text" id="restaurantsAndBars " name="restaurantsAndBars" placeholder="Restaurents And Bars (Optional)" value={formData.restaurantsAndBars}
                onChange={handleInputChange} />
        </Col>
    </Row>
    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="text" id="spaAndWellness " name="spaAndWellness" placeholder="Spa And Wellness (Optional)" value={formData.spaAndWellness}
                onChange={handleInputChange} />
        </Col>
    </Row>
    <Row className=" mb-3">
        <Col lg={12}>
            <input className="sidebar-input" type="text" id="otherFacilities " name="otherFacilities" placeholder="Other Facilities (Optional)" value={formData.otherFacilities}
                onChange={handleInputChange} />
        </Col>
    </Row>
    <h5>Hotel Amenities</h5>
    <Row className="mb-3">
        <Col lg={6}>
            <input className="sidebar-input" type="number" id="numberOfRooms" name="numberOfRooms" placeholder="Number Of Rooms" value={formData.numberOfRooms} onChange={handleInputChange} />
        </Col>

        <Col lg={6}>
            <input className="sidebar-input" type="number" id="numberOfRestaurants" name="numberOfRestaurants" placeholder="Number Of Restaurants" value={formData.numberOfRestaurants} onChange={handleInputChange} />
        </Col>
    </Row>
    <Row className="mb-3">
        <Col lg={6}>
            <input className="sidebar-input" type="number" id="outdoorSwimmingPool" name="outdoorSwimmingPool" placeholder="Outdoor Swimming Pool" value={formData.outdoorSwimmingPool} onChange={handleInputChange} />
        </Col>

        <Col lg={6}>
            <input className="sidebar-input" type="number" id="bars" name="bars" placeholder="Bars" value={formData.bars} onChange={handleInputChange} />
        </Col>
    </Row>


    <Row className="mb-3">
        {formData.amenitiesList.map((amenity) => (
            <Col key={amenity.id} lg={3}>
                <Form.Group controlId={`checkboxGroup-${amenity.id}`} className='d-flex' >
                    <Form.Check
                        type="checkbox"
                        id={amenity.id}
                        name={amenity.title}
                        className=' me-3'
                        onChange={handleInputChange}
                        checked={formData[amenity.title]}
                        data-id={amenity.id}
                    />
                    <label htmlFor={`checkbox-${amenity.id}`}>{amenity.title}</label>
                </Form.Group>
            </Col>
        ))}
    </Row>
    <Row className="mb-3">
        <Col lg={6}>
            <input className="sidebar-input" type="text" id="otherInformation1" name="otherInformation1" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation1}
                onChange={handleInputChange} />
        </Col>
        <Col lg={6}>
            <input className="sidebar-input" type="text" id="otherInformation2" name="otherInformation2" placeholder="Other Information (40 Characters Maximum)" value={formData.otherInformation2}
                onChange={handleInputChange} />
        </Col>
    </Row>
    <div className="text-end">                <button onClick={nextStep} >
        next
    </button>
    </div>


</div>}
{step === 2 && <div>
    <Row className="mb-3">
        <h4>Contact 1 </h4>
        <Col lg={4}>
            <input
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
            <input className="sidebar-input"
                type="email"
                id="email"
                name="email"
                placeholder=" Email"
                value={formData.contact1.email}
                onChange={(e) => handleChange("contact1", "email", e.target.value)}
                required />
        </Col>
        <Col lg={4}>
            <input className="sidebar-input"
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
        <h4>Contact 2 </h4>
        <Col lg={4}>
            <input className="sidebar-input"
                type="text"
                id="name"
                name="name"
                placeholder=" Name"
                value={formData.contact2.name}
                onChange={(e) => handleChange("contact2", "name", e.target.value)} />
        </Col>
        <Col lg={4}>
            <input type="email"
                id="email"
                name="email"
                placeholder=" Email"
                value={formData.contact2.email}
                onChange={(e) => handleChange("contact2", "email", e.target.value)} />
        </Col>
        <Col lg={4}>
            <input type="text"
                id="contactInformation"
                name="contactInformation"
                placeholder="Contact Information"
                value={formData.contact2.contactInformation}
                onChange={(e) => handleChange("contact2", "contactInformation", e.target.value)}
            />
        </Col>
    </Row>

    <Row className="mb-3">
        <h4 className="third-child">Contact 3 </h4>
        <Col lg={4}>
            <input className="sidebar-input"
                type="text"
                id="name"
                name="name"
                placeholder=" Name"
                value={formData.contact3.name}
                onChange={(e) => handleChange("contact3", "name", e.target.value)} />
        </Col>
        <Col lg={4}>
            <input type="email"
                id="email"
                name="email"
                placeholder=" Email"
                value={formData.contact3.email}
                onChange={(e) => handleChange("contact3", "email", e.target.value)} />
        </Col>
        <Col lg={4}>
            <input type="text"
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
{step === 3 && <div>
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
            <textarea className="sidebar-input" rows={4} placeholder="Description" name="description" value={formData.description}
                onChange={handleInputChange} required />
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
{step === 4 && <div>
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
        {/* <button>
            Submit
        </button> */}
    </div>
</div>}

</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button  onClick={handleEditHotel}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    );
}
export default EditHotelModal;