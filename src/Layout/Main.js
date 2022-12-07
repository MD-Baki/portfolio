import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;
