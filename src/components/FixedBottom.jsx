import React from 'react'
import { CiGrid31, CiHome } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'
import { LuWallet2 } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'

const FixedBottom = () => {
    const location=useLocation();
    const items=[
        {id:1,icon:<CiHome size={25} />,name:'Home',link:'/'},
        {id:2,icon:<CiGrid31 size={25} />,name:'Game Log',link:'/win-loss-report'},

        {id:3,icon:<LuWallet2 size={25}/>,name:'History',link:'/history'},
        {id:4,icon:<FaUserCircle size={25} />,name:'Profile',link:'/profile'},
     ]
  return (
    <div className='fixedBottom py-2 shadow-md px-2 px-sm-4 d-flex align-items-center justify-content-between'>
      {items.map((item)=>{
        return <Link className='text-center' to={item.link} key={item.id}>
            {item.icon}
            <p className='fixedBottomTitle fw-semibold'>{item.name}</p>
        </Link>
      })}
    </div>
  )
}

export default FixedBottom
