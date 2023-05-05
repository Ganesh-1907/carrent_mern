import React from "react";
import { useNavigate } from "react-router-dom";


function Header(){
    const nav=useNavigate();
    const more_cars=async()=>{
        nav('/more_cars')
    }
    const home=async()=>{
        nav('/page2')
    }
    const about=async()=>{
        nav('/about')
    }

    return(
    <>
        <div className="One">
            <nav>
                <ul>
                    <button className="Button" onClick={home}>HOME</button>
                    <button className="Button" onClick={about}>ABOUT</button>
                    <button className="Button" onClick={more_cars}>CARS</button>
                    <button className="Button">CONTACT</button>
                </ul>
            </nav>
            <h1 className="name4">CARS-19</h1>
            <p className="name5">C A R - R E N T A L</p>
        </div> 
    </>
    )
}
export default Header;