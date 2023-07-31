import React, { Dispatch, SetStateAction, useState } from "react";
import { Divider, Modal } from "antd";
import BaseButton from "./BaseButton";
import "@/assets/scss/modalInforPackage.scss"
interface HeaderProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalInfoPackage = ({ isModalOpen, setIsModalOpen }: HeaderProps) => {
    console.log('123', isModalOpen)

    const handleClickButton = () => {
        setIsModalOpen(false);
    };
    const handleClickButtonSubmit = () => {};

    return (
        <>
            <Modal
                className="modal-infor-package"
                open={isModalOpen}
                closeIcon={false}
                footer={null}
            >
                <p className="header text-center text-2xl text-white font-bold font-arial leading-normal">MAX 20</p>
                <div className="px-[40px]">
                   <div className="text-black font-arial font-bold text-2xl mt-8 leading-normal">MAX 15</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">Data: 500mb</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">HSD: 1 Ngày</div>
                   <div className="text-black font-arial font-normal text-base mt-4 leading-normal">Giá: 15.000 đ</div>
                   <ul className="list-disc pl-[25px]">
                        <li className="text-black font-arial font-normal text-base mt-4">Miễn phí 1GB/ngày (30GB/30 ngày) truy cập Internet, hết dung lượng tốc độ cao, hệ thống dừng kết nối internet</li>
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
