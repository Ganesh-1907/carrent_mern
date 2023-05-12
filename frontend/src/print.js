import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Print(){
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/getdata')
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        <h1 align="center">CUSTOMER Booking Details</h1>
        {
            data.map((dic)=>{
            return(
                <>
                    <h2> NAME : {dic.name}</h2>
                    <h2> EMAIL : {dic.email}</h2>
                    <h2> MOBILE NUMBER : { dic.mobile}</h2>
                    <h2> AGE : {dic.age}</h2>
                    <h2> AADHAR NUMBER : {dic.aadhar}</h2>
                    <h2> PICKUP DATE : {dic.pickup}</h2>
                    <h2> RETURN DATE : {dic.returndate}</h2>
                    <h2> LICENCE ID : {dic.licence} </h2>
                    <h2>CAR NAME : {dic.carname}</h2>
                    <h2>car price : {dic.carprice}</h2>
                    <hr/>
                </>
                )
            })
        }
        </>

    );
}
export default Print


