"use client";

import Image from "next/image";
import SliderBig from "@/assets/images/bannerBig.svg";
import BgBottomWhiteBig from "@/assets/images/bgwhitebig.svg";
import "@/assets/scss/banner.scss";
import { Carousel } from "antd";

const Banner = () => (
    <div className="banner relative">
        <Carousel autoplay>
            <div className="bg1">
                <Image src={SliderBig} alt="logo" className="bg-white w-full" />
            </div>
            <div className="bg2">
                <Image src={SliderBig} alt="logo" className="bg-white w-full" />
            </div>
            <div className="bg2">
                <Image src={SliderBig} alt="logo" className="bg-white w-full" />
            </div>
        </Carousel>
        <div className="banner-bottom">
            <Image src={BgBottomWhiteBig} alt="logo" className="banner-bottom-white w-full" />
            <div className="banner-bottom-text w-full">
                <div className="banner-text" />
            </div>
        </div>
    </div>
);
export default Banner;
