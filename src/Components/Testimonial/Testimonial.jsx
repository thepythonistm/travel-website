import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const testimonials = [
    {id:1,image:"./Images/pexels-dima-valkov-1186343-3209624.jpg",name:"carla james",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro."},
    {id:2,image:"./Images/pexels-doquyen-1520760.jpg",name:"naila reven",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro."},
    {id:3,image:"./Images/pexels-manei-3211476.jpg",name:"hon alex",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro."}
]
const Testimonial = () => {
    const navigate = useNavigate();
    const handleSignupto = () => {
        navigate('/signup');
    }
    const handleDestinations = () => {
        navigate('/destination');
    }
    return(
        <div className="tetimonials">
            <Header/>

            <div className="test-container">
            <div className="head-buttons">
                <div className="review-head">
                    <small>Our Feedbacks</small>
                    <h5 className="review-h1">Clients are Talking</h5>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Harum atque soluta unde itaque. <br /> Consequatur quam odit blanditiis <br /> harum veritatis porro.</p>

                </div>
                <button className="button1" onClick={handleSignupto}>Signup</button>
                <button className="button2" onClick={handleDestinations}>Explore Destinations</button>
            </div>
            <div className="allreviews">
            <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} >
                            <div className="review-slider">
                               <img src={testimonial.image} alt="" /><br />
                               <small >{testimonial.name}</small>
                               <p>{testimonial.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            </div>

        </div>
    )

}
export default Testimonial;