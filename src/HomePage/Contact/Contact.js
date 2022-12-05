import React from "react";

const Contact = () => {
    return (
        <div className="py-20 text-center">
            <h4
                style={{ fontFamily: "Roboto Slab" }}
                className="text-sm tracking-wide text-primary pb-4"
            >
                04. What’s Next?
            </h4>
            <h2 className="font-bold text-6xl">Get In Touch</h2>
            <p className="w-1/2 mx-auto text-accent py-5">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
            </p>
            <button className="btn btn-primary text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize px-8 mt-3">
                Say Hello
            </button>
        </div>
    );
};

export default Contact;
