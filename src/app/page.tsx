"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/home");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default Home;
