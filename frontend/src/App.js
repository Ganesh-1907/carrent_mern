import './App.css';
import Page1 from './page1';
import Login from './component/login/login';
import Page2 from './page2';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './component/login/Register/Register';

function App(){
  return(
<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
      </Routes>
    </BrowserRouter>   
</>
  )
}

export default App;
