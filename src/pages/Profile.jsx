import React, { useState } from 'react'
import '../assets/css/profile.css'
import translate from '../assets/images/language.png'
import winloss from '../assets/images/winloss.png'
import twitter from '../assets/images/twitter.png'
import titok from '../assets/images/titok.png'
import fb from '../assets/images/fb.png'

import en from '../assets/images/en.png'
import mm from '../assets/images/mm.png'

import { Link } from 'react-router-dom'

import { Form, Modal } from 'react-bootstrap'
import useFetch from "../hooks/useFetch";
import BASE_URL from '../hooks/baseURL';

import UpdateProfile from '../components/UpdateProfile'

const ProfilePage = () => {
    const {data:user} = useFetch(BASE_URL + '/user');
    const [isLanguageModalOpen,setIsLanguageModalOpen]=useState(false);
    const [isPwModalOpen,setIsPwModalOpen]=useState(false);
    
    const socials=[
        {img:twitter,link:'/'},
        {img:titok,link:'/'},
        {img:fb,link:'/'},
     ];
     const languages=[
        {id:1,img:en,name:"English",value:'english'},
        {id:2,img:mm,name:"မြန်မာ",value:'myanmar'},

     ]
  return (<>
    <div className='pt-4 px-3 px-sm-4 pb-5 mb-5'>
      <div className="row cursor-pointer">
        <div className="col-lg-8 pe-3">
        <div className='profileContainer  p-3 rounded-3'>
            <h5 className="fw-semibold mb-3">Account Settings</h5>
            <div className="d-flex align-items-center justify-content-between">
                <div onClick={()=>setIsLanguageModalOpen(true)} className='d-flex align-items-center gap-2'>
                    <img src={translate} />
                    <p>Translate</p>
                </div>
                <p>English</p>
            </div>
            <div className="my-2 d-flex align-items-center justify-content-between">
                <Link to={'/win-loss-report'} className='d-flex align-items-center gap-2'>
                    <img src={winloss} />
                    <p>Win / Loss Report</p>
                </Link>
                <p></p>
            </div>
            <div className="my-3 d-flex align-items-center justify-content-between">
                <div onClick={()=>setIsPwModalOpen(true)} className='d-flex align-items-center gap-2'>
                    <img src={translate} />
                    <p>Password</p>
                </div>
                <p>Change</p>
            </div>
            <p className="fw-semibold mb-4 border-top pt-3">Contact us</p>
            <div className="row">
                <div  className='col-sm-5 mb-4 mb-sm-0'>
                    <p className="fw-semibold mb-2">Visit Us</p>
                    <small>12 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3, Singapore 018982</small>
                </div>
                <div className='mb-4 mb-sm-0  col-sm-4'>
                    <p className="fw-semibold mb-2">Email Us</p>
                    <small>superbet@gmail.com</small>
                </div>
                <div className='  col-sm-3'>
                    <p className="fw-semibold mb-2">Call Us</p>
                    <small className='d-block'>+959-123456890</small>
                    <small>+959-123456890</small>
                 </div>
            </div>
            <div className="d-flex align-items-center gap-4 mt-4">
                {socials.map((item,index)=>{
                    return <Link to={item.link}>
                    <img src={item.img} key={index} />
                    </Link>
                })}
            </div>
        </div>
        </div>
        <UpdateProfile user={user} />
      </div>
    </div>
    {/* Language Modal */}
    <Modal className='text-black profileModal' show={isLanguageModalOpen} onHide={()=>setIsLanguageModalOpen(false)}>
         <Modal.Body>
        <h5>Change Language</h5>
        <small className='d-block mb-3'>Please select your Language</small>
            {languages.map((lang)=>{
                return <div key={lang.id} className='cursor-pointer p-3 border rounded-3 mb-2 d-flex align-items-center gap-1'>
                    <img src={lang.img} />
                    <small className='fw-semibold'>{lang.name}</small>
                </div>
            })}
        </Modal.Body>
         
      </Modal>
      {/* Password Modal */}
      <Modal className='text-black profileModal' show={isPwModalOpen} onHide={()=>setIsPwModalOpen(false)}>
         <Modal.Body>
        <h5>Change Password</h5>
        <small className='d-block mb-3'>Please fill all the required fields.</small>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type="password" placeholder="Current Password" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
         </Form>
            <button className='loginBtn py-2 w-100 rounded-3'>
                <small className="fw-semibold">Apply Changes</small>
            </button>
        </Modal.Body>
         
      </Modal>

    </>
  )
}

export default ProfilePage
