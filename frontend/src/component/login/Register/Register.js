import React from "react";

function Register(){
    return(
        <>
        <input type="text" name="username" placeholder="Enter your user name...." />
        <br/>
        <input type="text" name="password" placeholder="enter your password..." />
        <br/>
        <input type="text" name="email" placeholder="enter your email...."/>
        <br/>
        <button>Register</button>
        </>
    )
}
export default Register;