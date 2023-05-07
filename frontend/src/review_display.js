import React, { useEffect, useState } from "react";
import axios from "axios";
const Display= () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/reviews')
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        {
            data.map((item)=>{
                return(
                    <>
                        <h3>username :{item.username}</h3>
                        <h4>review :{item.text}</h4>
                    </>
                )
            })
        }
        </>
    );
}

export default Display;