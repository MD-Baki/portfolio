import React from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

const Project = () => {
    const projects = [
        {
            _id: 1,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 2,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 3,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 4,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 5,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 6,
            title: "Integrating Algolia Search with WordPress Multisite",
            details:
                "Building websites for higher-ed is not for the faint of heart. Unless executed properly, these websites can quickly spin into deep labyrinths of information.",
            technology: "VS Sublime Text",
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
    ];

    return (
        <div className="py-20">
            <div className="text-center">
                <h3 className="text-3xl capitalize font-bold">
                    Other Noteworthy Projects
                </h3>
                <h4
                    style={{ fontFamily: "Roboto Slab" }}
                    className="text-sm tracking-wide text-primary pt-3"
                >
                    view the archive
                </h4>
            </div>
            <div className="grid grid-cols-3 gap-5 pt-14">
                {projects.map((project) => (
                    <div key={project._id} className="bg-neutral p-10 rounded">
                        <div className="mb-8 flex justify-between items-center">
                            <button className="text-4xl text-primary">
                                <FiFolder />
                            </button>
                            <div className="flex gap-4 items-center text-xl">
                                <a
                                    href={project.git}
                                    target="blank"
                                    className="hover:text-primary"
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href={project.live}
                                    className="hover:text-primary"
                                >
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">
                                {project.title}
                            </h3>
                            <p className="text-accent text-sm pt-3">
                                {project.details}
                            </p>
                            <p
                                style={{ fontFamily: "Roboto Slab" }}
                                className="tec text-sm text-accent mt-10"
                            >
                                {project.technology}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
