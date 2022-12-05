import React from "react";
import work1 from "../../Assets/work-1.jpg";
import "./Works.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaCaretRight } from "react-icons/fa";

const Works = () => {
    return (
        <div className="py-20">
            <h4 className="text-primary text-2xl font-medium flex gap-4 after:content-[''] after:w-[300px] after:h-px after:bg-secondary after:bg-opacity-20 items-center">
                <FaCaretRight />{" "}
                <span className="text-secondary">Where I’ve Worked</span>
            </h4>
            <div className="pt-10 grid grid-cols-2 gap-5 justify-between items-center">
                <div className="work-img inline-block">
                    <img src={work1} alt="" className="shadow-lg" />
                </div>
                <div className="text-right z-10 grid">
                    <h4
                        style={{ fontFamily: "Roboto Slab" }}
                        className="text-sm tracking-wide text-primary pb-2"
                    >
                        Creative Photo
                    </h4>
                    <h3 className="text-3xl capitalize font-bold">
                        photographer services review
                    </h3>
                    <div className="bg-neutral -ml-[100px] my-8 px-10 py-5">
                        <p className="text-accent">
                            A minimal, dark blue theme for VS Code, Sublime
                            Text, Atom, iTerm, and more. Available on Visual
                            Studio Marketplace, Package Control, Atom Package
                            Manager, and npm.
                        </p>
                    </div>
                    <p
                        style={{ fontFamily: "Roboto Slab" }}
                        className="tec text-sm text-accent"
                    >
                        VS Code Sublime Text Atom iTerm2 Hyper
                    </p>
                    <div className="flex gap-4 items-center text-xl justify-end pt-5">
                        <a
                            href="https://www.facebook.com/messages/t/100007616027360"
                            className="hover:text-primary"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://www.facebook.com/messages/t/100007616027360"
                            className="hover:text-primary"
                        >
                            <FiExternalLink />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
