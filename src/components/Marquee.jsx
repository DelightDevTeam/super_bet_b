import React from 'react'
import marqueeTop from '../assets/images/marqueeTop.png'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'
const Marquee = () => {
  const {data: bannerText} = useFetch(BASE_URL + "/bannerText");
  // console.log(bannerText);
  return (
    <div className="mt-3">
        <div className=" d-flex align-items-center justify-content-between">
            <div className='loremLine1 ms-2'></div>
            <div className='loremLine2 me-2'></div>
        </div>
        <marquee className='marqueeText py-2 px-4'  direction="left">
        <small>{bannerText && bannerText.text}</small>
    </marquee>
    </div>
  )
}

export default Marquee
