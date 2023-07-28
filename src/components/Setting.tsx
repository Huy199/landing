"use client";

import "@/assets/scss/setting.scss";

const Setting = () => <div className="setting-container w-full">
    <div className="setting-content grid lg:grid-cols-2 xs:grid-cols-1">
        <div className="text">
            <div className="title text-white xs:text-2xl  font-arial font-bold">Bạn đã cài ứng dụng MyMobiFone chưa?</div>
            <div className="content text-white xs:text-2xl  font-arial font-normal">Cài ứng dụng My MobiFone để tận hưởng nhiều tiện ích và dịch vụ hơn!</div>
        </div>
        <div className="logo xs:mt-[25px]">
            <div className="gg-play">GG play</div>
            <div className="app-store">App Store</div>
        </div>
    </div>
</div>;
export default Setting;
