import React from "react";
import me from "../../Assets/me.JPG";
import "./About.css";
import js from "../../Assets/icon/js.png";
import html from "../../Assets/icon/html-5.png";
import css from "../../Assets/icon/css-3.png";
import react from "../../Assets/icon/physics.png";
import github from "../../Assets/icon/github.png";
import mongodb from "../../Assets/icon/mongodb.png";
import tailwind from "../../Assets/icon/tailwindcss.png";
import bootstrap from "../../Assets/icon/bootstrap.png";
import express from "../../Assets/icon/express.png";

const About = () => {
    const skills = [
        {
            icon: js,
            name: "JavaScript",
        },
        {
            icon: react,
            name: "React JS",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            name: "Git",
        },
        {
            icon: github,
            name: "GitHub",
        },
        {
            icon: mongodb,
            name: "MongoDB",
        },
        {
            icon: html,
            name: "HTML",
        },
        {
            icon: css,
            name: "CSS",
        },

        {
            icon: tailwind,
            name: "TailwindCSS",
        },
        {
            icon: bootstrap,
            name: "Bootstrap",
        },
        {
            icon: express,
            name: "ExpressJS",
        },
    ];
    return (
        <div className="py-20">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:w-[300px] after:h-[2px] after:bg-primary items-center">
                About Me
            </h4>
            <div className="flex gap-8 mt-8 justify-between">
                <div className="w-[65%] tracking-wide text-accent grid gap-5">
                    <p>
                        Hello, I am MD Abdulla Hale Baki, I am a Frontend
                        Developer(ReactJS) with 1+ years of experience in Web
                        Development. I have worked on multiple projects in the
                        past, ranging from small to large scale. I am passionate
                        about building scalable, maintainable, and secure web
                        applications.
                    </p>
                    <p>
                        My Designing Skill in Figma, HTML5, CSS3, JavaScript &
                        React with Bootstrap and Tailwind CSS. and My
                        Development Skill NodeJs, ExpressJs, Basic PHP and
                        WordPress
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with
                        recently:
                    </p>
                    <div className="grid grid-cols-5 gap-x-4 gap-y-6 w-[65%]  mt-4">
                        {skills.map((skill, i) => (
                            <div key={i} className="text-center">
                                <img
                                    src={skill.icon}
                                    alt=""
                                    className="h-[40px] mx-auto"
                                />
                                <p className="text-sm font-medium pt-3">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[35%] text-right">
                    <div className="about-img inline-block">
                        <img
                            src={me}
                            alt=""
                            className="h-[300px] w-[300px] rounded"
                        />
                        <div className="overlay border-primary"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
