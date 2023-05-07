import React from "react";
import Header from "./header";
import Footer from "./footer";

function About(){
    return(
        <>
           <div>
                <Header/>
                <div>
                    <img src="park1.jpeg" height="350px" width="100%"/>
                    <h1 className="about_name">ABOUT US</h1>
                </div>
                {/* <div className="gap"></div> */}
                <div className="about">
                    <p>CARS19  car rental services are the market leaders in Ground Transportation since many years.
                         Whether you want to go outstation for a weekend trip you can rent a car and drive it wherever
                          you heart desires. CARS19  Car rent takes car of the hassle free car rental for you,
                           whenever you need one. We have a wide range of luxury Cars and highend cars  for you.
                           CARS19  Car rental is a car rental company that has gained popularity as Best Self Drive 
                           Car Rental in AP.</p>
                </div>
                <Footer/>

           </div>
           
        </>
    )
}
export default About;