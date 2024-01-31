import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaBell, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function ConnectWithUS() {
    return (
        <>
            <Form className="connect-with-us">
                <div><h3>Connect With Us </h3></div>
                <div className="fa-social">
                    <div>
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank" className="fa-link">
                            <FaFacebook />
                        </a>
                        <a href="https://www.facebook.com/LuxuryHotelsMagazines" target="_blank">@LuxuryHotelsMagazines </a>
                        </div>
                    <div>
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank" className="fa-link">
                            <FaEnvelope /></a>
                        <a href="mailto:info@luxuryhotelsmagazines.com" target="_blank"> info@luxuryhotelsmagazines.com</a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank" className="fa-link">
                            <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/luxuryhotelsbrand/" target="_blank">@LuxuryHotelsBrand</a>
                    </div>
                    <div>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank" className="fa-link">
                            <FaYoutube />
                        </a>
                        <a href='https://www.youtube.com/channel/UCxV4ClKpFA95eU-4c8sN3Tg' target="_blank">Youtube</a></div>
                </div>
                <hr></hr>
                <div className="fa-social">
                    <div>
                        <a href='subscribe-to-news' target="_blank" className="fa-link">
                            <FaBell />
                        </a>
                        <a href='subscribe-to-news'>Subscribe To Receive News
                        </a>
                    </div>
                    <div>
                        <a href='subcribe-digital-copy' target="_blank" className="fa-link">
                            <FaBell />
                        </a>
                        <a href='subcribe-digital-copy'>Subscribe To Digital Copy
                        </a>
                    </div>
                    <div>
                        <a href='subcribe-print-copy' target="_blank" className="fa-link">
                            <FaBell />
                        </a>
                        <a href='subcribe-print-copy'>Subscribe To Printed Copy
                        </a>
                    </div>


                </div>
            </Form>
        </>
    );
}
export default ConnectWithUS;