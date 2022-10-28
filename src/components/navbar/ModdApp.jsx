import React, {useState} from 'react'
import Modal from 'react-modal'
import './modal.css'
import './navbar.css'


function ModApp() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    
    
    

  
  return (
    
    <div>
        <button className='sign-in' onClick={() => setmodalIsOpen(true)}>Log In</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setmodalIsOpen(false)}>
            <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
    
          <div className="emm">
            <label style={{marginLeft:'-3%'}}>Email address</label>
            <input
              type="email"
               placeholder='enter email'
              className="emin"
              
            />
          </div>
          <div className="emm">
            <label>Password</label>
            <input
             
              type="password"
              className="passin"
               placeholder='enter password'
              
            />
          </div>
          <div>
            <button type="submit"  className="submitt">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
            <div>
                <button className='close' onClick={() => setmodalIsOpen(false)}>Close</button>
            </div>
        </Modal>
        </div>
  )
}

export default ModApp