
import './App.css';
import Navbar from './component/Navbar';
import SignUp from './component/SignUp';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Services from './Routes/Services';
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
  <div className='App'>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={ <About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Service' element={ <Services/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
   </Routes>

  
   
    
   
  </div>
  );
}

export default App;
