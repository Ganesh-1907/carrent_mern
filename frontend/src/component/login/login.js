import React from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const nav=useNavigate();
    const Start=async()=>{ nav('/page2') }
return(<>

    <input type="text" placeholder="Enter Username" name="uname" required/>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
   
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    <button onClick={Start}>Login</button>  
    </>
    )
}
export default Login;