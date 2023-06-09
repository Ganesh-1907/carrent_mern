import './App.css';
import Page1 from './page1';
import Login from './component/login/login';
import Page2 from './page2';
import { BrowserRouter,Route,Switch,Routes } from 'react-router-dom';
import Register from './component/login/Register/Register';
import CarList from './cars';
import CarDetailsPage from './car_details';
import More_cars from './more_cars';
import About from './about';
import Contact from './contact';
import Reviews from './reviews';
import Display from './review_display';
import More_reviews from './more_reviews';
import Booking from './booking';
import Print from './print';
import Success from './success';

const cars = [
  { id: 1, name: ' Maruti Suzuki igins', imageUrl: 'image4.jpg' , price: 'Starts from ₹1200/-' },
  { id: 2, name: ' RangeRover vellar', imageUrl: 'image8.jpg' ,price: 'Starts from ₹6000/-' },
  { id: 3, name: 'jeep Wrangler', imageUrl: 'image7.png' ,price:'Starts from ₹3000/-'}
];

function App(){
  return(
<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/carlist' element={<CarList/>}></Route>
        <Route path='/more_cars' element={<More_cars/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/review' element={<Reviews/>}/>
        <Route path='/display' element={<Display/>} />
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/more_reviews' element={<More_reviews/>}/>
        <Route path='/car_details/:id' element= {<CarDetailsPage/>}/>
        <Route path='/booking/:id' element={<Booking/>}/>
        <Route path='/print' element={<Print/>}/>
        <Route path='/success' element={<Success/>}/>
        
        
      </Routes>
    </BrowserRouter>   
</>
  )
}

export default App;
