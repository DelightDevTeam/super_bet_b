import React, { useState } from 'react';
import '../assets/css/profile.css';
import translate from '../assets/images/language.png';
import winloss from '../assets/images/winloss.png';
import twitter from '../assets/images/twitter.png';
import titok from '../assets/images/titok.png';
import fb from '../assets/images/fb.png';
import en from '../assets/images/en.png';
import mm from '../assets/images/mm.png';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Modal, Spinner } from 'react-bootstrap';
import useFetch from "../hooks/useFetch";
import BASE_URL from '../hooks/baseURL';
import UpdateProfile from '../components/UpdateProfile';
import { toast, ToastContainer } from 'react-toastify';

const ProfilePage = () => {
    const { data: user } = useFetch(BASE_URL + '/user');
    const { data: contact } = useFetch(BASE_URL + '/contact');
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [isPwModalOpen, setIsPwModalOpen] = useState(false);
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const languages = [
        { id: 1, img: en, name: "English", value: 'english' },
        { id: 2, img: mm, name: "မြန်မာ", value: 'myanmar' },
    ];

    const language = localStorage.getItem("lan");

    const changeLanguage = (lan) => {
        localStorage.setItem("lan", lan);
        setIsLanguageModalOpen(false);
        window.location.reload();
    };
    // Change password state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [loader, setLoader] = useState(false);
    const [toastShown, setToastShown] = useState(false);

    const changePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setToastShown(false);
        const inputData = {
            current_password: currentPassword,
            password: newPassword,
            password_confirmation: confirmPassword
        };

        try {
            const response = await fetch(`${BASE_URL}/changePassword`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(inputData)
            });

            if (!response.ok) {
                let errorData = await response.json().catch(() => ({}));
                setLoading(false);

                if (response.status === 422) {
                    setError(errorData.errors || { message: "Unknown error" });
                } else if (response.status === 401) {
                    setErrMsg(errorData.message || "Unauthorized");
                } else {
                    setError({ message: "Change Password Failed" });
                }

                return;
            }

            const data = await response.json();
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setError({});
            setErrMsg("");
            setLoading(false);
            setSuccess("New Password changed successfully.");
            setTimeout(() => {
                setSuccess("");
                setIsPwModalOpen(false);
            }, 2000)
        } catch (error) {
            console.error('Error during fetch:', error);
            setLoading(false);
            setError({ message: "Change Password Failed" });
        }
    };

    const logout = async (e) => {
        e.preventDefault();
        setLoader(true);
        localStorage.removeItem('token');
        window.location.href = "/login";
        try {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (response.ok) {
                setLoader(false);
                window.location.href = "/login";
            } else {
                console.error("Logout failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <>
            <div className='pt-4 px-3 px-sm-4 pb-5 mb-5'>
                <ToastContainer />
                <div className="row cursor-pointer">
                    <div className="col-lg-8 pe-3">
                        <div className='profileContainer p-3 rounded-3'>
                            <h5 className="fw-semibold mb-3">
                                {language === "english" ? "Account Settings" : "အကောင့်သတ်မှတ်ခြင်း"}
                            </h5>
                            <div className="d-flex align-items-center justify-content-between" onClick={() => setIsLanguageModalOpen(true)}>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={translate} alt="Translate" />
                                    <p>{language === "english" ? "Language" : "ဘာသာစကား"}</p>
                                </div>
                                <p>{language === "english" ? "English" : "မြန်မာ"}</p>
                            </div>
                            <div className="my-2 d-flex align-items-center justify-content-between">
                                <Link to={'/win-loss-report'} className='d-flex align-items-center gap-2'>
                                    <img src={winloss} alt="Win/Loss" />
                                    <p>{language === "english" ? "Win / Loss Report" : "အနိုင်/အရှုံးမှတ်တမ်း"}</p>
                                </Link>
                                <p></p>
                            </div>
                            <div className="my-3 d-flex align-items-center justify-content-between">
                                <div onClick={() => setIsPwModalOpen(true)} className='d-flex align-items-center gap-2'>
                                    <img src={translate} alt="Change Password" />
                                    <p>{language === "english" ? "Change Password" : "စကားဝှက်ပြောင်းရန်"}</p>
                                </div>
                            </div>
                            <div className="my-3 d-flex align-items-center justify-content-between">
                                <div onClick={logout} className='d-flex align-items-center gap-2'>
                                    {loader ? (
                                        <Spinner animation="border" size="sm" />
                                    ) : (
                                        <i className="fas fa-right-from-bracket me-1"></i>
                                    )}
                                    <p>{language === "english" ? "Log Out" : "အကောင့်ထွက်ရန်"}</p>
                                </div>
                            </div>
                            <p className="fw-semibold mb-4 border-top pt-3">
                                {language === "english" ? "Contact To Agents" : "မိမိ Agent သို့ ဆက်သွယ်ရန်"}
                            </p>
                            <div className="row">
                                {contact?.email && (
                                    <div className='mb-4 mb-sm-0 col-sm-4'>
                                        <p className="fw-semibold mb-2">{language === "english" ? "Email Us" : "အီးမေးလ်"}</p>
                                        <small>{contact?.email}</small>
                                    </div>
                                )}
                                <div className='col-sm-3'>
                                    <p className="fw-semibold mb-2">{language === "english" ? "Call Us" : "ဖုန်း"}</p>
                                    <small className='d-block'>{contact?.phone}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <UpdateProfile user={user} />
                    </div>
                </div>
            </div>
            {/* Language Modal */}
            <Modal className='text-black profileModal' show={isLanguageModalOpen} onHide={() => setIsLanguageModalOpen(false)}>
                <Modal.Body>
                    <h5>{language === "english" ? "Change Language" : "ဘာသာစကားရွေးချယ်ပါ။"}</h5>
                    {languages.map((lang) => (
                        <div key={lang.id} className='cursor-pointer p-3 border rounded-3 mb-2 d-flex align-items-center gap-1' onClick={() => changeLanguage(lang.value)}>
                            <img src={lang.img} alt={lang.name} />
                            <small className='fw-semibold'>{lang.name}</small>
                            {language === lang.value && <i className="fas fa-check text-success"></i>}
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
            {/* Password Modal */}
            <Modal className='text-black profileModal' show={isPwModalOpen} onHide={() => setIsPwModalOpen(false)}>
                <Modal.Body>
                    <h5>{language === "english" ? "Change Password" : "စကားဝှက်ပြောင်းရန်"}</h5>
                    <small className='d-block mb-3'>
                        {language === "english" ? "Please fill all the required fields." : "ကျေးဇူးပြု၍ အချက်အလက်များဖြည့်ပါ။"}<br/>
                        {success && <small className="alert alert-success d-block mt-3">{success}</small>}
                    </small>

                    <Form onSubmit={changePassword}>
                        <Form.Group className="mb-3" controlId="currentPassword">
                            <Form.Label>{language === "english" ? "Current Password" : "စကားဝှက် အဟောင်းထည့်ပါ။"}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='xxxxxx'
                                onChange={e => setCurrentPassword(e.target.value)}
                                value={currentPassword}
                            />
                            {error.current_password && <small className='text-danger'>*{error.current_password}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newPassword">
                            <Form.Label>{language === "english" ? "New Password" : "စကားဝှက် အသစ်ထည့်ပါ။"}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='xxxxxx'
                                onChange={e => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                            {error.password && <small className='text-danger'>*{error.password}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>{language === "english" ? "Confirm Password" : "စကားဝှက် အသစ်အတည်ပြုပါ။"}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='xxxxxx'
                                onChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                            {error.password_confirmation && <small className='text-danger'>*{error.password_confirmation}</small>}
                        </Form.Group>
                        <button className='loginBtn py-2 w-100 rounded-3' type="submit">
                            {loading ? <Spinner /> : (
                                <small className="fw-semibold">{language === "english" ? "Apply Changes" : "ပြောင်းပါ။"}</small>
                            )}
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ProfilePage;
