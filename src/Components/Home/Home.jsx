import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { PiEyesFill } from "react-icons/pi";
import Header from "../Header/Header";


const Home = () => {
    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('/signup');
    }
    const handleExplore = () => {
        navigate('/service');
    }

    return(
        
        <div className="home">
             <Header />
            <div className="home-field">
                <div>
                    <h1>Best Destinations around the world</h1>
                    <h2>Travel, enjoy <br /> and live a new <br /> and full life</h2>
                    <p>Built Wicket longer admire do barton vanity itself do in it. <br />
Preferred to sportsmen it engrossed listening. Park gate <br />
sell they west hard for the.</p>
                </div>

            </div>
            <button className="explore" onClick={handleExplore}>Explore more</button>
            <button className="getstarted" onClick={handleSignup}>Get started</button>
            <div className="search">
                <input type="text" placeholder="Are you looking for a special destination...."/><PiEyesFill className="search-icon"/>
            </div>
        </div>

        
    )

}
export default Home;