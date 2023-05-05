import React from "react";
import { useNavigate } from "react-router-dom";

function Page1(){
    const nav = useNavigate();

    const login=()=>{
        nav('/login')
    }
    const register=()=>{
        nav("/Register")
    }
    
    return(
        <>
        <div className="App">
            <div className="btn">
                <button className="Button" onClick={login}>Login</button>
                <button className="Button" onClick={register}>Signup </button>
            </div>
            <h1 className="name">CARS-19</h1>
            <h1 className="name2">Trusted Car Rent Services</h1>
            <h1 className="name3">AVAILABLE<br/> CARS FOR <br/> RENT!</h1>
        </div>
        <div>
       
        </div>
        </>
    )
}
export default Page1;