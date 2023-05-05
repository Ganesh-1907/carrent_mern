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
    <div className="back">
        <div className="App">
            <div className="btn">
                <button className="Button" onClick={login}>Login</button>
                <button className="Button" onClick={Register}>Signup </button>
            </div>
                <h1 className="name">CARS-19</h1>
                <h1 className="name2">Trusted Car Rent Services</h1>
                <h1 className="name3">AVAILABLE<br/> CARS FOR <br/> RENT!</h1>
        </div>
        <div className="section">
            <img className="image" src="driver.jpg" height="190px" width="500px"/>
            <h1 className="name1">Supreme <br/>Driving  Experience ...</h1>
            <p>FIND THE PERFECT CAR  FOR RENT TODAY...</p>
        </div>
    </div>
    </>
    )
}
export default Page1;