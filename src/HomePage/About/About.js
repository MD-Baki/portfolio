import React from "react";
import me from "../../Assets/me.JPG";
import "./About.css";
import { FaCaretRight } from "react-icons/fa";

const About = () => {
    return (
        <div className="py-20">
            <h4 className="text-secondary text-2xl font-medium flex gap-4 after:content-[''] after:w-[300px] after:h-px after:bg-secondary after:bg-opacity-20 items-center">
                About Me
            </h4>
            <div className="flex gap-8 mt-8 justify-between">
                <div className="w-2/3 tracking-wide text-accent grid gap-6">
                    <p>
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS!
                    </p>
                    <p>
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS!
                    </p>
                    <p>
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS!
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with
                        recently:
                    </p>
                    <div
                        style={{ fontFamily: "Roboto Slab" }}
                        className="flex gap-6"
                    >
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">JavaScript</p>
                            </div>
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">ReactJS</p>
                            </div>
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">React Router</p>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">Tailwind CSS</p>
                            </div>
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">Express JS</p>
                            </div>
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <FaCaretRight />
                                <p className="text-accent">
                                    Firebase Authentication
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="about-img">
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
