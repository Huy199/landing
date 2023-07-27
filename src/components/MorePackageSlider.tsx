"use client";

import "@/assets/scss/moreSlider.scss";
import MoreSlide from "@/assets/images/more.svg";
import Image from "next/image";
import { Carousel } from "antd";

const MoreSlider = () => (
    <div className="more-slider-container">
        <Carousel>
            <Image src={MoreSlide} alt="logo" className="slider1" />
            <Image src={MoreSlide} alt="logo" className="" />
        </Carousel>
    </div>
);
export default MoreSlider;
