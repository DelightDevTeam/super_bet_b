import React, { useEffect, useState } from 'react'
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
    const [url, setUrl] = useState(BASE_URL + '/agent-payment-type');

    const type = searchParams.get('type');

    useEffect(() => {
        if(type == 'top-up'){
            setUrl(BASE_URL + '/agent-payment-type');
        }else{
            setUrl((BASE_URL + '/payment-type'));
        }
    }, [type])

    const {data: banks} = useFetch(url);
    // console.log(banks);
    // return;

    const {data: user} = useFetch(BASE_URL + '/user');
    const language = localStorage.getItem("lan");

  return (
    <div className='py-4 px-3 px-sm-4'>
        <CurrentBalance user={user} />
        <p className=" my-4 fw-bold">{language === "english" ? "Choose Payment Method" : "ငွေပေးချေမှု နည်းလမ်းရွေးပါ။"}</p>
        <div className="row">
            {type === "top-up" && (
                banks && banks.map((item, index)=>{
                    return <div onClick={()=>{
                        searchParams.get('type')==='top-up'? navigate(`/top-up?bank=${item.id}`) :  navigate(`/with-draw?bank=${item.value}`)
                    }} key={index} className="col-md-1 col-6">
                        <img src={item.payment_type.image_url ?? item.image_url}  className='bankImg img-fluid rounded-3 shadow' />
                        <small className='d-block mt-3'>{item.payment_type.name}</small>
                    </div>
                })
            )}

            {type === "with-draw" && (
                banks && banks.map((item, index)=>{
                    return <div onClick={()=>{
                        navigate(`/with-draw?bank=${item.id}`)
                    }} key={index} className="col-md-1 col-4 mb-5">
                        <img src={item?.image_url}  className='bankImg img-fluid rounded-3 shadow' />
                        <small className='d-block mt-3 text-center'>{item?.name}</small>
                    </div>
                })
            )}
        </div>
    </div>
  )
}

export default ExchangeBank
