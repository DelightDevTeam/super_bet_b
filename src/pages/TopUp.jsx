import React, { useEffect, useState } from "react";
import "../assets/css/topup.css";
import { Form, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import { toast, ToastContainer } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";


const TopUpPage = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("");
  const [file, setFile] = useState(null);
  const [transNo, setTransNo] = useState("");
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

   const id = searchParams.get("bank");
   const {data:banks} = useFetch(BASE_URL + '/agent-payment-type');
   const bank = banks && banks.find(bank => bank.id == parseInt(id));
  //  console.log(ibd);

   const handleCopyText = () => {
        navigator.clipboard.writeText(bank?.account_no);
        toast.success("Copied", {
            position: "top-right",
            autoClose: 1000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true
        })
    }

    useEffect(() => {
        setPaymentType(bank && bank?.id);
    }, [bank]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const submit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      if (amount < 1000) {
        setLoading(false);
        toast.error("အနည်းဆုံး ၁၀၀၀ကျပ်မှ စဖြည့်ပေးပါရန်။", {
          position: "top-right",
          autoClose: 1000,
          theme: 'dark',
          hideProgressBar: false,
          closeOnClick: true
        });
        return;
      }
      if (transNo.length !== 6) {
        setLoading(false);
        toast.error("ငွေလွှဲ​နံပါတ် နောက်ဆုံးဂဏန်း၆လုံး ထည့်ပေးပါ။", {
          position: "top-right",
          autoClose: 1000,
          theme: 'dark',
          hideProgressBar: false,
          closeOnClick: true
        });
        return;
      }
    
      const formData = new FormData();
      formData.append('agent_payment_id', paymentType);
      formData.append('amount', amount);
      formData.append('refrence_no', transNo);
      formData.append('note', message ?? "");
    
      try {
        const response = await fetch(BASE_URL + '/transaction/deposit', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        });
    
        if (!response.ok) {
          let errorData = await response.json().catch(() => ({}));
    
          if (response.status === 422) {
            setErrMsg("");
            setError(errorData.errors || "Unknown error");
          } else if (response.status === 401) {
            setError("");
            setErrMsg(errorData.message || "Unauthorized");
          } else {
            throw new Error('Deposit Failed');
          }
    
          throw new Error('Deposit Failed');
        }
    
        const data = await response.json();
        setLoading(false);
    
        toast.success("ငွေသွင်းလွှာ ပို့ပြီးပါပြီ။", {
          position: "top-right",
          autoClose: 1000,
          theme: 'dark',
          hideProgressBar: false,
          closeOnClick: true
        });
    
        setTimeout(() => {
          navigate("/history");
        }, 2000);
      } catch (error) {
        console.error('Error during fetch:', error);
        setLoading(false);
      }
    };

    const language = localStorage.getItem("lan");
      
  
  return (
    <div className="py-4 px-3 px-sm-4 pb-5 mb-5">
        <ToastContainer />
      <div className="topupContainer p-3 rounded-3">
        <h5 className="fw-bold">{language === "english" ? "Top Up" : "ငွေဖြည့်ပေးရန်"}</h5>
        <div className="border border-light bg-transparent rounded-4 p-2 my-3 shadow-lg">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div>
                        <img className="rounded-3 shadow" src={bank?.payment_type?.image_url} width={50} alt="" />
                    </div>
                    <div className="ms-2">
                        <h6 className="fw-bold">{bank?.account_name}</h6>
                        <h6 className="fw-bold">{bank?.account_no}</h6>
                    </div>
                </div>
                <div>
                    <button className="btn text-white" onClick={handleCopyText}>
                    <FaRegCopy size={25} />
                    </button>
                </div>
            </div>
            
        </div>
        <small className="d-block fw-bold">{language === "english" ? "Please fill all the required fields." : "ကျေးဇူးပြု၍ အောက်ပါ အချက်များကို ထည့်ပေးပါ။"}</small>
        
        <form onSubmit={submit}>
            <div className="row my-3">
                <div className="col-sm-6 pe-2">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{language === "english" ? "Amount*" : "ပမာဏ"}</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Amount" 
                        onChange={e => setAmount(e.target.value)}
                        value={amount}
                        />
                    </Form.Group>

                    {/* <div className="mb-3">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>{language === "english" ? "Screenshot *" : "လွှဲပြီးကြောင်းဓာတ်ပုံ"}</Form.Label>
                            <Form.Control 
                            type="file" 
                            onChange={handleFileChange}
                            
                            />
                        </Form.Group>
                        {!preview && error.image && <small className="text-danger fw-bold">{error.image}</small>}
                        {preview && <img className="mt-3" src={preview} alt="preview" style={{ width: '50%', height: 'auto' }} />}
                    </div> */}
                    <div className="mb-3">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>{language === "english" ? "Transaction No (Last 6 digits)" : "ငွေလွှဲနံပတ် (နောက်ဆုံး၆လုံး)"}</Form.Label>
                          <Form.Control 
                          type="text" 
                          placeholder="Enter Transaction No" 
                          onChange={e => setTransNo(e.target.value)}
                          value={transNo}
                          />
                      </Form.Group>
                    </div>

                </div>
                <div className="col-sm-6 ">
                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{language === "english" ? "Note* (Optional)" : "မှတ်စု"}</Form.Label>
                        <Form.Control
                            placeholder={language === "english" ? "Write Your Note" : "မှတ်စု ရေးပါ။"}
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </Form.Group>
                </div>
            </div>
            {loading ? <Spinner /> : <button className="loginBtn w-full fw-bold py-2 rounded-3">
              {language === "english" ? "Submit" : "တင်သွင်းမည်"}
            </button>}
            
        </form>
      </div>
    </div>
  );
};

export default TopUpPage;
