"use client";

import Image from "next/image";
import SliderBig from "@/assets/images/bannerBig.svg";
import BgBottomWhiteBig from "@/assets/images/bgwhitebig.svg";
// import BgBottomText from "@/assets/images/bg2.svg";
// import BgBottomTextBig from "@/assets/images/bg2Big.svg";
import "@/assets/scss/banner.scss";
import { Carousel } from "antd";

const Banner = () => (
    <div className="banner relative">
        <Carousel autoplay>
            {/* <div className="bg1">
                <Image src={"https://dev-api.mobifone.vn/images/functionpromote/1689818757374_image42.png"} alt="logo" className="bg-white w-full" />
            </div>
            <div className="bg2">
                <Image src={SliderBig} alt="logo" className="bg-white w-full" />
            </div> */}
            <div className="bg1">
                <img src={"https://dev-api.mobifone.vn/images/functionpromote/1689818757374_image42.png"} alt="logo" className="bg-white" />
            </div>
            <div className="bg1">
                <img src={"https://api.mobifone.vn/images/functionpromote/1678937199097_z4186001601245_6459e998bae8d6600a403db188654182.jpg"} alt="logo" className="bg-white" />
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
