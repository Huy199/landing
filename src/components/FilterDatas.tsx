"use client";

import "@/assets/scss/filterDatas.scss";
import { Input, Select } from "antd";
import Link from "next/link";
const FilterDatas = () => (
    <div className="header-datas">
        <div className="title">
            <Link href={"/home"} className="font-arial font-bold header">Header / </Link>
            <div className="font-arial font-bold datas">Danh sách gói cước </div>
        </div>
        <div className="content">
            <Input placeholder="Tìm gói... " className="search-datas" />
            <div className="filter-datas">
            <Select
                defaultValue="all"
                style={{ width: "30%" }}
                className="sm:ml-16px"
                options={[
                    { value: "all", label: "Tất cả" },
                    { value: "addon", label: "Addon" },
                ]}
            />
            <Select
                defaultValue="day"
                style={{ width: "30%", marginLeft: "16px" }}
                options={[
                    { value: "day", label: "Day" },
                    { value: "week", label: "Week" },
                    { value: "month", label: "Month" },
                    { value: "year", label: "Year",  },
                ]}
            />
            <Select
                defaultValue="asc"
                style={{ width: "30%", marginLeft: "16px" }}
                // className="sm:w-[104px] xs:w-[142px]"
                options={[
                    { value: "asc", label: "Giá tăng dần" },
                    { value: "desc", label: "Giá giảm dần" },
                   
                ]}
            />
        </div>
        </div>
    </div>
);
export default FilterDatas;