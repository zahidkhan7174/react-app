
import './App.css';
import { Header, Blog1, Features} from './containers';
import { Navbar, About} from './components';
import Accordian from './components/abc/Accordian';
import Cardd from './components/cars/Cars'
import Contact from './components/contact/Contact';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
 return (

  <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
    </div>
    <Routes>
      <Route path='/'  element={<Header/>}/>
     <Route path='/abtus' element= {<About />} />
     <Route path='/services' element={<Features />} />
     <Route path='/FAQ' element={<Accordian  />} />
     <Route path='/Cars' element={<Cardd />}/>
     <Route path ='/blog' element={<Blog1 /> } />
     <Route path ='/contact' element={<Contact />} />
    </Routes>
    </div>
 
 )
}

export default App;
