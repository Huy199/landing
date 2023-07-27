"use client";

import { HeaderList } from "@/components";
import DataForyou from "@/components/DataForyou";


const HomePage = () => (
    <main className="flex min-h-screen flex-col">
        <HeaderList />
        <div className="mt-[66px]">

       <DataForyou/>
        </div>
    </main>
);

export default HomePage;
