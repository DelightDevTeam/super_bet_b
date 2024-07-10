import React,{useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import FixedBottom from './FixedBottom'
import { Modal } from 'react-bootstrap'
import { CgClose } from 'react-icons/cg'

const Layout = () => {
  const location=useLocation();
  const [isModalOpen,setIsModalOpen]=useState(true);
  return (
    <div>
      {location.pathname==='/' &&   <div className="welcomeText   text-center py-2 text-white">
       Welcome To Super Bet
       </div>}
       <Modal className='adsModal'  show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header>
          <Modal.Title
            style={{ width: "100%" }}
            className="  d-flex justify-content-end"
          >
            <div
              onClick={() => setIsModalOpen(false)}
              className="modalCloseBtn cursor-pointer"
            >
              <CgClose color="black" />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={'https://shwedinker777.online/assets/img/banners_ads/1.png'} className="popUpImg" />
        </Modal.Body>
      </Modal>
        <Navbar/>
      <Outlet/>
      <FixedBottom/>
    </div>
  )
}

export default Layout
