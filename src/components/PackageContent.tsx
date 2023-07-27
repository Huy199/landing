"use client";

import "@/assets/scss/packageContent.scss";
import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import ContentRelax from "@/components/ContentRelax";
const PackageContent = () => {
    const [tabs, setTabs] = useState<string>("1");
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: (
                <p
                    className={`tab-index font-montserrat font-bold ${
                        tabs === "1" ? "tab-active" : "tab-non-active"
                    }`}
                >
                    Giải trí
                </p>
            ),
            children: <ContentRelax />,
        },
        {
            key: "2",
            label: (
                <p
                    className={`tab-index font-montserrat font-bold ${
                        tabs === "2" ? "tab-active" : "tab-non-active"
                    }`}
                >
                    Truyền hình
                </p>
            ),
            children: <ContentRelax />,
        },
        {
            key: "3",
            label: (
                <p
                    className={`tab-index font-montserrat font-bold ${
                        tabs === "3" ? "tab-active" : "tab-non-active"
                    }`}
                >
                    Xem phim
                </p>
            ),
            children: <ContentRelax />,
        },
        {
            key: "4",
            label: (
                <p
                    className={`tab-index font-montserrat font-bold ${
                        tabs === "4" ? "tab-active" : "tab-non-active"
                    }`}
                >
                    Giáo dục
                </p>
            ),
            children: <ContentRelax />,
        },
    ];
    const onChange = (key: string) => {
        setTabs(key);
    };
    return (
        <div className="package-content">
            <p className="tilte font-nunito font-bold text-mobifone text-center">
                Gói cước theo nội dung
            </p>
            <div>
                <Tabs type="card" defaultActiveKey={tabs} items={items} onChange={onChange} />
            </div>
        </div>
    );
};
export default PackageContent;
