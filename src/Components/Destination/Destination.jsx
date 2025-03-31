import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Destination.css";
import Header from "../Header/Header";

import { Navigation, Pagination } from 'swiper/modules';

const items = [
    { id: 1, image: "./Images/pexels-taryn-elliott-4502973.jpg" },
    { id: 2, image: "./Images/pexels-enricoperini-819764.jpg" },
    { id: 3, image: "./Images/pexels-quang-nguyen-vinh-222549-3355788.jpg" },
    { id: 4, image: "./Images/pexels-asadphoto-11435614.jpg" },
    { id: 5, image: "./Images/pexels-enricoperini-819764.jpg" },
    { id: 6, image: "./Images/pexels-freestockpro-2070485.jpg" }
];

const Destination = () => {
    return (
        <div className="destinations">
            <Header/>
            <div className="items-slider">
              <h1 className="slider-title">Discover Top Travel Spots</h1>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id} >
                            <div className="image-slider">
                               <img src={item.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Destination;
