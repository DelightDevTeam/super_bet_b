import React from 'react'

const CurrentBalance = ({user}) => {
  const language = localStorage.getItem("lan");
  return (
    <div className='rounded-3 py-3 px-2 px-sm-4 currentBalance d-flex align-items-center justify-content-between'>
      <h5 className="fw-bold">{language === "english" ? "Current Balance" : "ငွေလက်ကျန်"}</h5>
      <h5 className="fw-bold d-inline">{user.balance && Number(user.balance).toLocaleString()} 
        <small className='ms-2 fw-semibold'>MMK</small> </h5>
    </div>
  )
}

export default CurrentBalance
