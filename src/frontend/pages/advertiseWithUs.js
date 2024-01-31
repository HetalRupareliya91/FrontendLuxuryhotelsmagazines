import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import Advertise from "../components/advertiseWithus/advertise";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import AdvertiseWhatWeDo from "../components/advertiseWithus/advertiseWhatWeDo";
import AdvertiseTop from "../components/advertiseWithus/advertiseTop";
import ClientLogo from "../components/clientLogo";
import OurStory from "../components/advertiseWithus/ourStory";
import NewFor from "../components/advertiseWithus/newFor2022";
import Tabs from "../components/tabs";
import AdvertiseWhatWeDosection from "../components/advertiseWithus/advWhatWeDo";
function AdvertiseWithUs() {

    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }


    return (
        <>
            <Header></Header>
            <AdvertiseTop/>
            {/* <Advertise /> */}

            <OurStory/>
            <ClientLogo/>
            <NewFor/>
            <Tabs/>
            <AdvertiseWhatWeDosection/>
             {/* <Advertise /> */}
            <Advertise />
            {/* <AdvertiseTestimonial/> */}
            <AdvertiseWhatWeDo />
            <CallToAction />
            <Footer />
        </>

    );
}
export default AdvertiseWithUs;