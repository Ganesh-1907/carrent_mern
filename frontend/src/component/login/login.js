import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const nav=useNavigate();

    const start=async()=>{
        nav('/page2')
    }
    return(
        <>
        <input type="text" placeholder="Enter your username ...." name="username" />
        <input type="text" placeholder="Enter your password ...." name="Password" />
        <button onClick={start}>Login</button>
        </>
    )
}
export default Login;