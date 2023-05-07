import React from "react";
import { FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';




function Footer(){
    return(
        <div className="footer">
            <div className="icons">
            <div className="phone"><FaPhone/>7816087488</div>
            <div className="insta"><FaInstagram/>CARS-19@instagram.com</div>
            <div className="facebook"><FaFacebook/>CARS-19@facebook.com</div>
            </div>
        </div>
    )
}
export default Footer;