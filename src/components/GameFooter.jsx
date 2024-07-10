import React from 'react'
import Marquee from "react-fast-marquee";
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g3.png';
import g4 from '../assets/images/g4.png';
import g5 from '../assets/images/g5.png';
import g6 from '../assets/images/g6.png';
import g8 from '../assets/images/g8.png';
import g9 from '../assets/images/g9.png';
 
const GameFooter = () => {
    const games=[g1,g2,g3,g4,g5,g6,g8,g9]
  return (
    <div className='mt-5 pt-sm-5 pb-5'>
    <Marquee>
          {games.map((item,index)=>{
              return <img src={item} key={index} className='me-4 footerMarqueeImg' />
          })}
    </Marquee>
  </div>
  )
}

export default GameFooter
