import React from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import "./Project.css";

const Project = () => {
    const projects = [
        {
            _id: 1,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 2,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 3,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 4,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 5,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
        {
            _id: 6,
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://www.facebook.com/messages/t/100007616027360",
            live: "https://www.facebook.com/messages/t/100007616027360",
        },
    ];

    return (
        <div className="py-20">
            <div className="text-center">
                <h3 className="text-3xl capitalize font-bold text-secondary">
                    Other Noteworthy Projects
                </h3>
                <h4 className="text-sm tracking-wide text-primary pt-3">
                    view the archive
                </h4>
            </div>
            <div className="grid grid-cols-3 gap-5 pt-14">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="bg-neutral p-10 rounded items"
                    >
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
                            <h3 className="text-xl font-bold text-secondary">
                                {project.title}
                            </h3>
                            <p className="text-accent text-sm py-3">
                                {project.details.slice(0, 100) + "..."}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {project.technology.map((data, i) => (
                                    <p key={i} className="text-xs font-medium">
                                        {data}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
