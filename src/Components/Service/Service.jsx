import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css';
import Header from "../Header/Header";
const Service = () => {
    const navigate = useNavigate();
    const handleRes = () => {
        navigate('/reservation');
    }
    const handleGuides = () => {
        navigate('/ourguides');
    }
    const handleContact = () => {
        navigate('/contact');
    }
    return(
        <div className="service">
            <Header/>
            <h1>Our Services</h1>
            <div className="services">
                <div className="service1">
                    <img src="/Images/pexels-424fotograf-169879395-27705567.jpg" alt="" />
                    <h2>WorldWide Tours</h2>
                    <p>WorldWide Tours takes you on unforgettable <br /> journeys to the world's most stunning destinations. <br />Experience diverse cultures, breathtaking<br /> landscapes , and create lasting memories with expertly crafted travel adventures.</p>
                </div>
                <div className="service1">
                    <img src="/Images/pexels-chevanon-333525.jpg" alt="" />
                    <h2>Flight Reservation</h2>
                    <p>WorldWide Tours takes you on unforgettable <br /> journeys to the world's most stunning destinations. <br />Experience diverse cultures, breathtaking<br /> landscapes , and create lasting memories with expertly crafted travel adventures.</p>
                </div>
                <div className="service1">
                    <img src="/Images/pexels-palumalerba-2607113.jpg" alt="" />
                    <h2>Hotel Reservation</h2>
                    <p>WorldWide Tours takes you on unforgettable <br /> journeys to the world's most stunning destinations. <br />Experience diverse cultures, breathtaking<br /> landscapes , and create lasting memories with expertly crafted travel adventures.</p>
                </div>

            </div>
            <div className="buttons">
                <button onClick={handleRes}>Reserve Now</button>
                <button onClick={handleGuides}>Meet a Guide</button>
                <button onClick={handleContact}>Contact Us</button>
            </div>
        </div>
    )

}
export default Service;