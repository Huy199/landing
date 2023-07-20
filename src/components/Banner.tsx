"use client";

import Image from "next/image";
import Slider from "@/assets/images/banner.svg"
import BgBottom from "@/assets/images/bg1.svg"
import BgBottomText from "@/assets/images/bg2.svg"
import '@/assets/scss/banner.scss'

const Banner = () => {
  
   return (
      <>
         <Image src={Slider} alt="logo" className="" />
         <div  className="bg-bottom">
            <Image src={BgBottom} alt="logo"  className="bg-white"/>
            <Image src={BgBottomText} alt="logo" className="bg-text"/>
         </div>
      </>
   ) 
};
export default Banner;

