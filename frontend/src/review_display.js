import React, { useEffect, useState } from "react";
import axios from "axios";

const Display= () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://gs-carrentals.onrender.com/reviews')
        .then((responce)=>{   
            setData(responce.data.sort().reverse());
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
                    <div className="review-display">
                    <table>
                        <tr>
                            <th ><h1>{item.username}</h1></th>
                        </tr>
                        <tr>
                            <td className="table1">
                                {item.text}
                            </td>
                        </tr>
                    </table>
                    </div>
                    </>
                )
            })
        }
        </>
    );
}

export default Display;