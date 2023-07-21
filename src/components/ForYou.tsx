"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import Package1 from "@/assets/images/package1.svg"
import Data from "@/assets/images/data.svg"
import Expire from "@/assets/images/calendar.svg"
import Price from "@/assets/images/price.svg"
import '@/assets/scss/foryou.scss'
import BaseButton from "./BaseButton";

const ForYou = () => {
   const handleApply = () => {}
   return (
      <>
      <Row className="max-md:px-4 max-3xl:mx-auto foryou md:gap-40">
          <Col>
            <Row className="title font-montserrat text-mobifone text-8xl font-bold">
               MAX 15
               <span className="order font-montserrat font-bold">01</span>
            </Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6">Miễn phí 1GB/ngày (30GB/30 ngày) truy cập Internet, hết dung lượng tốc độ cao, hệ thống dừng kết nối internet</Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6 mt-3">Miễn phí data truy cập dịch vụ VieOn; 01 tài khoản xem gói VieON VIP đăng nhập 5 thiết bị và xem đồng thời 2 thiết bị</Row>
            <Row>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
                  <Image src={ Data} alt=""  className="data inline mr-2"/>Data: 500mb
               </Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Expire} alt=""  className="data inline mr-2"/>HSD: 1 Ngày</Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Price} alt=""  className="data inline mr-2"/>Giá: 15.000đ</Col>
            </Row>
            <Row className="mt-8.5">
               <BaseButton text="ĐĂNG KÝ NGAY" close={false} handleClickButton={handleApply}/>
            </Row>
         </Col>
         <Col>
            <Image src={ Package1} alt=""  className="package1"/>
         </Col> 
      </Row>
      <Row className="max-md:px-4 max-3xl:mx-auto foryou md:gap-40 flex-row-reverse mt-16">
          <Col>
            <Row className="title font-montserrat text-mobifone text-8xl font-bold flex flex-row-reverse">
               MAX 15
               <span className="order font-montserrat font-bold">01</span>
            </Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6">Miễn phí 1GB/ngày (30GB/30 ngày) truy cập Internet, hết dung lượng tốc độ cao, hệ thống dừng kết nối internet</Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6 mt-3">Miễn phí data truy cập dịch vụ VieOn; 01 tài khoản xem gói VieON VIP đăng nhập 5 thiết bị và xem đồng thời 2 thiết bị</Row>
            <Row>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
                  <Image src={ Data} alt=""  className="data inline mr-2"/>Data: 500mb
               </Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Expire} alt=""  className="data inline mr-2"/>HSD: 1 Ngày</Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Price} alt=""  className="data inline mr-2"/>Giá: 15.000đ</Col>
            </Row>
         </Col>
         <Col>
            <Image src={ Package1} alt=""  className="package2"/>
         </Col> 
      </Row>
      <Row className="max-md:px-4 max-3xl:mx-auto foryou md:gap-40">
          <Col>
            <Row className="title font-montserrat text-mobifone text-8xl font-bold">
               MAX 15
               <span className="order font-montserrat font-bold">01</span>
            </Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6">Miễn phí 1GB/ngày (30GB/30 ngày) truy cập Internet, hết dung lượng tốc độ cao, hệ thống dừng kết nối internet</Row>
            <Row className="max-md:w-[382px] max-3xl:w-[480px] desc font-montserrat text-black font-normal text-base leading-6 mt-3">Miễn phí data truy cập dịch vụ VieOn; 01 tài khoản xem gói VieON VIP đăng nhập 5 thiết bị và xem đồng thời 2 thiết bị</Row>
            <Row>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
                  <Image src={ Data} alt=""  className="data inline mr-2"/>Data: 500mb
               </Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Expire} alt=""  className="data inline mr-2"/>HSD: 1 Ngày</Col>
               <Col xs={12} sm={8} className="font-montserrat text-black font-normal text-base">
               <Image src={Price} alt=""  className="data inline mr-2"/>Giá: 15.000đ</Col>
            </Row>
         </Col>
         <Col>
            <Image src={ Package1} alt=""  className="package3"/>
         </Col> 
      </Row>
      </>
   ) 
};
export default ForYou;

