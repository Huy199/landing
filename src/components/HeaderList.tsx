"use client";

import Image from "next/image";
import Close from "@/assets/images/close-circle.svg";
import Search from "@/assets/images/search.svg";
import Filter from "@/assets/images/filter.svg";
import { useState } from "react";
import ModalFilter from "./ModalFilter";
import { Input } from "antd";
import "@/assets/scss/header.scss";
import { useRouter } from "next/navigation";

const HeaderList = () => {
    const router = useRouter();
    return (
        <div className="header w-full">
            <header className="flex bg-header header-info gap-[129px]]">
                <div className="w-[1024px] flex justify-between mx-auto box-header">
                    <div className="logo-header" onClick={() =>  router.push("/home")}/>
                </div>
            </header>
            
        </div>
    );
};
export default HeaderList;
