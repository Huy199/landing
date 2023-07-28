"use client";
import { Header } from "@/components";
import Banner from "@/components/Banner";
import DataForyou from "@/components/DataForyou";
import MorePackage from "@/components/MorePackage";
import Popular from "@/components/Popular";
import PackageContent from "@/components/PackageContent";
import Setting from "@/components/Setting";
import Footer from "@/components/Footer";

const HomePage = () => (
    <main className="flex min-h-screen flex-col">
        <Header />
        <Banner />
        <DataForyou />
        <MorePackage />
        <Popular />
        <PackageContent />
        <Setting />
        <Footer/>
    </main>
);

export default HomePage;
