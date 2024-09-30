import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header-items">
            <ul>
                <li><Link to="/home"><img src="./Images/travellogo.png" alt="" /></Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/destination">Destination</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
    
    </div>

    )
}
export default Header;