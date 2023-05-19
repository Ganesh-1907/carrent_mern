import React from 'react';
import { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import { BrowserRouter as Router, Route ,  } from 'react-router-dom';

const cars=[
  { id: 1, name: ' i10', imageUrl: 'http://localhost:3000/car1.png' , price: '₹1000/-',mileage:'19kmpl',seats:'4',fueltype:'petrol',model:'hatch back' },
  { id: 2, name: ' Maruti Suzuki ignis', imageUrl: 'http://localhost:3000/image4.jpg' , price: '₹1200/-',mileage:'25kmpl',fueltype:'diseel',seats:'4',model:'hatch back' },
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

function CarDetailsPage(props) {
  const { id } = useParams();  
  const car = cars.find(car => car.id === parseInt(id));
  console.log(id);
  console.log('hello')

  return (
    <>
    <Header/>
    <br/>
    <div className='details_gap'>
      <img className='details_image' src={car.imageUrl} alt={car.name} height="350px" width="400px"/>
      <br/>
      <h1 className='details_car_name'>{car.name}</h1>
      <div className='details_border'>
      <h1>Price per day : {car.price}</h1>
      <h1>mileage : {car.mileage}</h1>
      <h1>fueltype : {car.fueltype}</h1>
      <h1>Number of seats : {car.seats}</h1>
      <h1>model : {car.model}</h1>

      </div>
      <button className='booknow1'><Link to={`/booking/${car.id}`}>BookNow</Link></button>
    </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </>
  );
}
export default CarDetailsPage;
