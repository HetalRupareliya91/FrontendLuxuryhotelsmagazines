import React from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import Header from '../components/header';
import Footer from '../components/footer';

const PublishAnimatedBanner = () => {
    return (
        <>
            <Header />
            <section className="">
                <div className="form-container">
                    <div className="auth_container">

                        <div>
                            <h2>Publish Animated Banner</h2>

                            <Form>
                                <Row>
                                    <Col md={6} className="form-floating">
                                        <input type="text" className="" name="businessname" placeholder="Name Of Business" />
                                    </Col>
                                    <Col md={6} className="form-floating">
                                        <label for="Email"></label>
                                        <input type="email" className="" name="Email" placeholder="Your Email Address" />
                                    </Col>
                                    <Col md={6} className="form-floating">
                                        <input type="text" className="" name="websitelink" placeholder="Link Address For Business" />
                                    </Col>
                                    <Col md={6} className="form-floating">
                                        <input type="text" className="" name="bannertitle" placeholder="Title For The Banner" />
                                    </Col>
                                    <Col md={6}>
                                        <div className="duration_select select-option">
                                            <select className='select-id'>
                                                <option value="">Select Banner Category</option>
                                                <option value="1">Super Cars</option>
                                                <option value="2">Boutiques &amp; Jewellery</option>
                                                <option value="3">Spa &amp; Beauty</option>
                                                <option value="4">Hotels &amp; Resorts</option>
                                                <option value="7">Properties</option>
                                                <option value="8">Restaurants/Bars</option>
                                                <option value="10">Yachts &amp; Boats</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={6} className="form-floating">
                                            <input type="text" className="" name="youtubelink" placeholder="Youtube Video Link" />
                                    </Col>
                                    <Col md={6} className="form-floating">
                                            <input type="file" className="" name="image" />
                                            <span>Animated Banner Image (.gif)</span>
                                    </Col>
                                    <Col md={6}>
                                        <div className="duration_select select-option">
                                            <select className='select-id'>
                                                <option value="1">Display For 1 Month</option>
                                            </select>
                                        </div>
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
            <Footer />
        </>
    );
};

export default PublishAnimatedBanner;
