import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../components/favProject";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import { FiGithub, FiCornerDownLeft, FiExternalLink } from "react-icons/fi";
import ProjectSlider from "../ProjectDetails/ProjectSlider";

const FavProjectDetails = () => {
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const single = projects?.find((Project) => Project.id === parseInt(id));
    const { title, mocUp1, mocUp2, intro, technology, git, live } = single;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (!single) {
        return <NotFound />;
    }

    if (loading) return <Loader />;

    return (
        <div className="max-w-[1100px] h-screen mx-auto py-20">
            <div
                className=" px-5 xl:px-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
            >
                <div className="mb-8">
                    <Link
                        to="/"
                        className="btn btn-neutral rounded-3xl text-secondary capitalize gap-2 tracking-wide bg-gradient-to-l from-neutral to-[#000a1f]"
                    >
                        <FiCornerDownLeft /> back to home
                    </Link>
                </div>
                <div className="bg-gradient-to-t from-neutral to-[#000a1f] p-10 lg:p-20 rounded-3xl border border-neutral border-opacity-90 grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-[250px] md:w-[400px] lg:full mx-auto">
                        <ProjectSlider mocUp1={mocUp1} mocUp2={mocUp2} />
                    </div>
                    <div className="">
                        <h2 className="text-secondary font-bold uppercase text-xl">
                            {title}
                        </h2>
                        <p className="text-accent py-8">{intro}</p>
                        <div className="flex flex-wrap gap-4">
                            {technology.map((data, i) => (
                                <p key={i} className="text-xs font-medium">
                                    {data}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-5 pt-8">
                            <a
                                target="_blank"
                                href={git}
                                className="btn btn-primary btn-sm text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize gap-2 tracking-wide"
                            >
                                <FiGithub />
                                GitHub
                            </a>
                            <a
                                target="_blank"
                                href={live}
                                className="btn btn-primary btn-sm text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize gap-2 tracking-wide"
                            >
                                <FiExternalLink />
                                Live
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavProjectDetails;
