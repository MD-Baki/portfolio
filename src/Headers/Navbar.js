import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="fixed w-full z-50 bg-[#0a192f]">
            <div className="navbar px-[50px] py-5">
                <div className="flex-1">
                    <Link>
                        <img src={logo} alt="" className="h-14" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link className="text-secondary hover:text-primary text-sm flex gap-1 items-center">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="text-secondary hover:text-primary text-sm flex gap-1 items-center">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link className="text-secondary hover:text-primary text-sm flex gap-1 items-center">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link className="text-secondary hover:text-primary text-sm flex gap-1 items-center">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn-sm text-sm rounded bg-transparent hover:bg-opacity-10 text-primary capitalize">
                        Resume
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;