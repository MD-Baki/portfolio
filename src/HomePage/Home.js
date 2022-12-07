import React from "react";
import Intro from "./Intro/Intro";

import About from "./About/About";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
const Home = () => {
    return (
        <>
            <div className="max-w-[1100px] mx-auto px-5 xl:px-0">
                <Intro />
                <About />
                <Works />
                <Project />
                <Contact />
            </div>
        </>
    );
};

export default Home;
