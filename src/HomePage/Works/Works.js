import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Works.css";
import work1 from "../../Assets/work-1.jpg";
import work2 from "../../Assets/work-2.jpg";

const Works = () => {
    const projects = [
        {
            _id: 1,
            image: work1,
            title: "Creative Photo",
            intro: "photographer services review photographer services review photographer services review photographer services review",
            technology: [
                "ReactJS",
                "TailwindCSS",
                "Firebase",
                "MongoDB",
                "ExpressJS",
            ],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 2,
            image: work2,
            title: "Dream Phone",
            intro: "photographer services review photographer services review photographer services review photographer services review",
            technology: [
                "ReactJS",
                "TailwindCSS",
                "Firebase",
                "MongoDB",
                "ExpressJS",
            ],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
    ];

    return (
        <div id="project" className="py-20">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:md:w-[300px] after:w-[40%] after:h-[2px] after:bg-primary items-center">
                <span className="hidden md:flex -mr-2">Here are my</span>{" "}
                favorite projects.
            </h4>
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {projects.map((project) => (
                    <div key={project._id}>
                        <div className="project-container border border-accent rounded-md hover:border-primary overflow-hidden">
                            <img
                                src={project.image}
                                alt=""
                                className="w-full rounded-md"
                            />
                            <div className="overlay py-3 px-5 bg-neutral border-t border-primary border-opacity-20">
                                <div className="flex justify-between">
                                    <h2 className="text-xl font-medium text-secondary">
                                        {project.title}
                                    </h2>
                                    <div className="flex gap-4 items-center text-primary text-xl">
                                        <a
                                            href={project.git}
                                            target="blank"
                                            className="hover:text-primary"
                                        >
                                            <FiGithub />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="blank"
                                            className="hover:text-primary"
                                        >
                                            <FiExternalLink />
                                        </a>
                                    </div>
                                </div>
                                <h5 className="py-2">
                                    {project.intro.slice(0, 70) + "..."}
                                </h5>
                                <div className="hidden md:flex flex-wrap gap-2 mb-2 mt-1">
                                    {project.technology.map((data, i) => (
                                        <p
                                            key={i}
                                            className="bg-[#acc2f1] px-3 py-1 text-sm font-medium rounded text-black"
                                        >
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
