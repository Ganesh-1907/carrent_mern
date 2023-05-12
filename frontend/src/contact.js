import React from "react";
import Header from "./header";
import Footer from "./footer";

function Contact(){
    return(
        <>
           <div>
                <Header/>
                <div className="contact-gap"> 
                <div className="con1"><img src="contact.jpg" alt=" " /></div>
               <div className="con2"> <img src="con1.jpg" alt=" " align="top"/>
               <p>Contact number - 7816087488</p></div>
               </div>
                <pre className="con">
                
                </pre> 
                <Footer/>
                
           </div>
           
        </>
    )
}
export default Contact ;