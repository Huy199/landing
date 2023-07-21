"use client";

import Image from "next/image";
import Slider from "@/assets/images/banner.svg"
import SliderBig from "@/assets/images/bannerBig.svg"
import BgBottomWhite from "@/assets/images/bg1.svg"
import BgBottomWhiteBig from "@/assets/images/bgwhitebig.svg"
import BgBottomText from "@/assets/images/bg2.svg"
import BgBottomTextBig from "@/assets/images/bg2Big.svg"
import '@/assets/scss/banner.scss'
import { Carousel } from "antd";
import { useState } from "react";

const Banner = () => {
   const [widthScreen, setWidthScreen] = useState(window.innerWidth);
   window.addEventListener("resize", () => {
      setWidthScreen(window.innerWidth);
   });
  
   return (
      <div className="banner">
           <Carousel autoplay>
            <div className="bg1">
            <Image src={widthScreen > 414 ? SliderBig :Slider} alt="logo"  className="bg-white"/>
            </div>
            <div>
            <Image src={widthScreen > 414 ? SliderBig :Slider} alt="logo"  className="bg-white"/>
            </div>
            <div>
            <Image src={widthScreen > 414 ? SliderBig :Slider} alt="logo"  className="bg-white"/>
            </div>
         </Carousel>
         <div  className="bg-bottom">
            <Image src={widthScreen > 414 ? BgBottomWhiteBig :BgBottomWhiteBig} alt="logo"  className="bg-white"/>
            <Image src={widthScreen > 1024 ? BgBottomTextBig : BgBottomText} alt="logo" className="bg-text"/>
         </div>
      </div>
   ) 
};
export default Banner;

