import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(){
    const nav=useNavigate();

    

    const[username,Setname]=useState();
    const[password,Setpassword]=useState();
    localStorage.username=username;

    const start=async()=>{
        const  responce = await axios.get("http://localhost:8000/login/"+username+"/"+password);
        console.log(responce.data);
        if(responce.data){
            nav('/page2')
        }
        else{
            alert("username or password  incorrect 🥴.")
        }
    }
    return(
        <>
        <div>
        <div className="Rback" >
            <div className="register">
                <center>
                <table className="table">
                    <h1 >LOGIN</h1>
                    <tr>
                        <td>USER NAME  </td>
                        <td ><input className="input" name="username" onChange={(e)=>Setname(e.target.value)}/></td>
                        <br/>
                        <br/>
                    </tr>
                    <tr>
                        <td>PASSWORD  </td>
                        <td><input className="input" name="password" onChange={(e)=>Setpassword(e.target.value)}/></td>
                        <br/>
                        <br/>
                    </tr>
                </table>
                <br/>
                <button className="Button" onClick={start}>LOGIN</button>
                <br/>
                <br/>
                </center>
            </div>
        </div>
        </div>
        </>
    )
}
export default Login;