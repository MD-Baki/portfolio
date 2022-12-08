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
        <div id="about" className="py-24">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:md:w-[300px] after:w-[60%] after:h-[2px] after:bg-primary items-center">
                About Me
            </h4>
            <div className="flex flex-col lg:flex-row-reverse gap-8 mt-8 justify-between">
                <div className="w-full lg:w-[35%] text-center lg:text-right pb-7">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="about-img inline-block"
                    >
                        <img
                            src={me}
                            alt=""
                            className="h-[300px] w-[300px] rounded"
                        />
                        <div className="overlay border-primary"></div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                    className="w-full lg:w-[65%] tracking-wide text-accent grid gap-5 text-center lg:text-left"
                >
                    <p>
                        Hello! My name is MD Abdulla Hale Baki and I enjoy
                        creating things on the internet. I have a lot of
                        interest in web development. I have HTML, CSS,
                        JavaScript, React JS, JQuery, and Responsive Web Design
                        skills. I am working day by day to improve my skills in
                        web Development.
                    </p>
                    <p>
                        My Designing Skill in Figma, HTML5, CSS3, JavaScript &
                        React with Bootstrap and Tailwind CSS. and My
                        Development Skill ExpressJs, MongoDB.
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with
                        recently:
                    </p>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 md:w-[65%]  mt-4 mx-auto lg:mx-0">
                        {skills.map((skill, i) => (
                            <div key={i} className="text-center">
                                <img
                                    src={skill.icon}
                                    alt=""
                                    className="h-[40px] mx-auto transition ease-in-out delay-150 hover:scale-75 duration-300"
                                />
                                <p className="text-sm font-medium pt-3">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
