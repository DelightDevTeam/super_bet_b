import React from 'react'
import CurrentBalance from '../components/CurrentBalance'
import kpay from '../assets/images/kpay.png' 
import wave from '../assets/images/wave.png' 
import cb from '../assets/images/cb.png' 
import aya from '../assets/images/aya.png' 
import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

const ExchangeBank = () => {
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const {data: banks} = useFetch(BASE_URL + '/agent-payment-type');


    const bank=[
        {id:1,img:kpay,value:'kpay',name:'KPay'},
        {id:2,img:wave,value:'wave',name:'Wave '},
        {id:3,img:cb,value:'cb',name:'CB'},
        {id:4,img:aya,value:'aya',name:'AYA'},
     ]
    const {data: user} = useFetch(BASE_URL + '/user');

  return (
    <div className='py-4 px-3 px-sm-4'>
        <CurrentBalance user={user} />
        <p className=" my-4 fw-bold">Choose Payment Method</p>
        <div className="row">
            {banks && banks.map((item, index)=>{
                return <div onClick={()=>{
                    searchParams.get('type')==='top-up'? navigate(`/top-up?bank=${item.payment_type_id}`) :  navigate(`/with-draw?bank=${item.value}`)
                }} key={index} className="col-md-1 col-6">
                    <img src={item.payment_type.image_url}  className='bankImg img-fluid rounded-3 shadow' />
                    <small className='d-block mt-3'>{item.payment_type.name}</small>
                </div>
            })}
        </div>
    </div>
  )
}

export default ExchangeBank
