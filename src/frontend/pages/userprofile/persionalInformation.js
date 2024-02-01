import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";
import API from "../../../utils";
import axios from "axios";

function PersionalInformation(){

  const [apiData, setApiData] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const fetchUserData = async () => {

    const token = localStorage.getItem("token");
        try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.loginUserProfile}`,
      null,
       {
        headers: {
          "Authorization": "Bearer " + token,
        }
      }
      );
      const data = response.data;
      console.log("sfbfjbffb" ,data)
      if (data.status === true) {
        setApiData(data.profile_data          );
        setFormData({
          fullName: data.profile_data.name || "",
          email: data.profile_data.email || "",
          password: "*****", 
          confirmPassword: "******", 
        });
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  
  const handleSaveDetails = async () => {

    const token = localStorage.getItem("token");
      // e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append('name', formData.fullName);
    formDataObject.append('email', formData.email);
    formDataObject.append('password', formData.password);

    formDataObject.append('confirm_password', formData.confirmPassword);

    try {
      const response = await axios.post(`${API.BASE_URL}${API.ENDPOINTS.loginUserupdateProfile}`,
      formDataObject, {
        headers: {
          "Authorization": "Bearer " + token,
        }
      });
      const data = response.data;
      if (data.status === true) {
        // setApiData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
    return(
<>

<h4 className="mb-4">Personal information</h4>

                <Row >
                  <Col lg={8} className=" p-0 mt-3">
                    <Card className="card">
                      <CardBody className=" card-body-div">
                        <Row className=" mb-3">
                          <Col sm={3} >
                            <h6 className="mb-0">Full Name</h6>
                          </Col>
                          <Col className="col-sm-9 text-secondary">
                            <input type="text" className="sidebar-input"
                            name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange} />
                          </Col>
                        </Row>
                        <div className="row mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Email</h6>
                          </Col>
                          <Col sm={9} className="text-secondary">
                            <input type="text" className="sidebar-input" name="email" value={formData.email}
                      onChange={handleInputChange}  />
                          </Col>
                        </div>
                        <Row className=" mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Password</h6>
                          </Col>
                          <Col sm={9} className="text-secondary">
                            <input type="password" className="sidebar-input" name="password" value={formData.password}
                      onChange={handleInputChange}  />
                          </Col>
                        </Row>
                        <Row className=" mb-3">
                          <Col sm={3}>
                            <h6 className="mb-0">Confirm Password</h6>
                          </Col>
                          <Col sm={9} className=" text-secondary">
                            <input type="password" className="sidebar-input" name="confirmPassword" value={formData.confirmPassword}
                      onChange={handleInputChange}  />
                          </Col>
                        </Row>
                        <div className="mt-3 text-center "><button className="btn btn-block btn-default w-25 " onClick={handleSaveDetails}>Save Details</button></div>

                      </CardBody>
                    </Card>

                  </Col>
                  <Col lg={4} className="p-0 mt-3">
                    <div className="card ">
                      <div className="card-body current-subscription">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Current Subcription :</h6>
                            <b><span className="">Basic</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Amount:</h6>
                            <b><span className=""><FaDollarSign className='m-0'/>199</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Expiry Date :</h6>
                            <b><span className="">31/12/2024</span></b>
                          </li>


                        </ul>

                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Subcription Name:</h6>
                            <b><span className="text-dark"><i className="fa fa-eur" aria-hidden="true"></i>Premium</span></b>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap px-2">
                            <h6 className="m-0">Amount :</h6>
                            <b><span className="text-dark"><i className="fa fa-eur" aria-hidden="true"></i>399</span></b>
                          </li>
                         
                        </ul>

                      </div>
                    </div>
                    <div className='text-center'>
                      <div className="mt-3"><a className="btn btn-block btn-default w-50 " href="/subscription">View All</a></div>
                    </div>
                  </Col>
                </Row></>
    );
}
export default PersionalInformation;