import React from "react";
import {
    FiPhone,
    FiMessageSquare,
    FiGithub,
    FiLinkedin,
    FiFacebook,
} from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
    const handleMessage = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;

        const message = {
            name,
            email,
            comment,
        };
        console.log(message);
        if (message) {
            toast.success("Message Send Successfully");
            form.reset();
        }
    };

    return (
        <>
            <div id="contact" className="divider m-0 mt-3"></div>
            <div className="py-20">
                <h4 className="text-sm tracking-wide text-primary pb-3">
                    Hire Me
                </h4>
                <h2 className="text-3xl capitalize font-bold text-secondary pb-10">
                    Get in Touch
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <p className="text-accent pb-8">
                            I’m interested in freelance opportunities –
                            especially ambitious or large projects. However, if
                            you have other request or question, don’t hesitate
                            to use the form
                        </p>
                        <p className="text-lg font-bold text-accent tracking-wide pb-6">
                            SAY HELLO
                        </p>
                        <div className="text-primary inline-block">
                            <p className="flex gap-x-2 items-center opacity-70 hover:opacity-100 cursor-pointer">
                                <FiPhone className="text-lg" />
                                +880 1788521836
                            </p>
                            <p className="flex gap-x-2 items-center opacity-70 hover:opacity-100 cursor-pointer my-3">
                                <MdAlternateEmail className="text-lg" />
                                bakimd77@gmail.com
                            </p>
                            <div className="flex gap-6 text-lg pt-2">
                                <a
                                    target="blank"
                                    href="https://github.com/MD-Baki"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    target="blank"
                                    href="https://www.linkedin.com/in/md-baki/"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiLinkedin />
                                </a>
                                <a
                                    target="blank"
                                    href="https://www.behance.net/mdbaki1"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <SlSocialBehance />
                                </a>
                                <a
                                    target="blank"
                                    href="https://www.facebook.com/profile.php?id=100007616027360"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiFacebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleMessage}
                        className="grid grid-cols-2 gap-x-16 gap-y-10"
                    >
                        <div className="form-control w-full">
                            <label className="label text-sm font-bold text-secondary">
                                Your Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="input input-bordered border-transparent rounded-none border-b-[#fff] w-full text-xs font-medium text-accent"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label text-sm font-bold text-secondary">
                                Your Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="input input-bordered border-transparent rounded-none border-b-[#fff] w-full text-xs font-medium text-accent"
                            />
                        </div>
                        <div className="form-control w-full col-span-2">
                            <label className="label text-sm font-bold text-secondary">
                                Your Message
                            </label>
                            <textarea
                                name="comment"
                                className="textarea textarea-bordered border-transparent rounded-none border-b-[#fff] w-full text-xs font-medium text-accent"
                                defaultValue="Hi, I think I need you to work on this particular product. Reach out as soon as you can.
                            "
                            ></textarea>
                            <input
                                type="submit"
                                value="Drop Message"
                                className="col-span-2 mt-10 w-1/2 mx-auto btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
