import React from 'react'
import CurrentBalance from '../components/CurrentBalance'
import '../assets/css/exchange.css'
import topup from '../assets/images/topup.png'
import withdraw from '../assets/images/withdraw.png'
import { Link } from 'react-router-dom'

const ExchangePage = () => {
  return (
    <div className='py-4 px-3 px-sm-4'>
      <CurrentBalance/>
      <div style={{textWrap:'nowrap'}} className="d-flex align-items-center justify-content-between cursor-pointer mt-4 ">
        <Link to={'/exchange-bank?type=top-up'} style={{background:'#B0F0F0'}} className="currentBalanceBtn px-4 px-sm-2 pb-2 rounded-3 col-5 pt-2 d-flex align-items-center justify-content-center gap-2">
          <img   src={topup} className='mt-2 currentBalanceImg' />
          <p className="fw-bold currentBalanceText" style={{color:'#00595C'}}>Top Up</p>
        </Link>
        <Link to={'/exchange-bank?type=with-draw'} style={{border:'1px solid #B0F0F0' }} className="currentBalanceBtn px-4 px-sm-2 pt-2 pb-3 rounded-3 col-5 d-flex align-items-center justify-content-center gap-2">
         <img src={withdraw} className='currentBalanceImg'/>
             <p className="fw-bold currentBalanceText ">With Draw</p>
       </Link>
     </div>
    </div>
  )
}

export default ExchangePage
