import React, { useState } from "react";
import Header from "./header";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const cars=[
    { id: 1, name: ' i10', imageUrl: 'http://localhost:3000/car1.png' , price: 'Starts from ₹1000/-' },
    { id: 2, name: ' Maruti Suzuki ignis', imageUrl: 'http://localhost:3000/image4.jpg' , price: 'Starts from ₹1200/-' },
    { id: 3, name: ' SWIFT', imageUrl: 'http://localhost:3000/car2.png' ,price: 'Starts from ₹1400/-' },
    { id: 4, name: 'AMAZE', imageUrl: 'http://localhost:3000/car3.png' ,price:'Starts from ₹1700/-'},
    { id: 5, name: ' i20', imageUrl: 'http://localhost:3000/car4.png' , price: 'Starts from ₹1200/-' },
    { id: 6, name: ' BALENO', imageUrl: 'http://localhost:3000/car5.png' ,price: 'Starts from ₹1500/-' },
    { id: 7, name: 'i20 AUTO', imageUrl: 'http://localhost:3000/car6.png' ,price:'Starts from ₹1500/-'},
    { id: 8, name: 'i10 AUTO', imageUrl: 'http://localhost:3000/car7.png' , price: 'Starts from ₹1700/-' },
    { id: 9, name: 'SWIFT AUTO ', imageUrl: 'http://localhost:3000/car8.png' ,price: 'Starts from ₹2000/-' },
    { id: 10, name: 'BOLENO AUTO', imageUrl: 'http://localhost:3000/car9.png' ,price:'Starts from ₹2000/-'},
    { id: 11, name: 'INNOVA OLD ', imageUrl: 'http://localhost:3000/car10.png' ,price:'Starts from ₹2000/-'},
    { id: 12, name: 'ERTIGA', imageUrl: 'http://localhost:3000/car11.png' , price: 'Starts from ₹1800/-' },
    { id: 13, name: 'THAR', imageUrl: 'http://localhost:3000/car12.png' ,price: 'Starts from ₹2000/-' },
    { id: 14, name: 'VERNA ', imageUrl: 'http://localhost:3000/car13.png' ,price:'Starts from ₹2200/-'},
    { id: 15, name: ' INNOVA CRYSTA', imageUrl: 'http://localhost:3000/car14.png' , price: 'Starts from ₹2500/-' },
    { id: 16, name: ' CRYSTA AUTO', imageUrl: 'http://localhost:3000/car15.png' ,price: 'Starts from ₹3000/-' },
    { id: 17, name: 'jeep Wrangler', imageUrl: 'http://localhost:3000/image7.png' ,price:'Starts from ₹3000/-'},
    { id: 18, name: 'HONDA CITY AUTO', imageUrl: 'http://localhost:3000/car16.png' ,price:'Starts from ₹2500/-'},
    { id: 19, name: 'ERTIGA AUTO ', imageUrl: 'http://localhost:3000/car17.png' , price: 'Starts from ₹2800/-' },
    { id: 20, name: 'ECO SPORT', imageUrl: 'http://localhost:3000/car18.png' ,price: 'Starts from ₹4000/-' },
    { id: 21, name: ' RangeRover vellar', imageUrl: 'http://localhost:3000/image8.jpg' ,price: 'Starts from ₹6000/-' },
    { id: 22, name: 'FORTUNER ', imageUrl: 'http://localhost:3000/car19.png' ,price:'Starts from ₹7000/-'},
    { id: 23, name: 'AUDI A4', imageUrl: 'http://localhost:3000/car20.png' ,price:'Starts from ₹12000/-'},
  ];
  


function Booking(props){
    const nav=useNavigate();
    const { id } = useParams();  
    const car = cars.find(car => car.id === parseInt(id));
    console.log(id);

    const[username,setusername]=useState();
    const[age,setage]=useState();
    const[email,setemail]=useState();
    const[mobile,setmobile]=useState();
    const[aadhar,setaadhar]=useState(); 
    const[pickup,setpickup]=useState();
    const[returndate,setreturndate]=useState()


    const booking=async()=>{
        const input=await axios.post("http://localhost:8000/booking/"+username+"/"+age+"/"+email+"/"+mobile+"/"+aadhar+"/"+pickup+"/"+returndate)
        console.log(input.data)
        if(input.data){
            nav('/print')
        }
        else{
            alert("failed")
        }
    }


    return(
        <>
        <Header/>
        <br/>
        <div>
        <img className='details_image' src={car.imageUrl} alt={car.name} height="350px" width="400px"/>
        <h1 className='booking_car_name'>{car.name}</h1>
        {/* <h2 className="booking_car_name">Price per day: {car.price}</h2> */}
        </div>
        <div>
            <table className="book_border">
                <tr>
                    <td><h2>Booking form</h2></td>
                </tr>
                <tr>
                    <td>Car Name</td>
                    <td><input type="text" value={car.name} name="carname" />  </td>
                    <td>car price</td>
                    <td><input type="text" value={car.price} name="carname" />  </td>
                </tr>
                <tr>
                    <td>First name</td>
                    <td><input type="text" name="username" onChange={(e)=>setusername(e.target.value)}/></td>
                    <td>Last name</td>
                    <td><input type="text" name="username" onChange={(e)=>setusername(e.target.value)}/></td>
                </tr>
                <tr>
                    <td> Date of birth</td>
                    <td><input type="text" name="age" onChange={(e)=>setage(e.target.value)}/></td>
                    <td> Age</td>
                    <td><input type="text" name="age" onChange={(e)=>setage(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>email id</td>
                    <td><input type="text" name="email" onChange={(e)=>setemail(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Mobile number</td>
                    <td><input type="text" name="mobile" onChange={(e)=>setmobile(e.target.value)} /> </td>
                    <td>aadhar number</td>
                    <td><input type="text" name="aadhar" onChange={(e)=>setaadhar(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Licence id</td>
                    <td><input type="text"  /></td>
                </tr>
                <tr>
                    <td>pick-up-date</td>
                    <td><input type="date" name="pick_date" onChange={(e)=>setpickup(e.target.value)} /></td>
                    <td>return data</td>
                    <td><input type="date" name="pick_date" onChange={(e)=>setreturndate(e.target.value)} /></td>
                </tr>
                <br/>
                <button className="Button1" onClick={booking}>BookNow</button>
            </table>
        </div>
        </>
    )
}
export default Booking;


