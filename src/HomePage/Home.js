import React from "react";
import Intro from "./Intro/Intro";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import About from "./About/About";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
const Home = () => {
    return (
        <div className="px-[50px] relative">
            <div className="max-w-[1100px] mx-auto">
                <Intro />
                <About />
                <Works />
                <Project />
                <Contact />
            </div>
            <div className="fixed top-1/2 right-[50px] -translate-y-1/2">
                <div className="flex flex-col gap-6 text-lg">
                    <a
                        target="blank"
                        href="https://www.facebook.com/profile.php?id=100007616027360"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiGithub />
                    </a>
                    <a
                        target="blank"
                        href="https://www.facebook.com/profile.php?id=100007616027360"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        target="blank"
                        href="https://www.facebook.com/profile.php?id=100007616027360"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiFacebook />
                    </a>
                    <a
                        target="blank"
                        href="https://www.facebook.com/profile.php?id=100007616027360"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
