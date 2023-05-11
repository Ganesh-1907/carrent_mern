import React from 'react';
import Header from './header';
import Footer from './footer';
import { useNavigate,Link } from "react-router-dom";


const cars = [
  { id: 1, name: ' i10', imageUrl: 'car1.png' , price: 'Starts from ₹1000/-' },
  { id: 2, name: ' Maruti Suzuki ignis', imageUrl: 'image4.jpg' , price: 'Starts from ₹1200/-' },
  { id: 3, name: ' SWIFT', imageUrl: 'car2.png' ,price: 'Starts from ₹1400/-' },
  { id: 4, name: 'AMAZE', imageUrl: 'car3.png' ,price:'Starts from ₹1700/-'},
  { id: 5, name: ' i20', imageUrl: 'car4.png' , price: 'Starts from ₹1200/-' },
  { id: 6, name: ' BALENO', imageUrl: 'car5.png' ,price: 'Starts from ₹1500/-' },
  { id: 7, name: 'i20 AUTO', imageUrl: 'car6.png' ,price:'Starts from ₹1500/-'},
  { id: 8, name: 'i10 AUTO', imageUrl: 'car7.png' , price: 'Starts from ₹1700/-' },
  { id: 9, name: 'SWIFT AUTO ', imageUrl: 'car8.png' ,price: 'Starts from ₹2000/-' },
  { id: 10, name: 'BOLENO AUTO', imageUrl: 'car9.png' ,price:'Starts from ₹2000/-'},
  { id: 11, name: 'INNOVA OLD ', imageUrl: 'car10.png' ,price:'Starts from ₹2000/-'},
  { id: 12, name: 'ERTIGA', imageUrl: 'car11.png' , price: 'Starts from ₹1800/-' },
  { id: 13, name: 'THAR', imageUrl: 'car12.png' ,price: 'Starts from ₹2000/-' },
  { id: 14, name: 'VERNA ', imageUrl: 'car13.png' ,price:'Starts from ₹2200/-'},
  { id: 15, name: ' INNOVA CRYSTA', imageUrl: 'car14.png' , price: 'Starts from ₹2500/-' },
  { id: 16, name: ' CRYSTA AUTO', imageUrl: 'car15.png' ,price: 'Starts from ₹3000/-' },
  { id: 17, name: 'jeep Wrangler', imageUrl: 'image7.png' ,price:'Starts from ₹3000/-'},
  { id: 18, name: 'HONDA CITY AUTO', imageUrl: 'car16.png' ,price:'Starts from ₹2500/-'},
  { id: 19, name: 'ERTIGA AUTO ', imageUrl: 'car17.png' , price: 'Starts from ₹2800/-' },
  { id: 20, name: 'ECO SPORT', imageUrl: 'car18.png' ,price: 'Starts from ₹4000/-' },
  { id: 21, name: ' RangeRover vellar', imageUrl: 'image8.jpg' ,price: 'Starts from ₹6000/-' },
  { id: 22, name: 'FORTUNER ', imageUrl: 'car19.png' ,price:'Starts from ₹7000/-'},
  { id: 23, name: 'AUDI A4', imageUrl: 'car20.png' ,price:'Starts from ₹12000/-'},
];



const More_cars = () => {

  const car_details=async()=>{
    nav("/car_details")
  }
  const booknow=()=>{
    nav("/booking")
  }
  const nav = useNavigate();
  return (
    <>
    <Header/>
    <br/>
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-item">
            <table>
                <tr>
                    <td><img src={car.imageUrl} alt={car.name} height="300px" width="300px" />
                    <h2>{car.name}</h2>
                    <h2 className='namec1'>-{car.price}</h2>
                    <button className='details'><Link to={`/car_details/${car.id}`}>details</Link></button>
                    <button className='booknow'><Link to={`/booking/${car.id}`}>Booknow</Link></button>
                    </td> 
                </tr>
            </table>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default More_cars;