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
            <div className="btn">
                <button className="Button">Login</button>
                <button className="Button">Signup </button>
            </div>
            <h1 className="name">CARS-19</h1>
            <h1 className="name2">Trusted Car Rent Services</h1>
            <h1 className="name3">AVAILABLE<br/> CARS FOR <br/> RENT!</h1>
        </div>
        <div>
            
            {/* <h1 className="name3">Enjoy Your Journey With Our Comfortable Cars</h1> */}
        </div>
        </>
    )
}
export default Page1;