import React from "react";
import me from "../../Assets/me.JPG";

const Intro = () => {
    return (
        <div className="py-44 flex gap-6 items-center">
            <div className="w-[60%]">
                <h4 className="text-primary">Hi, my name is</h4>
                <h1 className="text-[70px] font-bold">MD Abdulla.</h1>
                <h2 className="text-[50px] font-bold text-accent leading-[40px]">
                    Front-End Developer.
                </h2>
                <p className="w-[90%] text-accent py-10">
                    I’m a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building accessible,
                    human-centered products at{" "}
                    <span className="text-primary">Upstatement</span>.
                </p>
                <button className="btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize px-8">
                    Check out my course!
                </button>
            </div>
            <div className="w-[40%]">
                <img
                    src={me}
                    alt=""
                    className="h-[350px] w-[350px] rounded-full border-4"
                />
            </div>
        </div>
    );
};

export default Intro;
