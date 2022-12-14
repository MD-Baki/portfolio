import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectSlider.css";
import "react-photo-view/dist/react-photo-view.css";

const projectSlider = ({ mocUp1, mocUp2 }) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="">
                    <img src={mocUp1} alt="" className="rounded-2xl w-full" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img src={mocUp2} alt="" className="rounded-2xl w-full" />
                </div>
            </Slider>
        </div>
    );
};

export default projectSlider;
