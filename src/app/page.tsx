"use client";
import { Header } from "@/components";
import Banner from "@/components/Banner";
import ForYou from "@/components/ForYou";

const Home = () => (
    <main className="flex min-h-screen flex-col">
        <Header/>
        <Banner/>
        <ForYou/>
    </main>
);

export default Home;
