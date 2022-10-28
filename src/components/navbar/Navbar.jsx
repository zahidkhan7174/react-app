import { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import carlogo from './../../assets/carlogo.png';
import { Link } from 'react-router-dom';
import ModApp from './ModdApp';
import ModApp2 from './ModApp2';

const Menu=()=>(
  <>
  <p><Link to="/">Home</Link></p>
  <p><Link to="abtus">About Us</Link></p>
  <p><Link to="services">Services</Link></p>
  <p><Link to="Cars">Search A Car</Link></p>
  <p><Link to="FAQ">FAQs</Link></p>
  <p><Link to="blog">Blog</Link></p>
  <p><Link to="contact">Contact Us</Link></p>

  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <div>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
           <img src={carlogo} alt='carlogo'/>
          </div>
          <div className="gpt3__navbar-links_container">
           <Menu />
          </div>
        </div>
        <div className='gpt3__navbar-sign'>
        </div>
        <div className='gpt3__navbar-menu'>
          {
          toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
          }
          {toggleMenu &&(
            <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navabar-menu_container-links'>
            <Menu />
            <ModApp />
            <ModApp2 />
               </div>
            
           </div>
           
          )
          }

        </div>
        </div>
        <ModApp/>
        <ModApp2 />
        </div>

  )
}

export default Navbar
