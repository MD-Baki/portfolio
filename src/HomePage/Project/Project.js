import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Project.css";

const Project = () => {
    const projects = [
        {
            _id: 1,
            image: "https://i.ibb.co/nD5S92f/quiz-panther.jpg",
            title: "Quiz Panther",
            details:
                "This is a quiz-related website. There are questions in various sections to improve programming skills, from which the user can test his intelligence by answering the questions as per his wish.",
            technology: ["ReactJS", "React Router", "Rechart", "TailwindCSS"],
            git: "https://github.com/MD-Baki/quiz-panther",
            live: "https://quiz-panther-me.netlify.app/",
        },
        {
            _id: 2,
            image: "https://i.ibb.co/VwzsZJ1/tec-world.jpg",
            title: "Technology world",
            details:
                "This is an online learning website. From here you can take various courses to develop your skills at a very affordable price.",
            technology: ["ReactJS", "React Router", "TailwindCSS", "Firebase"],
            git: "https://github.com/MD-Baki/technology-world",
            live: "https://technology-world-f2d99.web.app/",
        },
        {
            _id: 3,
            image: "https://i.ibb.co/PDwP1Lg/best5.jpg",
            title: "Build A Team",
            details:
                "Here you can create a team of your choice and determine their price and calculate how much it costs you.",
            technology: ["JavaScript ES-6", "HTML", "TailwindCSS"],
            git: "https://github.com/MD-Baki/best-five",
            live: "https://build-a-team-of-your-choice.netlify.app/",
        },
        {
            _id: 4,
            image: "https://i.ibb.co/VSsywKZ/news.jpg",
            title: "News Wall",
            details:
                "Here you can see international news. News has been categorized and arranged to keep in mind the convenience of the user. You can see the news in details form by clicking on the details button.",
            technology: ["JavaScript ES-6", "HTML", "TailwindCSS"],
            git: "https://github.com/MD-Baki/news-portal",
            live: "https://news-wall.netlify.app/",
        },
        {
            _id: 5,
            image: "https://i.ibb.co/rQsPdgt/edu.jpg",
            title: "Exultance",
            details:
                "This is a company portfolio website. Here are the services they offer and the work they do. Their group meeting was shown. Also, customer reviews are shown and sister companies are shown.",
            technology: ["HTML", "CSS", "Bootstrap", "JQuery", "Silk"],
            git: "https://github.com/MD-Baki/exultance",
            live: "https://md-baki.github.io/exultance/",
        },
        {
            _id: 6,
            image: "https://i.ibb.co/QDR2M3V/sahajjo.jpg",
            title: "Sahajjo",
            details:
                "This is a simple website for poor and needy people. Here their work is published in blog form. If you want to keep up with their activities, you can contact them and donate.",
            technology: ["HTML", "CSS", "Bootstrap", "JQuery", "Silk"],
            git: "https://github.com/MD-Baki/sahajjo",
            live: "https://md-baki.github.io/sahajjo/helps/home.html",
        },
    ];

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
                {projects.map((project) => (
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500"
                        key={project._id}
                    >
                        <div className="item-container bg-neutral p-7 rounded-md">
                            <div className="other-pro-img">
                                <img src={project.image} alt="" />
                            </div>
                            <div className="my-7 flex justify-between items-center">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-xl font-bold text-secondary"
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
                                    {project.details.slice(0, 100) + "..."}
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
