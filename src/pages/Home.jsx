import React, { useState } from 'react'
import '../assets/css/home.css';
import AppCarousel from '../components/AppCarousel';
import Marquee from '../components/Marquee';
import GameTabs from '../components/GameTabs';
import { Modal } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import GameFooter from '../components/GameFooter';
 
const HomePage = () => {
   return (
    <div style={{overflowX:'hidden'}} className='px-3 px-sm-4 pb-5 mb-5 '>
      <AppCarousel/>
      <Marquee/>
      <GameTabs/>
      <GameFooter/>
    </div>
  )
}

export default HomePage
