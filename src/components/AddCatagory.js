import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddCatagory() {
    const[catagory,setcatagory]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
      
        axios.post('http://localhost:1234/auth/add_catagory',{catagory})
        .then(result=>{
            
                navigate('/dashboard/catagory') 
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center h-75 '>
        <div className='p-3 rounded w-25 border '>
            
            <h2>Add Catagory</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='catagory'><strong>Catagory:</strong></label>
                    <input type='text' name='catagory'  placeholder='Enter Catagory' onChange={(e)=>setcatagory(e.target.value)} className='form-control rounded-0'/>
                </div>
                
                <button className='btn btn-success w-100 rounded-0'>Add Catagory</button>
                
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddCatagory