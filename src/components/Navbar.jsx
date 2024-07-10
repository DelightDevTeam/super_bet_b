import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import { Form, Modal } from 'react-bootstrap';
import user from '../assets/images/user.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoginOpen,setIsLoginOpen]=useState(false)
  return (
    <div className='py-2 py-sm-3 px-1 px-sm-2 px-lg-4 d-flex align-items-center justify-content-between'>
      <Link to={'/'}>
      <img src={logo} className='logo' />
      </Link>
      {/* <button onClick={()=>setIsLoginOpen(true)} className="primaryBtn py-2 px-4">Login</button> */}
      <div className="d-flex align-items-center gap-4">
        <div className='d-flex align-items-center gap-2'>
        <img src={user} className='user' />
        <div>
          <small className='fw-semibold d-block userNav'>John Doe</small>
          <small className='userNav fw-semibold'>UserID : 1234</small>
        </div>
        </div>
      <Link to={'/exchange'}>
      <button   className="d-none d-sm-inline primaryBtn py-2 px-4">Exchange</button>
      </Link>
      </div>
      <Modal  className='text-black loginModal rounded-4' show={isLoginOpen} onHide={()=>setIsLoginOpen(false)}>
        <Modal.Header closeButton style={{background:'#Eee'}}>
          <Modal.Title className='text-center' style={{width:'100%'}}>
            <h5 className="fw-semibold text-center">Login Your Account</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{background:'#eee',
          borderBottomLeftRadius:'8px',
          borderBottomRightRadius:'8px'}}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Player ID</Form.Label>
        <Form.Control type="text" placeholder="A12380XD" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"   />
       </Form.Group>
       <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I confirm that I am over 18 years old and have read Terms of Service" />
      </Form.Group>
      </Form>
    <button className="mb-3 loginBtn fw-semibold py-2 w-full">
      Login
    </button>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Navbar
