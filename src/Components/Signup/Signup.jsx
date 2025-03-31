import React, {useState} from "react";
import './Signup.css';
import Header from "../Header/Header";
const Signup = () => {
    const[Password , setPassword] = useState("");
    const[confirmPassword,setConfirmpassword] = useState("");
    const[errorMessage,setErromessage] = useState("");
    const handlepasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleconfirmChange = (e) => {
        setConfirmpassword(e.target.value);
    }
    const passwordregEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!?*%&])[A-Za-z\d@$!?*%&]/;
    const validatePassword = () => {
        if(!passwordregEx.test(Password)){
            setErromessage("Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character.")

        }
        if(Password!=confirmPassword){
            setErromessage("password do not match");
            return false;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validatePassword()){
            alert("Good job , you are a member of our family");
        }
    };
    return(
        <div>
            <Header />
            <div className="signup-container">
            <div className="signupform">
                <p className="signup-txt">Be a member of our familly</p>
                <button  className="google"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Signup with google</a></button> <br />
                <span className="or-txt">or</span><br />
                <input className="fullname" type="text" placeholder="first name" />
                <input className="password" type="password" value={Password} onChange={handlepasswordChange} placeholder="create password"/> <br />
                <input className="confirm" type="password" value={confirmPassword} onChange={handleconfirmChange} placeholder="confirm password"/> <br />
                <input className="email2" type="email" placeholder="enter your eamil"/> <br />
                <button className="signup" onChange={handleSubmit}>Sign up</button><br />
                <a className="signintxt" href="signin">you already have an account?signin</a>
        
            </div>
            <div className="signup-img"></div>

            </div>
        </div>
        
    )

}
export default Signup;