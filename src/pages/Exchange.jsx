import React from 'react'
import CurrentBalance from '../components/CurrentBalance'
import '../assets/css/exchange.css'
import topup from '../assets/images/topup.png'
import withdraw from '../assets/images/withdraw.png'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

const ExchangePage = () => {
  const {data:user} = useFetch(BASE_URL + '/user');
  const language = localStorage.getItem("lan");
  // console.log(user);
  return (
    <div className='py-4 px-3 px-sm-4'>
      <CurrentBalance user={user}/>
      <div style={{textWrap:'nowrap'}} className="d-flex align-items-center justify-content-between cursor-pointer mt-4 ">
        <Link to={'/exchange-bank?type=top-up'} style={{background:'#B0F0F0'}} className="currentBalanceBtn px-4 px-sm-2 pb-2 rounded-3 col-5 pt-2 d-flex align-items-center justify-content-center gap-2">
          <img   src={topup} className='mt-2 currentBalanceImg' />
          <p className="fw-bold currentBalanceText" style={{color:'#00595C'}}>{language === "english" ? "Top Up" : "ငွေသွင်း"}</p>
        </Link>
        <Link to={'/exchange-bank?type=with-draw'} style={{border:'1px solid #B0F0F0' }} className="currentBalanceBtn px-4 px-sm-2 pt-2 pb-3 rounded-3 col-5 d-flex align-items-center justify-content-center gap-2">
         <img src={withdraw} className='currentBalanceImg'/>
             <p className="fw-bold currentBalanceText ">{language === "english" ? "Withdraw" : "ငွေထုတ်"}</p>
       </Link>
     </div>
    </div>
  )
}

export default ExchangePage
