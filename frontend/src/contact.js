import React from "react";
import Header from "./header";
import Footer from "./footer";

function Contact(){
    return(
        <>
           <div>
                <Header/>
                <div className="contact-gap"> </div>
                <img src="contact.jpg" alt=" " />
                <img src="con1.jpg" alt=" " align="top"/>
                <pre className="con">
                Contact number - 7816087488
                </pre> 
                <Footer/>
                
           </div>
           
        </>
    )
}
export default Contact ;