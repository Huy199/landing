"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import Search from "@/assets/images/search.svg"
import Filter from "@/assets/images/filter.svg"
import { useState } from "react";
import ModalFilter from "./ModalFilter";

const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
     setIsModalOpen(true);
   };

   return (
      <>
      <header className="flex bg-header w-full max-sm:h-22 justify-between max-sm:pb-3.5" >
         <Image src={Logo} alt="logo" className="max-sm:mt-13 max-sm:ml-4 " />
         <div className="flex max-sm:mr-4 max-sm:mt-13">
            <Image src={Search} alt="logo-search" className="hover:cursor-pointer" />
            <Image src={Filter} alt="logo filter" className="max-sm:ml-4 hover:cursor-pointer"  onClick={showModal} />
         </div>
      </header>
      <ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </>
   ) 
};
export default Header;

