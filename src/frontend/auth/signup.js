import React, { useState, useRef } from "react";
import Hotel from "../../assets/img/hotel1.jpg";
import { Col, Container, Image, Row, Form, ProgressBar } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaAddressBook, FaChild, FaDatabase, FaEuroSign, FaFacebookSquare, FaGlobe, FaInternetExplorer, FaNewspaper, FaRecycle, FaRedoAlt, FaTrophy, FaWpexplorer } from "react-icons/fa";
import MultiStep from "react-multistep";
import StepOne from "./signupMultistepForm/stepOne";
import StepTwo from "./signupMultistepForm/stepTwo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../../utils";

function Signup() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
    const otpRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
    const nextStep = (e) => {
        if (e) e.preventDefault(); 
        setStep(step + 1);
        updateProgress(); 
    };


    const handleOtpInputChange = (index, value) => {
        const newOtpInputs = [...otpInputs];
        newOtpInputs[index] = value;
        setOtpInputs(newOtpInputs);
    
        
        if (index < 5 && value !== "") {
          otpRefs.current[index + 1].current.focus();
        }
      };
    const prevStep = (e) => {
        if (e) e.preventDefault();
        setStep(step - 1);
        updateProgress(); 
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        if (e) e.preventDefault();

        try {
            const response = await axios.post(
                `${API.BASE_URL}${API.ENDPOINTS.signup}`,
                JSON.stringify(formData),
                {
                    headers: {
                        Authorization: "hXuRUGsEGuhGf6KM",
                    },
                }
            );

            if (response.data.status === true) {
                console.log("signup successful:");
            } else {
                console.error("signup failed:");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...validationErrors };

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        // Validate Password
        if (formData.password.length < 6) {
            newErrors.password = "Password do not match";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        // Validate Confirm Password
        if (formData.confirm_password !== formData.password) {
            newErrors.confirm_password = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirm_password = "";
        }

        setValidationErrors(newErrors);
        return isValid;
    };

    const handleSignupClick = (e) => {
        if (e) e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            handleSignup();
            nextStep();
        }
    };

    const updateProgress = () => {
        const totalSteps = 3; // Assuming there are two steps in the form
        const newProgress = (step / totalSteps) * 100;
        setProgress(newProgress);
    };
    return (
        <>
            <Header />
            <Container className="container py-5">
                <Row>
                    <Col lg={12}>
                        <h2> List Your Luxury Hotel On</h2>
                        <h2> LuxuryHotelsMagazines.com & receive direct commission-free bookings </h2>
                        <p className="text-center py-1">
                            Swift 4-step process in under 5 minutes, with instant visibility and exclusive promotion of your Hotel to our over 1 million high-end subscribers
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="image-container">
                            <Image src={Hotel} alt="Login Image" />
                        </div></Col>
                    <Col lg={6}>  <div className="">

                        <div id="Log_in">
                            {/* <h2>Signup</h2> */}
                            <form
                                className={`user_login authsection active step-${step}`}
                                id="userlogin"
                            >
                                {step === 1 &&
                                    <>
                                        <Form method="POST">
                                            <Row className="row ">
                                                <div className=" col-lg-6 mt-3">
                                                    <input type="text" className="" name="name" placeholder="Name" value={formData.name}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.name ? "red" : "" }} />
                                                    {validationErrors.name && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.name}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-lg-6 mt-3">
                                                    <input type="email" className="" id="email" name="email" placeholder="Email " value={formData.email}
                                                        onChange={handleInputChange} style={{ borderColor: validationErrors.email ? "red" : "" }} />
                                                    {validationErrors.email && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </Row>

                                            <Row >
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.password}
                                                        </div>
                                                    )}
                                                </Col>
                                                <Col md={6} className="mt-3">
                                                    <input
                                                        type="password"
                                                        className=""
                                                        id="confirm_password"
                                                        name="confirm_password"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirm_password}
                                                        onChange={handleInputChange}
                                                    />
                                                    {validationErrors.confirm_password && (
                                                        <div style={{ color: "red", textAlign: "left" }}>
                                                            {validationErrors.confirm_password}
                                                        </div>
                                                    )}
                                                </Col>
                                            </Row>
                                            <Row className="re-captcha mt-3 ">
                                                <Col lg={12}>
                                                    <ReCAPTCHA
                                                        sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                                                    //   onChange={handleVerification}
                                                    />
                                                </Col>
                                            </Row>


                                            <div className="footer_line mt-3">
                                                <h6>Already have an account? <a className="page_move_btn" href="/login">Login</a></h6>
                                            </div>
                                            <div className="float-center">

                                            <button onClick={(e) =>handleSignupClick(e)} >
                                        Signup
                                    </button>
                                            </div>
                                        </Form>
                                    </>}
                                {step === 2 &&
                                    <Form>
                                    <div className="text-center mb-4">
                                      <h1>Enter OTP</h1>
                                    </div>
                                    {/* Display all 6 input fields for OTP in a single row */}
                                    <Row className="">
                                      {otpInputs.map((value, index) => (
                                        <Col key={index} xs={2}>
                                          <Form.Control
                                            ref={otpRefs.current[index]}
                                            type="text"
                                          className="otp-feild"
                                            value={value}
                                            onChange={(e) =>
                                              handleOtpInputChange(index, e.target.value)
                                            }
                                          />
                                        </Col>
                                      ))}
                                    </Row>
                                    {/* <div className="d-flex justify-content-around mt-3 ">
                                    <div className="">
                                      <p className="mt-4">
                                        <FaAngleRight className="m-0"/> <a>Back To Login</a>
                                      </p>
                                    </div>
                                    <div className=" mt-3">
                                      <Button className="" onClick={handleOTPSubmit}>
                                        Submit OTP
                                      </Button>
                                    </div>
                                    
                                    </div> */}
                                  </Form>
                                    }


{step === 3 &&
                                    <div className=" justify-content-between mt-4 ">
                                     
                                        <Row >
                                            <Col lg={6} md={6} sm={6}>
                                                <div className="pricingTable m-0">
                                                    <div className="pricingTable-header">
                                                        <span className="heading">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="pricing-plans">
                                                        <span className="price-value"><i className="fa fa-eur" aria-hidden="true"><FaEuroSign /></i><span>199</span></span>
                                                        <span className="subtitle"><b>Duration : 12 Months</b></span>
                                                        <h4>Package : Hotel Profile</h4>
                                                    </div>
                                                    <div className="pricingContent">

                                                    </div>

                                                    <div className="pricingTable-sign-up">
                                                        <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={6} md={6} sm={6}>
                                                <div className="pricingTable m-0">
                                                    <div className="pricingTable-header">
                                                        <span className="heading">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div className="pricing-plans">
                                                        <span className="price-value"><i aria-hidden="true"><FaEuroSign /></i><span>399</span></span>
                                                        <span className="subtitle"><b>Duration : 12 Months</b></span>
                                                        <h4>Package : Hotel Profile</h4>
                                                    </div>
                                                    <div className="pricingContent">

                                                    </div>

                                                    <div className="pricingTable-sign-up">
                                                        <a href="#" className="btn btn-block btn-default">Pay With Card <i aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </Col>


                                        </Row>
                                        <Row className="mt-3">
                                            <Col lg={6}></Col>
                                            <Col lg={6} className="d-flex">

                                            </Col>
                                        </Row>


                                    </div>
                                    }

                                {step > 1 && (
                                    <>
                                        <div className="float-end">
                                            <button onClick={(e) => prevStep(e)} >
                                                Previous
                                            </button>
                                            <button onClick={(e) => nextStep(e)} >
                                                Submit
                                            </button>
                                        </div>
                                    </>
                                )}
                                {/* {step < 2 && (
                            
                                )} */}

                            </form>


                        </div>


                    </div></Col>
                </Row>
            </Container>
            <section className="signup_numbers">
                <Container>
                    <h2 className="pt30"> LuxuryHotelsMagazines.com in numbers</h2>
                    <Row className="py-5">
                        <Col lg={3}>
                            <div>
                                <h1>
                                    550K+
                                </h1>
                                <p>
                                    Explore over 570,000 luxury hotel listings worldwide, with 50 new additions every day
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h1>
                                    89+
                                </h1>
                                <p>
                                    We proudly serve 89 countries worldwide, and our presence continues to grow every day
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h1>
                                    13M+
                                </h1>
                                <p>
                                    Monthly users will see your Hotel Profile on our 13 Social Networks, ensuring unparalleled exposure and visibility for your Hotel
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h1>
                                    1M+
                                </h1>
                                <p>
                                    We will promote your hotel to our over 1 Million subscribers, allowing them to book directly without your hotel paying any commissions to us
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="signup_benefits spad">
                <Container>
                    <h2> Benefits of working with us</h2>
                    <Row className="pt30">
                    <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaRedoAlt className="benefits-icon" />
                                <h4>
                                    Each Edition Rotation Program
                                </h4>
                                <p>
                                    Your hotel will be one of the top 40 most luxurious hotels which will guarantee the flow of bookings and occupancy ranging from 800,000 to 1 million tourists annually.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaRecycle className="benefits-icon" />
                                <h4>
                                    Zero commission charges
                                </h4>
                                <p>
                                    The hotel receives the full amount from all bookings made.
                                </p>
                            </div>
                        </Col>
                            <Col lg={4} className="mb-5">
                                <div className="benefits-block">
                                    <FaGlobe className="benefits-icon" />
                                    <h4>
                                        Global exposure
                                    </h4>
                                    <p>
                                        Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} className="mb-5">
                                <div className="benefits-block">
                                    <FaChild className="benefits-icon" />
                                    <h4>
                                        Global Reach
                                    </h4>
                                    <p>
                                        Published & Promoted in 89 countries, integrating online (70%) and print (30%) components.
                                    </p>
                                </div>
                            </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaInternetExplorer className="benefits-icon" />
                                <h4>
                                    Extensive Digital Presence
                                </h4>
                                <p>
                                    Our magazines are available as free downloads on 5 independent digital platforms, attracting 4-5 million readers per edition.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaFacebookSquare className="benefits-icon" />
                                <h4>
                                    Social Media Engagement
                                </h4>
                                <p>
                                    We actively promote all of our hotels on 13 social networks, engaging with 13 million monthly users.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaNewspaper className="benefits-icon" />
                                <h4>
                                    Flexibility to add Exclusive Offers
                                </h4>
                                <p>
                                    Could be published & changed any time during the year.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaAddressBook className="benefits-icon" />
                                <h4>
                                    Effortless Bookings
                                </h4>
                                <p>
                                    Every hotel ad in the printed version is accompanied by QR codes with direct access to your website for easy bookings.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaDatabase className="benefits-icon" />
                                <h4>
                                    Data Analysis
                                </h4>
                                <p>
                                    Demonstrate that this program has increased direct bookings for each hotel by an impressive 60%.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaTrophy className="benefits-icon" />
                                <h4>
                                    Recognition
                                </h4>
                                <p>
                                    Each hotel could be nominated by our readers as "The Best Luxury Hotel of the Year," and Hotel could have access to data on the voting clients.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaChild className="benefits-icon" />
                                <h4>
                                    Global Reach
                                </h4>
                                <p>
                                    Published & Promoted in 89 countries, integrating online (70%) and print (30%) components.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-5">
                            <div className="benefits-block">
                                <FaGlobe className="benefits-icon" />
                                <h4>
                                    Global exposure
                                </h4>
                                <p>
                                    Utilizing our AI technology, your hotel profile will be automatically shared with our extensive network of over 1 million subscribers.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>

    );
}
export default Signup;