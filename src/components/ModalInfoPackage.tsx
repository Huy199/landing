import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "antd";
import BaseButton from "./BaseButton";
import "@/assets/scss/modalInforPackage.scss";
import { ModalPackageInfo } from "@/constants";

interface ModalInfoPackageProps {
    isModalInfo: ModalPackageInfo;
    setIsModalInfo: Dispatch<SetStateAction<ModalPackageInfo>>;
}

const ModalInfoPackage = ({ isModalInfo, setIsModalInfo }: ModalInfoPackageProps) => {
    const handleClickButton = () => {
        setIsModalInfo({
            status: false,
        });
    };
    const handleClickButtonSubmit = () => {};

    return (
        <>
            <Modal
                className="modal-infor-package"
                open={isModalInfo?.status}
                closeIcon={false}
                footer={null}
            >
                <p className="header text-center text-2xl text-white font-bold font-arial leading-normal">{isModalInfo?.data?.name}</p>
                <div className="px-[40px]">
                   <div className="text-black font-arial font-bold text-2xl mt-8 leading-normal">{isModalInfo?.data?.name}</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">Data: {isModalInfo?.data?.data}mb</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">HSD: Data: {isModalInfo?.data?.usedTime} Ngày</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">Giá: Data: {isModalInfo?.data?.price} đ</div>
                   <ul className="list-disc pl-[25px]">
                        <li className="text-black font-arial font-normal text-base mt-4">{isModalInfo?.data?.description}</li>
                   </ul>
                </div>
                <div className="flex justify-between gap-7.5 pb-[40px] px-[40px] mt-[34px]">
                        <BaseButton
                            text="ĐÓNG"
                            close={true}
                            handleClickButton={handleClickButton}
                        />
                        <BaseButton
                            text="ĐĂNG KÝ"
                            close={false}
                            handleClickButton={handleClickButtonSubmit}
                        />
                </div>
            </Modal>
        </>
    );
};

export default ModalInfoPackage;
