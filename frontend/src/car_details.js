import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route ,  } from 'react-router-dom';

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

function CarDetailsPage(props) {
  const { id } = useParams();  
  const car = cars.find(car => car.id === parseInt(id));
  console.log(id);

  // const [isBooked, setIsBooked] = useState(false);

  // function handleBookCar() {
  //   setIsBooked(true);
  // }

  return (
    <>
    <div>
      <h1>{car.name}</h1>
      <img src={car.imageUrl} alt={car.name} height="300px" width="300px"/>
      <p>{car.name}</p>
      <p>Price per day: ${car.price}</p>
      {/* {!isBooked && (
        <button onClick={handleBookCar}>Book Now</button>
      )}
      {isBooked && (
        <p>This car has been booked.</p>
      )} */}
    </div>
    </>
  );
}
export default CarDetailsPage;
