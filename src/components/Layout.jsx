import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import FixedBottom from "./FixedBottom";
import { Modal } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const Layout = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const {data: ads} = useFetch(BASE_URL + '/popup-ads-banner');
  // console.log(ads);

  const auth = localStorage.getItem("token");

  const lan = localStorage.getItem('lan');
  const [language, setLanguage] = useState("english");
  useEffect(() => {
    setLanguage(lan);
  }, [lan]);

  const navigate = useNavigate();

  if(!auth){
    useEffect(() => {
      navigate('/login');
    }, [navigate, auth]);
  }
  
  return (
    <div>
      {location.pathname === "/" && (
        <div className="welcomeText   text-center py-2 text-white">
          {lan === "english" ? "Welcome To Super Bet" : "Super Bet မှ ကြိုဆိုပါတယ်။"}
        </div>
      )}
      <Modal
        className="adsModal"
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
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
          <img
            src={ads?.img_url}
            className="popUpImg"
          />
        </Modal.Body>
      </Modal>
      <Navbar />
      <Outlet />
      <FixedBottom />
    </div>
  );
};

export default Layout;
