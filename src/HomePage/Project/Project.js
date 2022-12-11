import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Project.css";
import { works } from "../ProjectDetails/data";

const Project = () => {
    return (
        <div id="work" className="py-20">
            <div className="text-center">
                <h3 className="text-3xl capitalize font-bold text-secondary">
                    Other Projects
                </h3>
                <h4 className="text-sm tracking-wide text-primary pt-3 link-hover cursor-pointer">
                    view the archive
                </h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                {works.map((project) => (
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500"
                        key={project.id}
                    >
                        <div className="item-container bg-neutral p-7 rounded-md">
                            <div className="other-pro-img">
                                <img src={project.image} alt="" />
                            </div>
                            <div className="my-7 flex justify-between items-center">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-xl font-bold text-secondary hover:text-primary"
                                >
                                    {project.title}
                                </a>
                                <div className="flex gap-4 items-center text-xl">
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
                            <div>
                                <p className="text-accent text-sm pb-3">
                                    {project.details.slice(0, 100) + "..."}{" "}
                                    <Link
                                        to={`/projectDetails/${project.id}`}
                                        className="text-[#acc2f1] font-bold hover:link hover:text-primary"
                                    >
                                        Read More
                                    </Link>
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {project.technology.map((data, i) => (
                                        <p
                                            key={i}
                                            className="text-xs font-medium"
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

export default Project;
