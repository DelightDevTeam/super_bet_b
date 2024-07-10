import React from 'react'
import marqueeTop from '../assets/images/marqueeTop.png'
const Marquee = () => {
  return (
    <div className="mt-3">
        {/* <img src={marqueeTop} className=' ms-2 marqueeTopImg' /> */}
        <div className=" d-flex align-items-center justify-content-between">
            <div className='loremLine1 ms-2'></div>
            <div className='loremLine2 me-2'></div>
        </div>
        <marquee className='marqueeText py-2 px-4'  direction="left">
        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus corporis libero facilis accusantium qui ex voluptates, voluptatem necessitatibus unde quaerat in ducimus non, eligendi illo a, soluta minima placeat.</small>
    </marquee>
    </div>
  )
}

export default Marquee
