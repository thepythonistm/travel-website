import React from "react";
import './Login.css';
const Login = () => {
    return(
        <div className="login-container">
            <h1>Login</h1>
            <input placeholder="username" type="text" required className="login-username" /><br />
            <input placeholder="password" type="password" required className="login-password" /><br />
            <button className="login-btn">Login</button>

        </div>
    )

}
export default Login;