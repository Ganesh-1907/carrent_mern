import React from "react";
// import Display from "./review_display";
import Header from "./header";
import Reviews from "./reviews";


function More_reviews(){
    return(            
            <>
                <div>
                    <Header/>
                    <br/>
                    <div className="name10">FEEDBACK AND REVIEW</div>
                    <br/>
                    <br/>
                    <Reviews/>
                </div>
            </>
    )
}
export default More_reviews;