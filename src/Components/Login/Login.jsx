import React from "react";
import './Login.css';
import Header from "../Header/Header";
const Login = () => {
    return(
        <div>
            <Header/>
            <div className="login-container">
            <div className="login-form">
                <h1>Welcome back😊</h1>
                <input placeholder="username" type="text" required className="login-username" /><br />
                <input placeholder="password" type="password" required className="login-password" /><br />
                <button className="login-btn">Login</button>
            </div>
            <div className="bg-img"></div>

        </div>

        </div>
       
    )

}
export default Login;