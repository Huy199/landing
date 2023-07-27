"use client";

import "@/assets/scss/popular.scss";
import { Row, Col } from "antd";
import PopularImage from "@/assets/images/popular.svg";
import Image from "next/image";
const Popular = () => (
    <div className="popular-container w-full">
        <p className="people-subscribe-title font-montserrat font-bold text-center">
            Gói cước nhiều người đăng ký
        </p>
        <div className="content grid lg:grid-cols-7 gap-x-12">
            <div className="lg:col-span-3">
                <Image src={PopularImage} alt="logo" className="image" />
            </div>
            <div className="lg:col-span-4 xs:col-span-5 lg:pr-4 xs:px-4">
                <div className="popular-package">
                    <div className="image">MAX 15</div>
                    <div className="popular-package-info">
                        <p className="popular-package-main font-nunito font-bold">MAX 15</p>
                        <div className="popular-package-title">
                            <Row>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={8}
                                    className="font-montserrat font-normal text-base desc"
                                >
                                    <div className="data-image" />
                                    Data: 500mb
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={8}
                                    className="font-montserrat font-normal text-base desc"
                                >
                                    <div className="calendar-image" />
                                    HSD: 1 Ngày
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={8}
                                    className="font-montserrat font-normal text-base desc"
                                >
                                    <div className="price inline" />
                                    Giá: 15.000đ
                                </Col>
                            </Row>
                        </div>
                        <button className="popular-package-button font-bold font-nunito ">
                            ĐĂNG KÝ NGAY
                        </button>
                    </div>
                </div>
                <button className="btn-more-package">XEM THÊM</button>
            </div>
        </div>
    </div>
);
export default Popular;
