"use client";

import { HeaderList } from "@/components";
import DataForyouList from "@/components/DataForyouList";
import FilterDatas from "@/components/FilterDatas";
import Footer from "@/components/Footer";
import Setting from "@/components/Setting";


const HomePageDatas = () => (
    <main className="flex min-h-screen flex-col">
        <HeaderList />
        <FilterDatas/>
        <div className="lg:mt-[90px] mb-[60px]">
            <DataForyouList />
        </div>
        <Setting />
        <Footer/>
    </main>
);

export default HomePageDatas;
