import React, { useEffect, useState ,useRef} from "react";
import Footer from "../components/footer";
import { Col, Container, Form, Row ,Button} from "react-bootstrap";
import Header from "../components/header";
import axios from "axios";
import API, { isUserLoggedIn } from "../../utils";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function Login() {
  
   const navigate = useNavigate();
   const [userId, setUserId] = useState(null);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [userName, setUserName] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [userNameError, setUserNameError] = useState("");
   const [showEmailForm, setShowEmailForm] = useState(true);
   const [showOTPForm, setShowOTPForm] = useState(false);
   const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
   const [otpError, setOtpError] = useState("");
   const otpRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
   const handleOtpInputChange = (index, value) => {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);
  
      // Move focus to the next input field
      if (index < 5 && value !== "") {
        otpRefs.current[index + 1].current.focus();
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
                  

      //  setShowPasswordForm(true);
     } else {
       console.error("API call failed:", response.data.message);
     }
   } catch (error) {
     // Handle axios error (e.g., network error)
     console.error("Error:", error.message);
   }
 };

   const handleInputChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
         case "Username":
            setUserName(value);
            setUserNameError("");
            break;
         case "Email":
            setEmail(value);
            setEmailError("");
            break;
         case "Password":
            setPassword(value);
            setPasswordError("");
            break;
         default:
            break;
      }
   };

   const handleLogin = async (e) => {
      console.log("helloow")
      e.preventDefault();
      setEmailError("");
      setPasswordError("");

      // Validation
      let isValid = true;

      if (!email) {
         setEmailError("Email is required");
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         setEmailError("Invalid email format");
         isValid = false;
      }
    

      if (!password) {
         setPasswordError("Password is required");
         isValid = false;
      }

      if (!isValid) {
         return;
      }

      const userData = { email, password };

      try {
         const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.login}`,
            JSON.stringify(userData),
            {
               headers: {
                  Authorization: "hXuRUGsEGuhGf6KM",
               },
            }
         );

         if (response.data.status === true) {
            
            localStorage.setItem("token", response.data.token)
            localStorage.setItem('isLoggedIn', 'true');
            setShowEmailForm(false);
      //   setShowOTPForm(true);
      navigate("/userprofile");
      
            console.log(response.data.message);
         } else {
            console.error("Login failed:");
            const errorMessage = response.data.message || "Login failed. Please try again.";
         document.getElementById("loginErrorMessage").innerText = errorMessage;
         }
      } catch (error) {
         console.error("Error:", error.message);
      }
   };

   const isLoggedIn = localStorage.getItem('isLoggedIn');


   // useEffect(() => {
   //    // Focus on the first OTP input field when the OTP form is shown
   //    if (showOTPForm) {
   //      otpRefs.current[0].current.focus();
   //    }
   //  }, [showOTPForm]);
  

   useEffect(() => {
      if (isUserLoggedIn()) {
        navigate("/userprofile")
        return;
      }
    }, []);
   
   return (
      <>
         <Header />
         <Container>
            <Row >
               <Col lg={6} >
                  <div className="image-container" >
                     <h3 className="  text-white"> List
                        Your Luxury Hotel On
                        LuxuryHotelsMagazines.com & receive direct commission-free bookings
                     </h3>
                     <p className=" mt-3 text-white">Swift 4-step process in under 5 minutes, with instant visibility and exclusive promotion of your Hotel to our over 1 million high-end subscribers </p>

                  </div>
               </Col>
               <Col lg={6} >
                  <div className="form-container">
                     <div className="auth_container">

                        <div id="Log_in">
                           <h2>Log In</h2>
                           {/* {showEmailForm && ( */}
                           <Form className="user_login authsection active" id="userlogin" >
                             
                              <div className="form-floating">
                                 <label for="Email"></label>
                                 <input type="email" className="" name="Email" placeholder="Email " onChange={handleInputChange} style={{ borderColor: emailError ? "red" : "" }} />

                              </div>
                              {emailError && (
                                 <div style={{ color: "red", textAlign: "left" }}>
                                    {emailError}
                                 </div>
                              )}
                              <div className="form-floating">
                                 <input type="password" className="" name="Password" placeholder="Password " onChange={handleInputChange} style={{ borderColor: passwordError ? "red" : "" }} />

                              </div>
                              {passwordError && (
                                 <div style={{ color: "red", textAlign: "left" }}>
                                    {passwordError}
                                 </div>
                              )}
                              <div className="text-end mb-3">
                                 <a className="forgot-password" href="forgot-password">Forgot Password</a>
                              </div>
                              
                                                  <button type="submit" name="user_login_submit" className="auth_btn" onClick={handleLogin}>Log in</button>                          

                              

                              
                              {/* <button type="submit" name="user_login_submit" className="auth_btn" onClick={handleLogin}>Log in</button>                           */}
                                 
                             
                                 <div className="footer_line mt-3">
                              <h6 id="loginErrorMessage" style={{ color: "red" }}></h6>
                                 <h6>Don't have an account? <a className="page_move_btn" href="/signup"  >Sign up</a></h6>
                              </div>
                           </Form>
                            {/* )}  */}
                           

{/* {showOTPForm && (
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
                )}  */}
                        </div> 
                     </div>
                  </div>
               </Col>
            </Row>

         </Container>

         <Footer />
      </>
   );
}
export default Login;