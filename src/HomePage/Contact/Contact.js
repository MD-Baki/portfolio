import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";

const Contact = () => {
    return (
        <>
            <div className="divider m-0 mt-3"></div>
            <div className="py-20 text-center">
                <h2 className="font-bold text-4xl text-secondary">
                    Interested in Working Together?
                </h2>

                <button className="btn my-7 btn-primary rounded-2xl bg-transparent hover:bg-opacity-10 text-primary capitalize px-8 text-lg">
                    Get In Touch
                </button>
                <div className="flex gap-6 text-2xl justify-center">
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
        </>
    );
};

export default Contact;
