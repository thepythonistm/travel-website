import React from "react";
import './Contact.css';
import { GiWorld } from "react-icons/gi";
import { SiContactlesspayment } from "react-icons/si";
import { MdLocalAirport } from "react-icons/md";


const Contact = () => {
    return(
        <div className="contact-form">
            <div>
                <h2>Contact us</h2>
                <div className="msg-inputs">
                    <div className="name-em">
                        <input className="name" type="text" placeholder="Full Name"/>
                        <input className="email" type="email" placeholder="Enter your email"/>
                    </div>
                
                    <input className="text" type="text" placeholder="Send us your message"/>
                </div>
                <button className="send-btn">Send to us</button>
            </div>
            <div className="booking">
                <h3>Book your next trip in 3 easy steps</h3>
                <div className="icon-txt">
                    <GiWorld className="icon-large" />
                    <p>Choose your favourite place. No matter
                    where <br /> you travel inside the World.</p>
                </div>
                <div className="icon-txt">
                    <SiContactlesspayment className="icon-large" />
                    <p>After find your perfect spot, make your
                    payment <br /> and get ready to travel.</p>
                </div>
                <div className="icon-txt">
                    <MdLocalAirport className="icon-large" />
                    <p>Lastly, you have to arrive at the airport
                    on time <br /> and enjoy the vacation.</p>
                </div>
            </div>

        </div>
    )
}
export default Contact;