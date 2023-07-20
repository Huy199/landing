"use client";

import Image from "next/image"
import Logo from "@/assets/images/logo.svg"
import LogoDeskTop from "@/assets/images/logo_desktop.svg"
import Search from "@/assets/images/search.svg"
import Filter from "@/assets/images/filter.svg"
import { useState } from "react"
import ModalFilter from "./ModalFilter"
import { Input } from "antd";
import '@/assets/scss/header.scss'

const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [widthScreen, setWidthScreen] = useState(window.innerWidth);
   console.log(widthScreen > 768 ? LogoDeskTop : Logo)
   window.addEventListener("resize", () => {
      setWidthScreen(window.innerWidth);
   });

   const showModal = () => {
     setIsModalOpen(true);
   };

   return (
      <div className="header w-full">
      <header className="flex bg-header  max-md:h-22 max-3xl:h-24 gap-[129px]]" >
         <div className="w-[1024px] flex justify-between mx-auto box-header">
         <Image src={widthScreen > 768 ? LogoDeskTop : Logo} alt="logo" className="max-md:mt-13"/>
         <div className="flex right-header">
            <Input className="h-[40px] mt-[28px] input-search" placeholder="Tìm gói..." />
            <Image src={Search} alt="logo-search" className="icon-search" />
            <Image src={Filter} alt="logo filter" className="max-sm:ml-4 hover:cursor-pointer icon-filter"  onClick={showModal} />
         </div>
         </div>
      </header>
      <ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>
   ) 
};
export default Header;

