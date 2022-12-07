import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;
