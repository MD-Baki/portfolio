import React from "react";
import work1 from "../../Assets/work-2.png";
import "./Works.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Works = () => {
    const works = [
        {
            _id: 1,
            image: work1,
            title: "Creative Photo",
            intro: "photographer services review",
            details:
                "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            technology: "VS Code Sublime Text Atom iTerm2 Hyper",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
    ];

    return (
        <div className="py-20">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:w-[300px] after:h-px after:bg-secondary after:bg-opacity-20 items-center">
                Where I’ve Worked
            </h4>
            <div>
                {works.map((work) => (
                    <div
                        key={work._id}
                        className="pt-10 grid grid-cols-2 gap-5 justify-between items-center"
                    >
                        <div className="work-img-bar h-[360px]  overflow-y-auto">
                            <div className="work-img inline-block ">
                                <img
                                    src={work.image}
                                    alt=""
                                    className="shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="text-right z-10 grid">
                            <h4
                                style={{ fontFamily: "Roboto Slab" }}
                                className="text-sm tracking-wide text-primary pb-2"
                            >
                                {work.title}
                            </h4>
                            <h3 className="text-3xl capitalize font-bold">
                                {work.intro}
                            </h3>
                            <div className="bg-neutral -ml-[100px] my-8 px-10 py-5">
                                <p className="text-accent">{work.details}</p>
                            </div>
                            <p
                                style={{ fontFamily: "Roboto Slab" }}
                                className="tec text-sm text-accent"
                            >
                                {work.technology}
                            </p>
                            <div className="flex gap-4 items-center text-xl justify-end pt-5">
                                <a
                                    href={work.git}
                                    target="blank"
                                    className="hover:text-primary"
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href={work.live}
                                    target="blank"
                                    className="hover:text-primary"
                                >
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
