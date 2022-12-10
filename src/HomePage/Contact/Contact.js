import React, { useRef } from "react";
import { FiPhone, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_ped11tl",
                "template_sd6mb93",
                form.current,
                "FWPFCohKtJ489eyyE"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message Send Successfully");
                    event.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );

        // const form = event.target;
        // const user_name = form.user_name.value;
        // const user_email = form.user_email.value;
        // const message = form.message.value;

        // const sendMessage = {
        //     user_name,
        //     user_email,
        //     message,
        // };
        // console.log(sendMessage);
        // if (message) {
        //     toast.success("Message Send Successfully");
        //     form.reset();
        // }
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
                    <div data-aos="fade-up" data-aos-duration="1500">
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
                            <a
                                href="tel:+8801788521836"
                                className="flex gap-x-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
                            >
                                <FiPhone className="text-lg" />
                                +880 1788521836
                            </a>
                            <a
                                className="flex gap-x-2 items-center opacity-70 hover:opacity-100 cursor-pointer my-3"
                                href="mailto: bakimd77@gmail.com"
                            >
                                <MdAlternateEmail className="text-lg" />
                                bakimd77@gmail.com
                            </a>
                            <div className="flex gap-6 text-lg pt-2">
                                <a
                                    target="_blank"
                                    href="https://github.com/MD-Baki"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/md-baki/"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiLinkedin />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.behance.net/mdbaki1"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <SlSocialBehance />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=100007616027360"
                                    className="transition ease-in-out delay-150 hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-300 border border-primary rounded p-2"
                                >
                                    <FiFacebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="grid grid-cols-2 gap-x-16 gap-y-10"
                    >
                        <div className="form-control w-full">
                            <label className="label text-sm font-bold text-secondary">
                                Your Name
                            </label>
                            <input
                                name="user_name"
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
                                name="user_email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="input input-bordered border-transparent rounded-none border-b-[#fff] w-full text-xs font-medium text-accent"
                            />
                        </div>
                        <div className="form-control w-full col-span-2">
                            <label className="label text-sm font-bold text-secondary">
                                Message
                            </label>
                            <textarea
                                name="message"
                                className="textarea textarea-bordered border-transparent rounded-none border-b-[#fff] w-full text-xs font-medium text-accent"
                                defaultValue="Hi, I think I need you to work on this particular product. Reach out as soon as you can.
                            "
                            ></textarea>
                            <input
                                type="submit"
                                value="Send Message"
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
