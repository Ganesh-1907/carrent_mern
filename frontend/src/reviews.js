import React from "react";
import axios from "axios";
import Display from "./review_display";
import { useState } from "react";

function Reviews(){
    const username=localStorage.username;
    const[text,Settext]=useState();
    const start=async()=>{
        const responce=await axios.post("https://gs-carrentals.onrender.com/reviews/"+text+"/"+username)
        console.log(responce.data)
        document.getElementById("dis").value='';
        window.location.reload(false);
    }
    return(
        <>
            <div>
                <input className="textbox" id="dis" type="text" name="review" placeholder="enter your review...." onChange={(e)=>Settext(e.target.value)} />
                
                <button className="Button1" onClick={start}>SUBMIT</button>
            </div>
            <div>
                <Display/>
            </div>
        </>
    )
}
export default Reviews;