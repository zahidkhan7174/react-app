import blackcar from '../../assets/neww.jpg';
import './header.css';
import Footer from './Footer';
import Blog from '../blog/Blog'
import Why from './Why';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to TravelHub, Let's Start Our Journey Together</h1>

      <div className='atimer'>
        <div className='atimer_text'>
            <h2>Enter Your Pickup Location, Date and Time</h2>
       </div>
       <div className='abc'>
       <div>
        <input className='place' type="text"  placeholder='Enter Pickup Location' />
      <input className='date' type="Date"  placeholder='Enter Pickup Date' />
      </div>
      <div className='def'>
      <input className='time' type="time"  placeholder='Enter Pickup Time' />
      </div>
      <Link to="Cars"><button className='book'>Book A Car</button> </Link>

    </div>
    </div>



{/*
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
*/}
    </div>
    <div className="gpt3__header-image">
      <img src={blackcar} alt='carpic' />
    </div>
  </div>
  <Why/>
  <Blog/>
  <Footer/>
 
  </>
);

export default Header;