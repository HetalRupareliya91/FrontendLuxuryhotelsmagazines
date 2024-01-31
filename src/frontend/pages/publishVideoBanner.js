import React from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const PublishVideoBanner = () => {
    return (
        <>
        <Header/>
            <section className="">
                <div className="form-container">
                    <div className="auth_container">

                        <div>
                            <h2>Publish Video Banner</h2>

                            <Form>
                            <Row>
                                <Col md={6}>
                                <div className="form-floating">
                                    <input type="text" className="" name="businessname" placeholder="Name Of Business" />
                                </div>
                                </Col>
                                <Col md={6}>                               
                                <div className="form-floating">
                                    <label for="Email"></label>
                                    <input type="email" className="" name="Email" placeholder="Your Email Address" />
                                </div>
                                </Col>
                                <Col md={6}>     
                                <div className="form-floating">
                                    <input type="text" className="" name="websitelink" placeholder="Link Address For Business" />
                                </div>
                                </Col>
                                <Col md={6}>     
                                <div className="form-floating">
                                    <input type="text" className="" name="bannertitle" placeholder="Title For The Banner" />
                                </div>
                                </Col>
                                <Col md={6}>     
                                <div className="form-floating">
                                    <input type="file" className="" name="image" />
                                </div>
                                </Col>
                                <Col md={6}>     
                                <div className="form-floating">
                                    <input type="text" className="" name="youtubelink" placeholder="Youtube Video Link" />
                                </div>
                                </Col>
                                <Col md={6}>     
                                <div className="duration_select select-option">
                                    <select className='select-id'>
                                        <option value="1">DIsplay For 1 Month</option>
                                    </select>
                                </div>
                                </Col>
                                 <Col md={6}>     
                                
                                </Col>
                                <Col md={6} className="form-floating py-5">     
                                <button type="submit" name="" className="w-50 auth_btn">Submit</button>
                                </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default PublishVideoBanner;
