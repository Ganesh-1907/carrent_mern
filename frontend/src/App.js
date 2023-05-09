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

import Reviews from './reviews';
import Display from './review_display';
import Screen from './screen';

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
        <Route path='/screen' element={<Screen/>} />
        <Route path='/car_details/:id' render={ ({ match }) => <CarDetailsPage match={match}/>} />
      </Routes>
    </BrowserRouter>   
</>
  )
}

export default App;
