import React from 'react'
import { CiGrid31, CiHome } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'
import { LuList, LuWallet2 } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'

const FixedBottom = () => {
    const location=useLocation();
    const language = localStorage.getItem('lan');
    const items=[
        {id:1,icon:<CiHome size={25} />,name:'Home',mm_name: "ပင်မ", link:'/'},
        {id:2,icon:<LuWallet2 size={25}/>,name:'Wallet',mm_name: "ပိုက်ဆံအိတ်",link:'/exchange'},
        {id:3,icon:<CiGrid31 size={25} />,name:'Game Log',mm_name: "ဂိမ်းမှတ်တမ်း",link:'/win-loss-report'},
        {id:4,icon:<LuList size={25}/>,name:'History',mm_name: "ငွေမှတ်တမ်း",link:'/history'},
        {id:5,icon:<FaUserCircle size={25} />,name:'Profile',mm_name: "ကျွန်ုပ်",link:'/profile'},
     ]
  return (
    <div className='fixedBottom py-2 shadow-md px-2 px-sm-4 d-flex align-items-center justify-content-between'>
      {items.map((item)=>{
        return <Link className='text-center' to={item.link} key={item.id}>
          <span className='mb-1 d-block'>
            {item.icon}
          </span>
            
            <p className='fixedBottomTitle'>{language === "english" ? item.name : item.mm_name}</p>
        </Link>
      })}
    </div>
  )
}

export default FixedBottom
