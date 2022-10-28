import React from 'react';  
import './Modal2.css';  
import { Button,Modal} from 'react-bootstrap';  
class Modal2 extends React.Component {  
  constructor(){  
    super();  
    this.state={  
      show:false  
    }  
  }  
  handleModal(){  
    this.setState({show:!this.state.show})  
  }  
  render(){  
    return (  
      <div>
      <div>    
        <div className="modalClass">  
          <Button variant="primary" style={{color:'white', fontSize:'30px', backgroundColor:'blueviolet'}} onClick={()=>this.handleModal()}>Click To Open Modal</Button>  
        </div>  
          
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header style={{color:'white', fontSize:'30px'}} closeButton>This is a Modal Heading</Modal.Header>  
          <Modal.Body>This is a Modal Body</Modal.Body>  
          <Modal.Footer>  
            <Button className='btn1' onClick={()=>this.handleModal()}>Close</Button>  
            <Button className='btn1' onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal>  
      </div> 
      </div> 
    )  
  }  
}  
export default Modal2; 