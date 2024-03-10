import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { useState } from 'react'

function Login() {
    const [password,setPasswod] = useState('');
    const [email,setEmail] = useState('');

    const handelLogin= async ()=>{
            try {
                const logindata = {
                    email: email,
                    password: password
                }
                console.log(logindata);
                const response = await axios.post(`https://localhost:7206/api/Registration/login`, logindata);
                console.log(response.data);
            } catch (error) {
                    console.log(error.message);
            }
        }
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        {/*<form>*/}
            <h3 className='text-center'>Login</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>setPasswod(e.target.value)} type="password" placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
             <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
             <label htmlFor="check" className='custom-input-label ms-2'>
                Remember Me
             </label>
            </div>
            <div className='d-grid'>
            <button type='sumbit' onClick={handelLogin} className='btn-btn-primary'>Login</button>
            </div>
            <p className='text-end mt-2'>
                Not Registered<Link to="/signup" className='ms-2'>Sign up</Link>
            </p>
        {/*</form>*/} 
    </div>
    </div>
  )
}

export default Login
