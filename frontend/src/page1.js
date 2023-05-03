import React from "react";
import { useNavigate } from "react-router-dom";

function Page1(){
    const nav = useNavigate();

    const login=async()=>{
        nav("/login")
    }
    const Register=async()=>{
        nav("/Register")
    }
    
    return(
        <>
        <div className="App">
            <h1 >GS-CARS</h1>
            <div className="btn">
                <button className="Button" onClick={login}><b>Login</b></button>
                <button className="Button" onClick={Register}><b>Register</b></button>
            </div>
        </div>
        <h1>LIFE IS NOT A DESTINY</h1>
        <h1>LIFE IS A JOURNEY</h1>
        
        </>
    )
}
export default Page1;