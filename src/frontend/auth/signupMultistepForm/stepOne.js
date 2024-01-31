import React, { useState } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../../../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StepOne({ onNext }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSignup = async () => {
    
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
  
           if (response.status === 200) {
              navigate("/home");
              console.log("signup successful:");
           } else {
              console.error("signup failed:");
           }
        } catch (error) {
           console.error("Error:", error.message);
        }
     };
      
    return(
        <>
        <Form method="POST">
        <Row className="row ">
            <div className=" col-lg-6 mt-3">
                <input type="text" className="" name="name" placeholder="Name"value={formData.name}
            onChange={handleInputChange} />
            </div>
            <div className="col-lg-6 mt-3">
                <input type="email" className="" id="password" name="email" placeholder="Email "  value={formData.email}
            onChange={handleInputChange} />
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
</Col>
<Col md={6} className="mt-3">
    <input
        type="password"
        className=""
        id="confirmPassword"
        name="confirmPassword"  
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
    />
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
                           <div className="float-end">
                           <button type="submit"  onSubmit={handleSignup}>Signup</button>

      </div>
      </Form>
    </>
    );
}
export default StepOne;