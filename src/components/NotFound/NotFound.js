import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
    return (
        <div className="not_found">
            <div class="bg-purple">
                <div class="stars">
                    <div class="central-body">
                        <img
                            class="image-404 mx-auto"
                            src="http://salehriaz.com/404Page/img/404.svg"
                            alt=""
                            width="300px"
                        />
                        <Link to="/" class="btn-go-home" target="_blank">
                            GO BACK HOME
                        </Link>
                    </div>
                    <div class="objects">
                        <img
                            class="object_rocket"
                            src="http://salehriaz.com/404Page/img/rocket.svg"
                            alt=""
                            width="40px"
                        />
                        <div class="earth-moon">
                            <img
                                class="object_earth"
                                src="http://salehriaz.com/404Page/img/earth.svg"
                                alt=""
                                width="100px"
                            />
                            <img
                                class="object_moon"
                                src="http://salehriaz.com/404Page/img/moon.svg"
                                alt=""
                                width="80px"
                            />
                        </div>
                        <div class="box_astronaut">
                            <img
                                class="object_astronaut"
                                src="http://salehriaz.com/404Page/img/astronaut.svg"
                                alt=""
                                width="140px"
                            />
                        </div>
                    </div>
                    <div class="glowing_stars">
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
