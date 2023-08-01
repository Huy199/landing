"use client";

import "@/assets/scss/contentRelax.scss";
import { Carousel } from "antd";
const ContentRelax = () => (
    <div className="content-relax-container lg:px-4 sxm:px-4 xs:px-4">
        <Carousel>
            <div className="data-foryou">
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
            </div>
        </Carousel>
    </div>
);
export default ContentRelax;
