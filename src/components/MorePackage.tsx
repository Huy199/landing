"use client";

import "@/assets/scss/morePackage.scss";
import MorePackageImage from "@/assets/images/morepackage.svg";
import Image from "next/image";
import BaseButton from "./BaseButton";
import { useRouter } from "next/navigation";

const MorePackage = () => {
    const router = useRouter();
    const handleMorePackage = () => {
        router.push("/home/datas");
    };
    return (
        <div className="more-package-container">
            <div className="more-package">
                <p className="title font-normal font-montserrat">
                    Nhiều gói cước hơn, nhiều sự lựa chọn hơn
                </p>
                <Image src={MorePackageImage} alt="logo" className="image-more" />
                <BaseButton
                    text="XEM THÊM GÓI"
                    close={false}
                    handleClickButton={handleMorePackage}
                />
            </div>
        </div>
    );
};
export default MorePackage;
