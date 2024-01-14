import React, { useState } from 'react'
import "./logstyle.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const[values,setvalues]=useState({
        email:'',
        password:''
    })
    const[error,seterror]=useState(null)
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    const handlesubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:1234/auth/adminlogin',values)
        .then(result=>{
            if(result.data.loginStatus){
                localStorage.setItem('valid',true)
                navigate('/dashboard')
            }
            else{
                seterror(result.data.Error)
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-danger '>
                {error && error}
            </div>
            <h2>Login page</h2>
            <form onSubmit={handlesubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='Enter Email' onChange={(e)=>setvalues({...values,email :e.target.value})} className='form-control rounded-0'/>
                </div>
                <div  className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' name='password' autoComplete='off' placeholder='Enter password'
                    onChange={(e)=>setvalues({...values,password :e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0'>Log in</button>
                <div  className='mb-1 mt-2'>
                    <input type='checkbox' name='tick' id='tick' />
                    <label htmlFor='password'>you are agree with terms&conditions</label>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login