import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    const [name,setName] = useState('');
    const [password,setPasswod] = useState('');
    const [email,setEmail] = useState('');

    const handelSignup = async ()=>{
            try {
                const signupdata = {
                    name: name,
                    email: email,
                    password: password
                }
                console.log(signupdata);
                const response = await axios.post(`https://localhost:7206/api/Registration/registration`, signupdata);
                console.log(response.data);
            } catch (error) {
                    console.log(error.message);
            }
    }
    

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        {/* <form onSubmit={handelSignup}> */}
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=>setName(e.target.value)} type="test" placeholder='Enter Name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>setPasswod(e.target.value)} type="password" placeholder='Enter Password' className='form-control'/>
            </div>
           
            <div className='d-grid'>
                <button type='sumbit' onClick={handelSignup} className='btn-btn-primary'>Sign Up</button>
            </div>
            <p className='text-end mt-2'>
                Already Registered <Link to="/" className='ms-2'>Sign in</Link>
            </p> 
        {/* </form>  */}
    </div>
    </div>
  )
}

export default Signup
