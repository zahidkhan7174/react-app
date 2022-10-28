import './footer.css';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import React from 'react';
import carlogo from '../../assets/carlogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id='footer'>
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p className='ride'> <Link to='Cars'>Book A Car</Link> </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={carlogo} alt="gpt3_logo"  style={{minHeight:'60px'}}/>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Instagram</p>
        <p>FaceBook</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>University of Peshawar</p>
        <p>091-1234567</p>
        <p>TravelHub@gmail.com</p>
      </div>
    </div>
  </div>
);



  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading" id='ftr'>
      <h1 className="gradient__text">Reach out to Us and start your Journey with TravelHub</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Reach Out To US</p>
    </div>
    <div className='flinks'>
      <p><MailOutlineTwoToneIcon/></p>
      <p>  <InstagramIcon/></p> 
      <p><FacebookIcon /></p>
    </div>
</div>

export default Footer;