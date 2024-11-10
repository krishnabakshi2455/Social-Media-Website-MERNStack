import React from 'react';
import './OtherAccount.css'
import { Avatar } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Link } from 'react-router-dom';


const Following: React.FC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <div className="main-following-box">
            <Slider {...settings}>
                {/* {Array.from({ length: 1 }).map((_, index) => (
                    <div key={index} className="following-last-container" >
                        <div className="following-last-container">
                            <Avatar>K</Avatar>
                            <p>Krishna</p>
                        </div>
                    </div>
                ))} */}

                <div className="following-last-container" >
                    <div className="following-last-container">
                        <Link to='/create'><Avatar>K</Avatar></Link>
                        <Link to='/create'>Krishna</Link>
                    </div>
                </div>

                <div className="following-last-container" >
                    <div className="following-last-container">
                        <Link to='/create'><Avatar>K</Avatar></Link>
                        <Link to='/create'>Krishna</Link>
                    </div>
                </div>

                <div className="following-last-container" >
                    <div className="following-last-container">
                        <Link to='/create'><Avatar>K</Avatar></Link>
                        <Link to='/create'>Krishna</Link>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Following;
