import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import car1 from './img/vxr.jpg';
import car2 from './img/wagnor.jpg';
import car3 from './img/vitz.jpg';
import car4 from './img/corolla.jpg'
import car5 from './img/honda.jpg';
import car6 from './img/vezel.jpg';
import car7 from './img/altis.jpg';
import car8 from './img/grande.jpg';
import car9 from './img/benz.jpg';
import car10 from './img/mx3.jpg';
import car11 from './img/kia.webp';
import car12 from './img/tuscon.png';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './card.css'
import Form from 'react-bootstrap/Form';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import OpacityIcon from '@mui/icons-material/Opacity';
import ChairIcon from '@mui/icons-material/Chair';


export function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary m-5" onClick={handleShow}>
        Select Car
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline 
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            label="For 1 Day"
          />
          <Form.Check
            inline
            label="For 1 Ride"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
              <div className='form11'><Form.Control class="mb-2 w-100 bg-primary" type="date" ></Form.Control></div>
            <div className='form12'>  <Form.Control class="mb-2 w-100 bg-primary" type="time" ></Form.Control></div>
              <div className='form13'><input type="text" placeholder="Enter Location" class=" w-100 text-dark bg-light " /></div>

    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}






function Cardd() {
  return (
    <div className='cards'>

      <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car1} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title
        >Suzuki VXR</Card.Title>
        <Card.Text class='text-dark'>
          One of TravelHub's Lower end Cars, TravelHub provides lowest prices on these cars. Also these are easy to maintain.
        </Card.Text>
       <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 500/- </div> <br/>
        <LocalGasStationIcon /> 20Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>


        <div className='card2'>
     <Card>
       <Card.Img variant="top" src={car2} width='70%' class="d-inline-block align-top"
        />
       <Card.Body >
         <Card.Title 
         >Suzuki WagonR</Card.Title>
         <Card.Text class='text-dark'>
           Suzuki Cars provide good fuel average, thus falls easy on Costumers wallets. Also provides AC service.
         </Card.Text>
         <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 500/- </div> <br/>
        <LocalGasStationIcon /> 20Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
       </Card.Body>
       <Example/>
     </Card>
     </div>


         <div className='card2'>
     <Card >
       <Card.Img variant="top" src={car3} width='70%' class="d-inline-block align-top"
        />
       <Card.Body >
         <Card.Title 
         >Toyota Vitz</Card.Title>
         <Card.Text class='text-dark'>
           Small sized car, providing good fuel average and durability. Also good for short trips and plain road rides.
         </Card.Text >
         <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 500/- </div> <br/>
        <LocalGasStationIcon /> 18Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
       </Card.Body>
       <Example/>
     </Card>
     </div>

      <div className='card2'>
     <Card >
       <Card.Img variant="top" src={car4} width='70%' class="d-inline-block align-top"
        />
       <Card.Body >
         <Card.Title 
         >Toyota Corolla</Card.Title>
         <Card.Text class='text-dark'>
           A little up the ladder among the Pakistani Car Market, Toyota badging means it is sure to provide good durability.
         </Card.Text>
         <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 700/- </div> <br/>
        <LocalGasStationIcon /> 16Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
       </Card.Body>
       <Example/>
     </Card>
     </div>

     <div className='card2'>
     <Card >
       <Card.Img variant="top" src={car5} width='70%' class="d-inline-block align-top"
        />
       <Card.Body >
         <Card.Title 
         >Honda City</Card.Title>
         <Card.Text class='text-dark'>
           Among the youth favoured cars currently in our country, Good ride quality, though fuel average is a little on the higher size
         </Card.Text>
         <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 800/- </div> <br/>
        <LocalGasStationIcon /> 15Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
       </Card.Body>
       <Example/>
     </Card>
     </div>

     <div className='card2'>
     <Card >
       <Card.Img variant="top" src={car6} width='70%' class="d-inline-block align-top"
        />
       <Card.Body >
         <Card.Title 
         >Honda Vezel</Card.Title>
         <Card.Text class='text-dark' >
           Honda Vezel provides excellent fuel average as it is a Hybrid car. Also provides you with good quality overall.
         </Card.Text>
         <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 1000/- </div> <br/>
        <LocalGasStationIcon /> 19Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
       </Card.Body>
       <Example/>
     </Card>
     </div>

     <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car7} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title 
        >Toyota Altis</Card.Title>
        <Card.Text class='text-dark'>
         One of the newer cars from the ever-reliable car company Toyota. Provides good performance overall.
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 1200/- </div> <br/>
        <LocalGasStationIcon /> 15Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>

    <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car8} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title 
        >Toyota Grande</Card.Title>
        <Card.Text class='text-dark' >
         The top of the line varient among the current Toyota cars in Pakistan. Its 1.8L engine provides good power for the Speed-Lovers.
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 1200/- </div> <br/>
        <LocalGasStationIcon /> 14Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>

  <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car9} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title
        >Mercedes Benz</Card.Title>
        <Card.Text class='text-dark'>
        From Mercedes, one of the best rides a car can provide, Mercedes is considered an epitome of modern day luxury cars. 
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 5000/- </div> <br/>
        <LocalGasStationIcon /> 12Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>

    <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car10} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title
        >Mazda RX3</Card.Title>
        <Card.Text class='text-dark'>
         One of the newer cars for those who want their car to packed with latest tech. Provides good tech and power makes this car a good deal.
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 3000/- </div> <br/>
        <LocalGasStationIcon /> 10Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>

  <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car11} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title
        >Kia Sportage</Card.Title>
        <Card.Text class='text-dark'>
         One of the newer cars for those who want their car to packed with latest tech. Provides good tech and power makes this car a good deal.
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 1300/- </div> <br/>
        <LocalGasStationIcon /> 12Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>

  <div className='card2'>
    <Card >
      <Card.Img variant="top" src={car12} width='70%' class="d-inline-block align-top"
       />
      <Card.Body >
        <Card.Title
        >Hundai Tuscon</Card.Title>
        <Card.Text class='text-dark'>
         One of the newer cars for those who want their car to packed with latest tech. Provides good tech and power makes this car a good deal.
        </Card.Text>
        <div style={{marginBottom:'1px'}}><AirportShuttleIcon/>Transmission : Automatic
        <AccessTimeIcon style={{marginLeft:'20px'}} />  Over time: PKR 1500/- </div> <br/>
        <LocalGasStationIcon /> 10Km/L
        <OpacityIcon style={{marginLeft:'20px'}}/> Air Conditioned 
        <ChairIcon  style={{marginLeft:'20px'}}/> Seats: 4
      </Card.Body>
      <Example/>
  </Card>
  </div>
     </div>
     
  );
  
}

export default Cardd