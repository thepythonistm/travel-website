import React from "react";
import './Footer.css';
import { IoIosHome } from "react-icons/io";
import { BiSolidMessageCheck } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";



const Footer = () => {
    return(
        <div className="footer-elm">
            <div className="contact">
                <h1>Get In Touch</h1>
                <IoIosHome /><span>123,Rabat Hassan 2,Morocco</span><br />
                <BiSolidMessageCheck /><span>travelino@gmail.com</span><br />
                <BiSolidPhoneCall /><span>+212-600-00-00-00</span>         
            </div>
            <div className="trustedby">
                <h2>Trusted by</h2>
                <span>qatar airline</span><br />
                <span>rayanair</span><br />
                <span>transavia</span>

            </div>
            <div className="social-media">
                <h3>Follow us</h3>
                <a href="#"><FaFacebook /></a><br />
                <a href="#"><AiFillInstagram /></a><br />
                <a href="#"><FaSquareXTwitter /></a><br />
            </div>
            <div className="payment">
                <h4>Payment</h4>
                <div className="icons">
                    <FaCcVisa /><br />
                    <FaCcMastercard /><br />
                    <FaCcPaypal /><br />
                </div>
               


            </div>

        </div>

    )

}
export default Footer;