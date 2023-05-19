import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import Success from "./success";
import { useParams,useNavigate } from "react-router-dom";




function Print(props){
    const [data,setData]=useState([]);
    const nav=useNavigate();
    const success=async()=>{
        nav('/success')
    }
    
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
                <div className="print">
                    <h2>FIRST NAME : {dic.name}</h2>
                    <h2> EMAIL : {dic.email}</h2>
                    <h2> MOBILE NUMBER : { dic.mobile}</h2>
                    <h2> AGE : {dic.age}</h2>
                    <h2> AADHAR NUMBER : {dic.aadhar}</h2>
                    <h2> PICKUP DATE : {dic.pickup}</h2>
                    <h2> RETURN DATE : {dic.returndate}</h2>
                    <h2> LICENCE ID : {dic.licence} </h2>
                    <button className="Button" onClick={success}>conform</button>

                    </div>
                </>
                )
            })
        }
        </>

    );
}
export default Print


