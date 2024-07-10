import React from 'react'
import '../assets/css/topup.css'
import { Form } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
const TopUpPage = () => {
    const [searchParams]=useSearchParams();
  return (
    <div className='py-4 px-3 px-sm-4 pb-5 mb-5'>
        <div className='topupContainer p-3 rounded-3'>
            <h5 className="fw-bold">Top Up</h5>
            <small>Please fill all the required fields.</small>
            <div className="row my-3">
                <div className="col-sm-6 pe-2">
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                 </div>
                <div className="col-sm-6 ">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone No *</Form.Label>
                    <Form.Control type="text" placeholder="Phone No..." />
                </Form.Group>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-sm-6 pe-2">
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount*</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                 </div>
                <div className="col-sm-6 ">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Payment Method *</Form.Label>
                    <Form.Control readOnly type="text" value={searchParams.get('bank').toUpperCase()} />
                </Form.Group>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-sm-6 pe-2">
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{searchParams.get('bank').toUpperCase()} Phone*</Form.Label>
                    <Form.Control type="text" placeholder={searchParams.get('bank').toUpperCase()+ '  Phone'} />
                </Form.Group>
                 </div>
                <div className="col-sm-6 ">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Screenshot *</Form.Label>
                    <Form.Control   type="file"   />
                </Form.Group>
                </div>
            </div>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Note</Form.Label>
        <Form.Control placeholder='Write note here...' as="textarea" rows={3} />
      </Form.Group>
      <button className="loginBtn w-full fw-bold py-2 rounded-3">Submit</button>
        </div>
    </div>
  )
}

export default TopUpPage
