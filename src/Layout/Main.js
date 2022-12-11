import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";
import Loader from "../components/Loader/Loader";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;
