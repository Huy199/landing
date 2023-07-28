"use client";
import "@/assets/scss/dataForyouList.scss";
import { useState } from "react";
import ModalRegisterPackage from "@/components/ModalRegisterPackage";
const DataForyouList = () => {
    const [isShowPopup, setIsShowPopup] = useState(false);
    return (
        <div className="data-foryou-list-container lg:px-4 sxm:px-4 xs:px-4">
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
                    <button
                        className="btn-subscrice font-bold"
                        onClick={() => setIsShowPopup(true)}
                    >
                        ĐĂNG KÝ NGAY
                    </button>
                </div>
            </div>
            <button className="more-datas font-bold font-arial text-base">Xem thêm</button>
            <ModalRegisterPackage isModalOpen={isShowPopup} setIsModalOpen={setIsShowPopup} />
        </div>
    );
};

export default DataForyouList;
