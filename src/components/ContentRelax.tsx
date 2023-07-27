"use client";

import "@/assets/scss/contentRelax.scss";
import { Row, Col } from "antd";
import Image from "next/image";
import PackageContent1 from "@/assets/images/packageContent1.svg";
import PackageContent2 from "@/assets/images/packageContent2.svg";
import PackageContent3 from "@/assets/images/packageContent3.svg";
import BaseButton from "./BaseButton";
const ContentRelax = () => {
    const handleClickButton = () => {};
    return (
        <div className="content-relax-container">
            <Row>
                <Col className="content mr-8">
                    <Image src={PackageContent1} alt="image" className="image" />
                    <p className="title 3xl:font-montserrat md:font-nunito">MAX 15</p>
                    <div className="desc">
                        <p className="detail 3xl:font-montserrat md:font-nunito">Data: 500mb</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">HSD: 1 Ngày</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">Giá: 15.000 đ</p>
                    </div>
                    <BaseButton
                        text="ĐĂNG KÝ NGAY"
                        close={false}
                        handleClickButton={handleClickButton}
                    />
                </Col>
                <Col className="content mr-8">
                    <Image src={PackageContent2} alt="image" className="image" />
                    <p className="title 3xl:font-montserrat md:font-nunito">MAX 15</p>
                    <div className="desc">
                        <p className="detail 3xl:font-montserrat md:font-nunito">Data: 500mb</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">HSD: 1 Ngày</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">Giá: 15.000 đ</p>
                    </div>
                    <BaseButton
                        text="ĐĂNG KÝ NGAY"
                        close={false}
                        handleClickButton={handleClickButton}
                    />
                </Col>
                <Col className="content">
                    <Image src={PackageContent3} alt="image" className="image" />
                    <p className="title 3xl:font-montserrat md:font-nunito">MAX 15</p>
                    <div className="desc">
                        <p className="detail 3xl:font-montserrat md:font-nunito">Data: 500mb</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">HSD: 1 Ngày</p>
                        <p className="detail 3xl:font-montserrat md:font-nunito">Giá: 15.000 đ</p>
                    </div>
                    <BaseButton
                        text="ĐĂNG KÝ NGAY"
                        close={false}
                        handleClickButton={handleClickButton}
                    />
                </Col>
            </Row>
        </div>
    );
};
export default ContentRelax;
