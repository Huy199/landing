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

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearchMobile, setIsSearchMobile] = useState(2);
    const router = useRouter();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const openSearch = () => {
        setIsSearchMobile(1);
    };

    const closeSearch = () => {
        setIsSearchMobile(0);
    };
    return (
        <div className="header w-full">
            <header className="flex bg-header header-info gap-[129px]]">
                <div className="w-[1024px] flex justify-between mx-auto box-header">
                    <div className="logo-header" onClick={() =>  router.push("/home")}/>
                    <div className="flex right-header">
                        <Input
                            className="h-[40px] mt-[28px] input-search"
                            placeholder="Tìm gói..."
                        />
                        <Image
                            src={Search}
                            alt="logo-search"
                            className="icon-search"
                            onClick={openSearch}
                        />
                        <Image
                            src={Filter}
                            alt="logo filter"
                            className="max-sm:ml-4 hover:cursor-pointer icon-filter"
                            onClick={showModal}
                        />
                    </div>
                </div>
            </header>
            <ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div
                className={`search-mobile-container ${
                    isSearchMobile === 2 ? "" : isSearchMobile === 1 ? "mobile" : "close"
                }`}
            >
                <div className="search-mobile"></div>
                <Input
                    className="h-[40px] mt-[28px] input-search-mobile"
                    placeholder="Tìm gói..."
                />
                <Image src={Search} alt="logo-search" className="icon-search-mobile" />
                <Image
                    src={Close}
                    alt="logo close"
                    className="max-sm:ml-4 hover:cursor-pointer icon-close-mobile"
                    onClick={closeSearch}
                />
            </div>
        </div>
    );
};
export default Header;
