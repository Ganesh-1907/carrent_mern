import React from "react";
import Header from "./header";
import CarList from "./cars";

function About(){
    return(
        <>
           <div>
                <Header/>
                <div>
                    <img src="park2.webp" height="300px" width="100%"/>
                    <h1 className="about_name">ABOUT US</h1>

                </div>
                
           </div>
           
        </>
    )
}
export default About;