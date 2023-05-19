import React from "react";
import Header from "./header";
import Footer from "./footer";

function Contact(){
    return(
        <>
           <div>
                <Header/>
                <div className="contact-gap"> 
                <div className="con1"><img src="contact.jpg"  /></div>
               <div className="con2"> <img src="con1.jpg" />
               <h1>Contact number - 8523802908</h1>
               <h1>ADDRESS :</h1>
               <h2 className="address">near SRKR engineering college <br/> juvvala palem road Bhimavaram-534204 </h2>
               <h1>OWNED BY : </h1>
               <h2 className="address">Ganesh-7816087488 <br/> keertana-9848226519 </h2></div>

               </div>
                <pre className="con">
                
                </pre> 
                <Footer/>
                
           </div>
           
        </>
    )
}
export default Contact ;