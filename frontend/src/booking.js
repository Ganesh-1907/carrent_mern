import React, { useState } from "react";
import Header from "./header";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const cars=[
    { id: 1, name: ' i10', imageUrl: 'http://localhost:3000/car1.png' , price: '₹1000/-',mileage:'19kmpl',seats:'4',fueltype:'petrol',model:'hatch back' },
    { id: 2, name: ' Maruti Suzuki ignis', imageUrl: 'http://localhost:3000/image4.jpg' , price: '₹1200/-',mileage:'25kmpl',fueltype:'diesel',seats:'4',model:'hatch back' },
    { id: 3, name: ' SWIFT', imageUrl: 'http://localhost:3000/car2.png' ,price: '₹1400/-',mileage:'26kmpl',fueltype:'diesel',seats:'4',model:"hatch back" },
    { id: 4, name: 'AMAZE', imageUrl: 'http://localhost:3000/car3.png' ,price:' ₹1700/-' ,mileage:'20kmpl',fueltype:'diesel',seats:'5',model:'sedan'},
    { id: 5, name: ' i20', imageUrl: 'http://localhost:3000/car4.png' , price: '₹1200/-',mileage:'24kmpl',fueltype:'diesel',seats:'4',model:'hatch back' },
    { id: 6, name: ' BALENO', imageUrl: 'http://localhost:3000/car5.png' ,price: '₹1500/-',mileage:'26kmpl',fueltype:'petrol',seats:'5',model:'hatchback' },
    { id: 7, name: 'i20 AUTO', imageUrl: 'http://localhost:3000/car6.png' ,price:'₹1500/-',mileage:'25kmpl',fueltype:'diesel',seats:'4',model:'hatchback'},
    { id: 8, name: 'i10 AUTO', imageUrl: 'http://localhost:3000/car7.png' , price: '₹1700/-',mileage:'23kmpl',fueltype:'petrol',seats:'5' ,model:'hatchback'},
    { id: 9, name: 'SWIFT AUTO ', imageUrl: 'http://localhost:3000/car8.png' ,price: '₹2000/-',mileage:'19kmpl',fueltype:'petrol',seats:'4',model:'hatchback' },
    { id: 10, name: 'BOLENO AUTO', imageUrl: 'http://localhost:3000/car9.png' ,price:'₹2000/-',mileage:'27kmpl',fueltype:'diesel',seats:'4',model:'hatchback'},
    { id: 11, name: 'INNOVA OLD ', imageUrl: 'http://localhost:3000/car10.png' ,price:'₹2000/-',mileage:'27kmpl',fueltype:'diesel',seats:'7',model:'MPV'},
    { id: 12, name: 'ERTIGA', imageUrl: 'http://localhost:3000/car11.png' , price: '₹1800/-',mileage:'27kmpl',fueltype:'diesel',seats:'7',model:"MPV" },
    { id: 13, name: 'THAR', imageUrl: 'http://localhost:3000/car12.png' ,price: '₹2000/-',mileage:'16kmpl',fueltype:'diesel',seats:'2+4',model:"MPV" },
    { id: 14, name: 'VERNA ', imageUrl: 'http://localhost:3000/car13.png' ,price:'₹2200/-',mileage:'22kmpl',fueltype:'diesel',seats:'4',model:"sedan"},
    { id: 15, name: ' INNOVA CRYSTA', imageUrl: 'http://localhost:3000/car14.png' , price: '₹2500/-',mileage:'13kmpl',fueltype:'diesel',seats:'7',model:"MPV" },
    { id: 16, name: ' CRYSTA AUTO', imageUrl: 'http://localhost:3000/car15.png' ,price: '₹3000/-' ,mileage:'15kmpl',fueltype:'diesel',seats:'4',model:"MPV"},
    { id: 17, name: 'jeep Wrangler', imageUrl: 'http://localhost:3000/image7.png' ,price:'₹3000/-',mileage:'12kmpl',fueltype:'diesel',seats:'2',model:"MpV"},
    { id: 18, name: 'HONDA CITY AUTO', imageUrl: 'http://localhost:3000/car16.png' ,price:'₹2500/-',mileage:'18kmpl',fueltype:'diesel',seats:'4',model:"sedan"},
    { id: 19, name: 'ERTIGA AUTO ', imageUrl: 'http://localhost:3000/car17.png' , price: '₹2800/-' ,mileage:'13kmpl',fueltype:'diesel',seats:'7',model:"MPV"},
    { id: 20, name: 'ECO SPORT', imageUrl: 'http://localhost:3000/car18.png' ,price: '₹4000/-',mileage:'16kmpl',fueltype:'diesel',seats:'5',model:"SUV" },
    { id: 21, name: ' RangeRover vellar', imageUrl: 'http://localhost:3000/image8.jpg' ,price: '₹6000/-',mileage:'7kmpl',fueltype:'petrol',seats:'5',model:"SUV" },
    { id: 22, name: 'FORTUNER ', imageUrl: 'http://localhost:3000/car19.png' ,price:'₹7000/-',mileage:'8kmpl',fueltype:'petrol',seats:'7',MODEL:"SUV"},
    { id: 23, name: 'AUDI A4', imageUrl: 'http://localhost:3000/car20.png' ,price:'₹12000/-',mileage:'8kmpl',fueltype:'petrol',seats:'8',model:"sedan"},
    { id: 24, name: 'BMWX6M', imageUrl: 'http://localhost:3000/car21.png' ,price:'₹15000/-',mileage:'6kmpl',fueltype:'petrol',seats:'2+5',model:"coupe suv"},
  
  ];
  


function Booking(props){
    const nav=useNavigate();
    const { id } = useParams();  
    const car = cars.find(car => car.id === parseInt(id));
    console.log(id);
    localStorage.carname=carname;

    const[username,setusername]=useState();
    const[age,setage]=useState();
    const[email,setemail]=useState();
    const[mobile,setmobile]=useState();
    const[aadhar,setaadhar]=useState(); 
    const[pickup,setpickup]=useState();
    const[returndate,setreturndate]=useState();
    const[carname,setcarname]=useState();
    const[carprice,setcarprice]=useState();
    const[licence,setlicence]=useState();
    const[fuel,setfuel]=useState();
    const[seats,setseats]=useState();


    const booking=async()=>{
        const input=await axios.post("http://localhost:8000/booking/"+username+"/"+age+"/"+email+"/"+mobile+"/"+aadhar+"/"+pickup+"/"+returndate+"/"+carname+"/"+carprice+"/"+licence+"/"+fuel+"/"+seats)
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
        <img className='booking_image' src={car.imageUrl} alt={car.name} height="350px" width="400px"/>
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
                    <td><input type="text" name="carname" onChange={(e)=>setcarname(e.target.value)} />  </td>
                    <td>car price</td>
                    <td><input type="text"  name="carprice" onChange={(e)=>setcarprice(e.target.value)}/>  </td>
                </tr>
                <tr>
                    <td>fueltype</td>
                    <td><input type="text"  name="carfuel" onChange={(e)=>setfuel(e.target.value)} />  </td>
                    <td>No of Seats</td>
                    <td><input type="text"  name="carseats" onChange={(e)=>setseats(e.target.value)}/>  </td>
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
                    <td>Mobile number</td>
                    <td><input type="text" name="mobile" onChange={(e)=>setmobile(e.target.value)} /> </td>
                    <td>aadhar number</td>
                    <td><input type="text" name="aadhar" onChange={(e)=>setaadhar(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>email id</td>
                    <td><input type="text" name="email" onChange={(e)=>setemail(e.target.value)}/></td>
                    <td>Licence id</td>
                    <td><input type="text" name="licenceid" onChange={(e)=>setlicence(e.target.value)} /></td>
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


