import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const cars = [
    { id: 1, name: ' Maruti Suzuki igins', imageUrl: 'image4.jpg' , price: 'Starts from ₹1200/-' },
    { id: 2, name: ' RangeRover vellar', imageUrl: 'image8.jpg' ,price: 'Starts from ₹6000/-' },
    { id: 3, name: 'jeep Wrangler', imageUrl: 'image7.png' ,price:'Starts from ₹3000/-'}
  ];

function CarDetailsPage({ match }) {
  const { id } = match.useParams();
  const car = cars.find(car => car.id === parseInt(id));

  const [isBooked, setIsBooked] = useState(false);

  function handleBookCar() {
    setIsBooked(true);
  }

  return (
    <>
    <div>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p>{car.name}</p>
      <p>Price per day: ${car.price}</p>
      {!isBooked && (
        <button onClick={handleBookCar}>Book Now</button>
      )}
      {isBooked && (
        <p>This car has been booked.</p>
      )}
    </div>
    </>
  );
}
export default CarDetailsPage;
