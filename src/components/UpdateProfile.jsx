import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import profile from '../assets/images/profile.png'
import { Form, Modal } from "react-bootstrap";


export default function UpdateProfile({ user }) {
    const [isEditProfileModalOpen,setIsEditProfileModalOpen]=useState(false);

    const language = localStorage.getItem("lan");

  return (
    <>
      <div className="profileContainer col-11 mx-auto m-3 m-lg-0 col-lg-4 p-3 rounded-3">
        <div className="text-center">
          {/* <FaRegCircleUser size={90} className="mt-5" /> */}
          <img src={profile} className="mt-4" width={100} alt="" />
          <h3 className="fw-semibold d-block mt-4 text-center">{user.name}</h3>
          <h5 className="d-block my-2">{user.user_name}</h5>
          {user.email && (
            <div className="mt-5 mb-3 d-flex align-items-center gap-2">
              <CgMail />
              <small>{user.email}</small>
            </div>
          )}

          <div className="d-flex justify-content-center align-items-center gap-2">
            <FaPhoneAlt />
            <small className="d-block">{user.phone}</small>
          </div>
          <button
            onClick={() => setIsEditProfileModalOpen(true)}
            className="w-full loginBtn py-1 mt-4"
          >
            {language == "english" ? "Edit Profile" : "ပရိုဖိုင်ပြင်ရန်"}
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        className="text-black profileModal"
        show={isEditProfileModalOpen}
        onHide={() => setIsEditProfileModalOpen(false)}
      >
        <Modal.Body>
          <h5>{language == "english" ? "Edit Profile" : "ပရိုဖိုင်ပြင်ရန်"}</h5>
          <small className='d-block mb-3'>{language === "english" ? "Please fill all the required fields." : "ကျေးဇူးပြု၍ အချက်အလက်များဖြည့်ပါ။"}</small>
          <Form>
            <div className="row">
              <div className="col-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>{language === "english" ? "Name" : "နာမည်"}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={language === "english" ? "Enter Name" : "နာမည်ရေးပါ။"}
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{language === "english" ? "Phone" : "ဖုန်း"}</Form.Label>
              <Form.Control
                value={"0912345689"}
                type="text"
                placeholder={language === "english" ? "Enter Phone" : "ဖုန်းနံပါတ်ထည့်ပါ။"}
              />
            </Form.Group>
          </Form>
          <button className="loginBtn py-2 w-100 rounded-3">
            <small className="fw-semibold">{language === "english" ? "Apply Changes" : "အတည်ပြုသည်"}</small>
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
