"use client";
import { Header } from "@/components";
import Banner from "@/components/Banner";
import DataForyou from "@/components/DataForyou";
import MorePackage from "@/components/MorePackage";
import MorePackageSlider from "@/components/MorePackageSlider";
import Popular from "@/components/Popular";
// import PackageContent from "@/components/PackageContent";
// import Setting from "@/components/Setting";

const HomePage = () => (
    <main className="flex min-h-screen flex-col">
        <Header />
        <Banner />
        <DataForyou />
        <MorePackage />
        <MorePackageSlider />
        <Popular />
        {/* <PackageContent />
        <Setting /> */}
    </main>
);

export default HomePage;
