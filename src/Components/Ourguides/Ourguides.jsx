import React from "react";
import './Ourguides.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Ourguides = () => {
    return(
        <div>
            <h1>Meet Our Guides</h1>
            <div className="guides">
                <div className="guide1">
                    <img src="./Images/pexels-roman-iskanderov-624959616-26985123.jpg" alt="" />
                    <p>Goe steven</p>
                    <div className="socialmedia">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaLinkedin className="icon"/>
                    </div>
                </div>
                <div className="guide1">
                    <img src="./Images/pexels-kadiravsarr-14705486.jpg" alt="" />
                    <p>Romeo cavani</p>
                    <div className="socialmedia">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaLinkedin className="icon"/>
                    </div>
                </div>
                <div className="guide1">
                    <img src="./Images/pexels-sagarsintan-26887054.jpg" alt="" />
                    <p>Cristian Suos</p>
                    <div className="socialmedia">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaLinkedin className="icon"/>
                    </div>
                </div>
                <div className="guide1">
                    <img src="./Images/pexels-lureofadventure-14970488.jpg" alt="" />
                    <p>James Brayen</p>
                    <div className="socialmedia">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaLinkedin className="icon"/>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Ourguides;