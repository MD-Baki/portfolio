import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import resumeFile from "../../Assets/My-resume.pdf";
import { SlSocialBehance } from "react-icons/sl";

const Intro = () => {
    return (
        <div className="md:relative">
            <div className="py-20  md:py-48 text-center md:text-left">
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                >
                    <h4 className="text-primary font-medium text-sm md:text-lg">
                        Hi, my name is
                    </h4>
                    <h1 className="text-[30px] md:text-[55px] lg:text-[70px] text-secondary font-bold">
                        MD Abdulla Hale{" "}
                        <span className="text-primary">Baki</span>.
                    </h1>
                    <h2 className="text-[22px] md:text-[40px] lg:text-[50px] text-secondary opacity-80 font-bold md:leading-[40px]">
                        Front-End Developer.
                    </h2>
                    <p className="md:w-[50%] text-accent text-sm md:text-md py-2 md:py-6 lg:py-10">
                        I like to know and understand modern technology. Since
                        then I have been working on improving my skills in web
                        Development. When I start any work, I finish it with
                        dedication.
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 w-fit mx-auto md:mx-0">
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1ONWe1mI2q6VAC9N2HK4lKWcANqoKDF4f/view?usp=sharing"
                            className="btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize px-8 mt-2 md:pt-0"
                        >
                            Check out my Resume!
                        </a>
                        <a
                            href={resumeFile}
                            download={resumeFile}
                            className="btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize px-8 mt-2 md:pt-0"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:absolute top-1/2 right-0 -translate-y-1/2 lg:pr-5 xl:pr-0">
                <div className="hidden md:flex flex-col gap-6 text-xl">
                    <a
                        target="_blank"
                        href="https://github.com/MD-Baki"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiGithub />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/md-baki/"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.behance.net/mdbaki1"
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary duration-300"
                    >
                        <SlSocialBehance />
                    </a>
                    <a
                        target="_blank"
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
