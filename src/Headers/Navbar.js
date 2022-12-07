import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="max-w-[1100px] mx-auto px-5 lg:px-0">
            <div className="navbar py-4">
                <div className="flex-1">
                    <Link>
                        <img src={logo} alt="" className="h-14" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 hidden md:flex">
                        <li>
                            <a
                                href="#about"
                                className="text-secondary hover:text-primary text-sm flex gap-1 items-center"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className="text-secondary hover:text-primary text-sm flex gap-1 items-center"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#work"
                                className="text-secondary hover:text-primary text-sm flex gap-1 items-center"
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-secondary hover:text-primary text-sm flex gap-1 items-center"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn-sm text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize ml-3">
                        <a
                            target="blank"
                            href="https://drive.google.com/file/d/1ONWe1mI2q6VAC9N2HK4lKWcANqoKDF4f/view?usp=sharing"
                        >
                            Resume
                        </a>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
