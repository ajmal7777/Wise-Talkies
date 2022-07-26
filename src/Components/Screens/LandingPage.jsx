import React from "react";
import Spotlight from "./Spotlight";
import styled from "styled-components";
import Navbar from "./Navbar";
import ComingSoon from "./ComingSoon";
import Testimonial from "./Testimonial";
import FaQ from "./FaQ";
import Package from "./Package";
import Footer from "./Footer";
import Discover from "./Discover";
import CoverScreen from "./CoverScreen";
import Trending from "./Trending";

function LandingPage() {
    return (
        <>
            <Website>
                <Navbar />
                <Spotlight />
                <Discover />
                <CoverScreen />
                <Trending />
                <ComingSoon />
                <Package />
                <Testimonial />
                <FaQ />
                <Footer />
            </Website>
        </>
    );
}

export default LandingPage;

const Website = styled.div`
    background-color: #000;
    color: #fff;
`;
