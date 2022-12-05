import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
