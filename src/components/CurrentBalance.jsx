import React from 'react'

const CurrentBalance = () => {
  return (
    <div className='rounded-3 py-3 px-2 px-sm-4 currentBalance d-flex align-items-center justify-content-between'>
      <h5 className="fw-bold">Current Balance</h5>
      <h5 className="fw-bold d-inline">88,430 
        <small className='ms-2 fw-semibold'>MMK</small> </h5>
    </div>
  )
}

export default CurrentBalance
