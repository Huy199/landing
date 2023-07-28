"use client";

import { HeaderList } from "@/components";
import DataForyouList from "@/components/DataForyouList";
import FilterDatas from "@/components/FilterDatas";


const HomePageDatas = () => (
    <main className="flex min-h-screen flex-col">
        <HeaderList />
        <FilterDatas/>
        <div className="lg:mt-[90px]">
            <DataForyouList />
        </div>
        <button></button>
    </main>
);

export default HomePageDatas;
