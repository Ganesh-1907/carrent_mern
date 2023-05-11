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
                    <h2>CUSTOMER NAME : {dic.name}</h2>
                    <h2>CUSTOMER AGE : {dic.age}</h2>
                    <h2>CUSTOMER EMAIL : {dic.email}</h2>
                    <h2>CUSTOMER MOBILE NUMBER : { dic.mobile}</h2>
                    <h2>CUSTOMER AADHAR NUMBER : {dic.aadhar}</h2>
                    <h2>VECHICLE PICKUP DATE : {dic.pickup}</h2>
                    <h2>VACHICLE RETURN DATE : {dic.returndate}</h2>
                    <hr/>
                </>
                )
            })
        }
        </>

    );
}
export default Print


