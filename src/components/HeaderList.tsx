"use client";

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
