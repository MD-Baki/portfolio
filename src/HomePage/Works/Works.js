import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Works.css";
import { projects } from "../../components/favProject";

const Works = () => {
    return (
        <div id="project" className="py-20">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:md:w-[300px] after:w-[40%] after:h-[2px] after:bg-primary items-center">
                <span className="hidden md:flex -mr-2">Here are my</span>{" "}
                favorite projects.
            </h4>
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {projects.map((project) => (
                    <div
                        data-aos={project.aos}
                        data-aos-duration="1500"
                        key={project._id}
                    >
                        <div className="project-container border border-accent rounded-md hover:border-primary overflow-hidden">
                            <img
                                src={project.image}
                                alt=""
                                className="w-full rounded-md"
                            />
                            <div className="overlay py-3 px-5 bg-neutral border-t border-primary border-opacity-20">
                                <div className="flex justify-between">
                                    <Link
                                        to={`/favProjectDetails/${project.id}`}
                                        className="text-xl font-medium text-secondary hover:text-primary"
                                    >
                                        {project.title}
                                    </Link>
                                    <div className="flex gap-4 items-center text-primary text-xl">
                                        <a
                                            href={project.git}
                                            target="_blank"
                                            className="hover:text-primary"
                                        >
                                            <FiGithub />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="hover:text-primary"
                                        >
                                            <FiExternalLink />
                                        </a>
                                    </div>
                                </div>
                                <h5 className="py-2">
                                    {project.intro.slice(0, 90) + "..."}{" "}
                                    <Link
                                        to={`/favProjectDetails/${project.id}`}
                                        className="text-sm font-bold text-secondary hover:link hover:text-primary"
                                    >
                                        Read More
                                    </Link>
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
