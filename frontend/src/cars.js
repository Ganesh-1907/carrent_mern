import React from 'react';
import { useNavigate } from "react-router-dom";


const cars = [
  { id: 1, name: ' Maruti Suzuki igins', imageUrl: 'image4.jpg' , price: 'Starts from ₹1200/-' },
  { id: 2, name: ' RangeRover vellar', imageUrl: 'image8.jpg' ,price: 'Starts from ₹6000/-' },
  { id: 3, name: 'jeep Wrangler', imageUrl: 'image7.png' ,price:'Starts from ₹3000/-'}
];



const CarList = () => {

  const car_details=async()=>{
    nav("/car_details")
  }
  const nav = useNavigate();
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-item">
            <table>
                <tr>
                    <td><img src={car.imageUrl} alt={car.name} height="300px" width="300px" />
                    <button onClick={car_details}>details</button>
                    <h2>{car.name}</h2>
                    <h2 className='namec1'>-{car.price}</h2>
                    </td> 
                </tr>
            </table>
        </div>
      ))}
    </div>
  );
};

export default CarList;