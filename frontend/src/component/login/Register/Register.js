import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register(){
    
    const nav=useNavigate();

    const[username,Setname]=useState();
    const[password,Setpassword]=useState();
    const[email,Setemail]=useState();

    const Register=async()=>{
        const  responce = await axios.post("http://localhost:8000/Register/"+username+"/"+password+"/"+email);
        console.log(responce.data);
        if(responce.data){
            nav('/')
        }
        else{
            alert("failed")
        }
    }

    return(
        <>
        <div>
        <div className="Rback" >
            <div className="register">
                <center>
                <table className="table">
                    <h1 >SIGN-IN</h1>
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
                    <tr>
                        <td>EMAIL        </td>
                        <td><input className="input" name="email" onChange={(e)=>Setemail(e.target.value)}/></td>
                        <br/>
                        <br/>
                    </tr>
                </table>
                <br/>
                <button className="Button" onClick={Register}>SIGN IN</button>
                <br/>
                <br/>
                </center>
            </div>
        </div>
        </div>
        </>
    )
}
export default Register;