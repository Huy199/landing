"use client";
import "@/assets/scss/dataForyou.scss";
import { useEffect, useState } from "react";
import ModalRegisterPackage from "@/components/ModalRegisterPackage";
import ModalInfoPackage from "./ModalInfoPackage";
import { ModalPackageInfo, ModalRegister, PackageType } from "@/constants";

const DataForyou = () => {
    const [popupRegister, setPopupRegister] = useState<ModalRegister>({
        status: false
    });
    const [popupPackageInfo, setPopupPackageInfo] = useState<ModalPackageInfo>({status: false});
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("http://10.4.202.125:8080/services/landingpagecorecms/api/data-packs?size=6&page=0")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDatas(data)
      })
    },[]);

    return (
        <div className="data-foryou-container lg:px-4 sxm:px-4 xs:px-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4 data-foryou">
                {
                    datas?.map((data : PackageType) => (
                        <div className="package-data">
                            <div className="range" />
                            <div className="info" onClick={() => setPopupPackageInfo({
                                status: true,
                                data
                            })}>
                                <p className="title font-bold font-arial">{data?.name}</p>
                                <p className="memory font-normal font-arial">
                                    <div className="data-image" />
                                    Dung lượng: {data?.data}mb
                                </p>
                                <p className="expire font-normal font-arial">
                                    {" "}
                                    <div className="calendar-image" />
                                    HSD: {data?.usedTime} Ngày
                                </p>
                                <p className="price font-normal font-arial">
                                    {" "}
                                    <div className="price-image" />
                                    Giá: {data?.price} đ
                                </p>
                            </div>
                            <button
                                className="btn-subscrice font-bold"
                                onClick={() => setPopupRegister({
                                    status: true,
                                    id: data?.id
                                })}
                            >
                                ĐĂNG KÝ NGAY
                            </button>
                        </div>
                    ))
                }
            </div>
            <ModalRegisterPackage popupRegister={popupRegister} setPopupRegister={setPopupRegister} />
            <ModalInfoPackage isModalInfo={popupPackageInfo} setIsModalInfo={setPopupPackageInfo}/>
        </div>
    );
};

export default DataForyou;
