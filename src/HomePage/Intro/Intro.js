import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";

const Intro = () => {
    return (
        <div className="relative max-w-[1400px] mx-auto">
            <div className="max-w-[1100px] mx-auto py-48">
                <div>
                    <h4 className="text-primary font-medium text-lg">
                        Hi, my name is
                    </h4>
                    <h1 className="text-[70px] text-secondary font-bold">
                        MD Abdulla Hale{" "}
                        <span className="text-primary">Baki</span>.
                    </h1>
                    <h2 className="text-[50px] text-secondary opacity-80 font-bold leading-[40px]">
                        Front-End Developer.
                    </h2>
                    <p className="w-[50%] text-accent py-10">
                        I am a passionate web developer and am always eager to
                        learn different technologies related to{" "}
                        <span className="text-primary">web development</span>. I
                        love to take on challenges and always try to fulfill my
                        responsibilities.
                    </p>
                    <button className="btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize px-8">
                        Check out my Resume!
                    </button>
                </div>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <div className="flex flex-col gap-6 text-xl">
                    <a
                        target="blank"
                        href="https://github.com/MD-Baki"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiGithub />
                    </a>
                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/md-baki/"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        target="blank"
                        href="https://www.behance.net/mdbaki1"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <SlSocialBehance />
                    </a>
                    <a
                        target="blank"
                        href="https://www.facebook.com/profile.php?id=100007616027360"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
