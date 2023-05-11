import React from 'react';
import { useNavigate,Link } from "react-router-dom";


const cars = [
  { id: 2, name: ' Maruti Suzuki igins', imageUrl: 'image4.jpg' , price: 'Starts from ₹1200/-' },
  { id: 21, name: ' RangeRover vellar', imageUrl: 'image8.jpg' ,price: 'Starts from ₹6000/-' },
  { id: 17, name: 'jeep Wrangler', imageUrl: 'image7.png' ,price:'Starts from ₹3000/-'}
];

const CarList = () => {

  
  
  const nav = useNavigate();
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-item">
            <table>
                <tr>
                    <td><img src={car.imageUrl} alt={car.name} height="300px" width="300px" />
                    <h2>{car.name}</h2>
                    <h2 className='namec1'>-{car.price}</h2>
                    <button className='details'><Link to={`/car_details/${car.id}`}>Details</Link></button>
                    <button className='booknow'><Link to={`/booking/${car.id}`}>BookNow</Link></button>
                    </td> 
                </tr>
            </table>
        </div>
      ))}
    </div>
  );
};

export default CarList;