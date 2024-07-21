import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BASE_URL from '../../hooks/baseURL';

export default function Login() {
  const [eye, setEye] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success , setSuccess] = useState('');
    const [loading , setLoading] = useState(false);
    const [data, setData] = useState('');
    const navigate = useNavigate();

    const auth = localStorage.getItem('token');
    const language = localStorage.getItem("lan");
    

    useEffect(() => {
        if(auth){
          navigate('/');
        }
      }, [auth, navigate]);

      const login = (e) =>{
        e.preventDefault();
        setLoading(true);
        const loginData = {
            user_name: name,
            password: password
        };
        // console.log(loginData);
        
        fetch(BASE_URL + '/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        })
          .then(async response => {
            if (!response.ok) {
              setLoading(false);
              let errorData;
              try {
                errorData = await response.json();
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
        
              if (response.status === 422) {
                setErrMsg("");
                setError(errorData.errors);
              }else if (response.status === 401) {
                setError("");
                setErrMsg(errorData.message)
                // console.log(errorData.message);
              }else{
              }
              throw new Error('Login Failed');
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            if (data.data.token) {
                localStorage.setItem('token', data.data.token);
                // window.location.href = "/";
                // console.log("success");
            } else {
                throw new Error('Token not found in response');
            }
          })
          .catch(error => {
          });
      }


  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="p-3 pt-4 bg-transparent rounded-4 border border-1">
                    <div className="text-center mb-4">
                        <img src={logo} width={100} className='rounded-3 shadow border border-warning' alt="" />
                    </div>
                    
                    <h4 className="text-center">{language === "english" ? "Login" : "အကောင့်ဝင်ရန်"}</h4>
                    <form onSubmit={login}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">{language === "english" ? "Username" : "အမည်"}</label>
                            <input type="text" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Username'
                            />
                            {error && error.user_name && <p className="text-danger">{error.user_name}</p>}
                            {errMsg && <p className="text-danger">{errMsg}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">{language === "english" ? "Password" : "စကားဝှက်"}</label>
                            <div className="password">
                              <input type={`${eye ? "text" : "password"}`} 
                              className="form-control" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder='Enter Password'
                              />
                              <i className={`fas fa-${eye ? "eye-slash" : "eye"} cursor-pointer eye`} onClick={()=>setEye(!eye)}></i>
                            </div>

                            {error && error.password && <p className="text-danger">{error.password}</p>}
                        </div>
                        <div className="mt-5 mb-3">
                            {loading ? <Spinner /> : <button type='submit' className="btn btn-outline-light w-100">
                              {language === "english" ? "Login" : "အကောင့်ဝင်ပါ"}
                            </button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
