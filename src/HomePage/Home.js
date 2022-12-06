import React from "react";
import Intro from "./Intro/Intro";

import About from "./About/About";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
const Home = () => {
    return (
        <div className="px-[50px]">
            <Intro />
            <div className="max-w-[1100px] mx-auto">
                <About />
                <Works />
                <Project />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
