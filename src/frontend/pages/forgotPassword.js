import React, { useState, useRef, useEffect } from "react";
import Header from "../components/header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import bg2 from "../../assets/img/magazines/bg4.jpg";
import { Parallax } from "react-parallax";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/footer";
import axios from "axios";
import API from "../../utils";


function ForgotPassword() {

  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [userId, setUserId] = useState(null);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async () => {

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    try {
      const formDataObject = new FormData();
      formDataObject.append('email', email);
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.forgetPassword}`,
        formDataObject,
        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          },
        }
      );
      console.log(response.data)
      // Check the response from the API
      if (response.data.status == true) {
        // API call successful, move to the next step
        setShowEmailForm(false);
        setShowOTPForm(true);
        setUserId(response.data.data.id);
      } else {
        // Handle API error, show an error message, etc.
        console.error("API call failed:", response.data.message);
      }
    } catch (error) {
      // Handle axios error (e.g., network error)
      console.error("Error:", error.message);
    }
  };


  const handleOTPSubmit = async () => {

    const isOtpValid = otpInputs.every((value) => /^\d+$/.test(value) && value.length === 1);

    if (!isOtpValid) {
      setOtpError("Invalid OTP format");
      return;
    }
    try {

      const formDataObject = new FormData();
      formDataObject.append('user_id', userId);
      formDataObject.append('new_otp', otpInputs.join(""));
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.varifyOtp}`,
        formDataObject,

        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          },
        }
      );

      if (response.data.status === true) {
        setShowOTPForm(false);
        setShowPasswordForm(true);
      } else {
        console.error("API call failed:", response.data.message);
      }
    } catch (error) {
      // Handle axios error (e.g., network error)
      console.error("Error:", error.message);
    }
  };


  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    // Move focus to the next input field
    if (index < 5 && value !== "") {
      otpRefs.current[index + 1].current.focus();
    }
  };
  const handlePasswordSubmit = async () => {
    
    try {
      // Create a FormData object to send data to the server
      const formDataObject = new FormData();
      formDataObject.append('user_id', userId);
      formDataObject.append('password', password);
      formDataObject.append('confirm_password', confirmPassword);
  
      // Send a POST request to the API endpoint for resetting the password
      const response = await axios.post(
        `${API.BASE_URL}${API.ENDPOINTS.resendPassword}`,
        formDataObject,
        {
          headers: {
            Authorization: "hXuRUGsEGuhGf6KM",
          },
        }
      );
  
      // Check if the password reset was successful
      if (response.data.status === true) {
        // Password reset successful, you may redirect the user or show a success message
        console.log("Password reset successful");
      } else {
        // Handle API error, show an error message, etc.
        console.error("Password reset failed:", response.data.message);
      }
    } catch (error) {
      // Handle axios error (e.g., network error)
      console.error("Error:", error.message);
    }
  };
  

  useEffect(() => {
    // Focus on the first OTP input field when the OTP form is shown
    if (showOTPForm) {
      otpRefs.current[0].current.focus();
    }
  }, [showOTPForm]);

  return (
    <>
      <Header />

      <Parallax blur={0} bgImage={bg2} bgImageAlt="the cat" strength={300}>
        <section className="forgot-password-section spad">
          <Container>
            <Row>
              <Col lg={3}></Col>
              <Col lg={6}>
                {showEmailForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Reset Password</h1>
                    </div>
                    <Form.Label >Enter Your Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      className="forgot-input-feild mt-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="error-message">{emailError}</p>}
                    <div className="d-flex justify-content-around mt-3 ">
                      <div className="">
                        <p className="mt-4">
                          <FaAngleRight className="m-0" /> <a>Back To Login</a>
                        </p>
                      </div>
                      <div className=" mt-3">
                        <Button className="" onClick={handleEmailSubmit}>
                          Submit Email
                        </Button>
                      </div>

                    </div>
                  </Form>
                )}

                {showOTPForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Enter OTP</h1>
                    </div>
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
                           {otpError && <p className="error-message">{otpError}</p>}
                        </Col>
                      ))}
                    </Row>
                    <div className="d-flex justify-content-around mt-3 ">
                      <div className="">
                        <p className="mt-4">
                          <FaAngleRight className="m-0" /> <a>Back To Login</a>
                        </p>
                      </div>
                      <div className=" mt-3">
                        <Button className="" onClick={handleOTPSubmit}>
                          Submit OTP
                        </Button>
                      </div>

                    </div>
                  </Form>
                )}

                {showPasswordForm && (
                  <Form>
                    <div className="text-center mb-4">
                      <h1>Create Password</h1>
                    </div>
                    <Form.Group controlId="password">
                      <Form.Label className="mb-2">Password</Form.Label>
                      <Form.Control
                        type="password"
                        className="forgot-input-feild"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword" className="mt-4">
                      <Form.Label className="mb-2">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-around mt-3 ">
                      <div className="">
                        <p className="mt-4">
                          <FaAngleRight className="m-0" /> <a>Back To Login</a>
                        </p>
                      </div>
                      <div className=" mt-3">
                        <Button className="" onClick={handlePasswordSubmit}>
                          Reset Password
                        </Button>
                      </div>

                    </div>
                  </Form>
                )}
              </Col>

              <Col lg={3}></Col>
            </Row>
          </Container>
        </section>
      </Parallax>

      <Footer />
    </>
  );
}

export default ForgotPassword;
