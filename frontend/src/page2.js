import React from "react";
import './App.css';
import CarList from "./cars";
import Header from "./header";
import Footer from "./footer";
import Reviews from "./reviews";
import { useNavigate } from "react-router-dom";

function Page2(){
    const nav=useNavigate();
    const more_cars=async()=>{
        nav('/more_cars')
    }

    return(
        <>
        <Header/> 
        <div className="Two">
            <div>
            <img src="image5.jpg" alt="cars" height="400px" width="1446px" />
            <h1 className="name7">A CAR FOR EVERY<br/>PURSE AND <br/>PURPOSE</h1>
            </div>
        </div>
        <div className="Three">
            {/* <marquee ><img src="image2.jpg" height="70px" width="120px"/></marquee> */}
            <h1 className="name9">Cars-19 offers Affordable Rent a Car in AP.</h1>
            <h1 className="name8">Cars-19 provides an easy way to book Cars.
             We at Car-19 provide car rental service across State, exclusively offering self drive car service and car rental service 
             across AP.We have a wide range of cars from which you can book any car of your choice.
             Be it luxury, deluxe, economy or average, as per your choice and budget.
            </h1>
        </div>
        <h1 className="name10">OUR CARS</h1>
        <CarList/>
        <button className="cars_button" onClick={more_cars}>VIEW ALL OUR CARS....</button>
        <br/>
        <br/>
        <div className="review_gap"></div>
        <br/>
        <div className="reviews">
            <Reviews/>
        </div>
        <br/> 
        <Footer/>
       </> 
    )
}

export default Page2;