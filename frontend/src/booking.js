import React from "react";
import Header from "./header";

function Booking(){
    return(
        <>
        <Header/>
        <br/>
        <br/>
        <div>
            <table>
                <tr>
                    <td>CUSTOMER NAME</td>
                    <td> <input type="text" name="username" /></td>
                </tr>
                <tr>
                    <td>CUSTOMER AGE</td>
                    <td><input type="text" name="age" /></td>
                </tr>
                <tr>
                    <td>CUSTOMER EMAIL ID</td>
                    <td><input type="text" name="email" /></td>
                </tr>
                <tr>
                    <td>CUSTOMER MOBILE NUMBER</td>
                    <td><input type="text" name="mobile"/> </td>
                </tr>
                <tr>
                    <td>CUSTOMER AADHAR NUMBER</td>
                    <td><input type="text" name="aadhar" /></td>
                </tr>
                
            </table>
        </div>
        </>
    )
}
export default Booking;