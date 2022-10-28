import React, {useEffect,useState} from 'react'
import Modal from 'react-modal'
import './modapp2.css'


function ModApp2() {
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  
  return (
    
    <div>
        <button className='sign-up' onClick={() => setmodalIsOpen(true)}>Sign Up</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setmodalIsOpen(false)}>
            <div className="Auth-form-container">
      <form >
        <div className="Auth-form-content">
        <div className="new">
            <label>First Name</label>
            <input
              type="text" placeholder='enter firstname'
              className="fname"
              
            />
          </div>
          <div className="new">
            <label>Last Name</label>
            <input
              type="text"  placeholder='enter lastName'
              className="fname"
            />
          </div>
          <div className="new">
            <label>Email address</label>
            <input
              type="email"
               placeholder='enter email'
              className="emin"
            />
          </div>
          <div className="new">
            <label>Enter Password</label>
            <input
              type="password"  placeholder='enter password'
              className="passin"
            />
          </div>
          <div className="new">
            <label>Confirm Passwrd</label>
            <input
              type="password" placeholder='enter confirmPassword' 
              className="confirmpassword"
            />
          </div>
          <div className="new">
            <label>Mobile Number</label>
            <input
              type="mobile"
              placeholder='enter mobile'
              className=""
            />
          </div>
          <div>
            <button type="submit"   className="submot">
              Sign Up
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

export default ModApp2

