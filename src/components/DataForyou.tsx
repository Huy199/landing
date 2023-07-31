"use client";
import "@/assets/scss/dataForyou.scss";
import { useState } from "react";
import ModalRegisterPackage from "@/components/ModalRegisterPackage";
import ModalInfoPackage from "./ModalInfoPackage";
const DataForyou = () => {
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowPopupInfo, setIsShowPopupInfo] = useState(false);
    return (
        <div className="data-foryou-container lg:px-4 sxm:px-4 xs:px-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4 data-foryou">
                <div className="package-data">
                    <div className="range" />
                    <div className="info">
                        <p className="title font-bold font-arial">MAX 15</p>
                        <p className="memory font-normal font-arial">
                            <div className="data-image" />
                            Dung lượng: 1500mb
                        </p>
                        <p className="expire font-normal font-arial">
                            {" "}
                            <div className="calendar-image" />
                            HSD: 1 Ngày
                        </p>
                        <p className="price font-normal font-arial">
                            {" "}
                            <div className="price-image" />
                            Giá: 15.000 đ
                        </p>
                    </div>
                    <button className="btn-subscrice font-bold">ĐĂNG KÝ NGAY</button>
                </div>
                <div className="package-data">
                    <div className="range" />
                    <div className="info">
                        <p className="title font-bold font-arial">MAX 15</p>
                        <p className="memory font-normal font-arial">
                            <div className="data-image" />
                            Dung lượng: 1500mb
                        </p>
                        <p className="expire font-normal font-arial">
                            {" "}
                            <div className="calendar-image" />
                            HSD: 1 Ngày
                        </p>
                        <p className="price font-normal font-arial">
                            {" "}
                            <div className="price-image" />
                            Giá: 15.000 đ
                        </p>
                    </div>
                    <button className="btn-subscrice font-bold">ĐĂNG KÝ NGAY</button>
                </div>
                <div className="package-data">
                    <div className="range" />
                    <div className="info">
                        <p className="title font-bold font-arial">MAX 15</p>
                        <p className="memory font-normal font-arial">
                            <div className="data-image" />
                            Dung lượng: 1500mb
                        </p>
                        <p className="expire font-normal font-arial">
                            {" "}
                            <div className="calendar-image" />
                            HSD: 1 Ngày
                        </p>
                        <p className="price font-normal font-arial">
                            {" "}
                            <div className="price-image" />
                            Giá: 15.000 đ
                        </p>
                    </div>
                    <button className="btn-subscrice font-bold">ĐĂNG KÝ NGAY</button>
                </div>
                <div className="package-data">
                    <div className="range" />
                    <div className="info" onClick={() => setIsShowPopupInfo(true)}>
                        <p className="title font-bold font-arial">MAX 15</p>
                        <p className="memory font-normal font-arial">
                            <div className="data-image" />
                            Dung lượng: 1500mb
                        </p>
                        <p className="expire font-normal font-arial">
                            {" "}
                            <div className="calendar-image" />
                            HSD: 1 Ngày
                        </p>
                        <p className="price font-normal font-arial">
                            {" "}
                            <div className="price-image" />
                            Giá: 15.000 đ
                        </p>
                    </div>
                    <button
                        className="btn-subscrice font-bold"
                        onClick={() => setIsShowPopup(true)}
                    >
                        ĐĂNG KÝ NGAY
                    </button>
                </div>
            </div>
            <ModalRegisterPackage isModalOpen={isShowPopup} setIsModalOpen={setIsShowPopup} />
            <ModalInfoPackage isModalOpen={isShowPopupInfo} setIsModalOpen={setIsShowPopupInfo}/>
        </div>
    );
};

export default DataForyou;
