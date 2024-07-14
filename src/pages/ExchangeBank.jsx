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
            {bank.map((item)=>{
                return <div onClick={()=>{
                    searchParams.get('type')==='top-up'? navigate(`/top-up?bank=${item.value}`) :  navigate(`/with-draw?bank=${item.value}`)
                }} key={item.id} className="p-1 p-sm-2 col-3">
                    <img src={item.img}  className='bankImg img-fluid' />
                    <small className='me-xl-5 pe-xl-5 d-block mt-2 fw-semibold text-center'>{item.name}</small>
                </div>
            })}
        </div>
    </div>
  )
}

export default ExchangeBank
