import React, { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import profile from "../assets/images/profile.png";
import { Form, Modal, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import BASE_URL from "../hooks/baseURL";

export default function UpdateProfile({ user }) {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const language = localStorage.getItem("lan");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(user.name);
    setPhone(user.phone);
  }, [user]);

  const updateProfile = async(e) => {
    e.preventDefault();
    setLoading(true);
    const inputData = {
      name: name,
      phone: phone,
    }
    console.log(inputData);
    try {
        const response = await fetch(BASE_URL + '/profile', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(inputData)
        });

        if (!response.ok) {
            setLoading(false)
        let errorData = await response.json().catch(() => ({}));
    
        if (response.status === 422) {
            setErrMsg("");
            setError(errorData.errors || "Unknown error");
            
        } else if (response.status === 401) {
            setError("");
            setErrMsg(errorData.message || "Unauthorized");
        } else {
            throw new Error('Change Password Failed');
        }
    
        throw new Error('Change Password Failed');
        }

        const data = await response.json();
        setLoading(false);
    
        toast.success("Profile updated successfully.", {
          position: "top-right",
          autoClose: 1000,
          theme: 'dark',
          hideProgressBar: false,
          closeOnClick: true
        });
        setIsEditProfileModalOpen(false);
    } catch (error) {
        // console.error('Error during fetch:', error);
        setLoading(false);
    }
  }

  return (
    <>
    <ToastContainer />
      <div className="profileContainer col-12 mx-auto m-3 m-lg-0 col-lg-12 p-3 rounded-3">
        <div className="text-center">
          {/* <FaRegCircleUser size={90} className="mt-5" /> */}
          <img src={profile} className="mt-4" width={100} alt="" />
          <h3 className="fw-semibold d-block mt-4 text-center">{name}</h3>
          <h5 className="d-block my-2">{user.user_name}</h5>
          {user.email && (
            <div className="mt-5 mb-3 d-flex align-items-center gap-2">
              <CgMail />
              <small>{user.email}</small>
            </div>
          )}

          <div className="d-flex justify-content-center align-items-center gap-2">
            <FaPhoneAlt />
            <small className="d-block">{phone}</small>
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
          <small className="d-block mb-3">
            {language === "english"
              ? "Please fill all the required fields."
              : "ကျေးဇူးပြု၍ အချက်အလက်များဖြည့်ပါ။"}
          </small>
          <Form onSubmit={updateProfile}>
            <div className="row">
              <div className="col-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    {language === "english" ? "Name" : "နာမည်"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={
                      language === "english" ? "Enter Name" : "နာမည်ရေးပါ။"
                    }
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                  {error.name && <small className="text-danger">*{error.name}</small>}
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                {language === "english" ? "Phone" : "ဖုန်း"}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  language === "english" ? "Enter Phone" : "ဖုန်းနံပါတ်ထည့်ပါ။"
                }
                onChange={e => setPhone(e.target.value)}
                value={phone}
              />
              {error.phone && <small className="text-danger">*{error.phone}</small>}
              {errMsg && <small className="text-danger">*{errMsg}</small>}
            </Form.Group>
              <button className="loginBtn py-2 w-100 rounded-3" type="submit">
                {loading ? <Spinner animation="border" size="sm" /> : (
                  <small className="fw-semibold">
                    {language === "english" ? "Apply Changes" : "အတည်ပြုသည်"}
                  </small>
                )}
              </button>
          </Form>
          
        </Modal.Body>
      </Modal>
    </>
  );
}
