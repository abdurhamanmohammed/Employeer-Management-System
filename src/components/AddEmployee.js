import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AddEmployee() {
    const navigate=useNavigate()
    const[employee,setemployee]=useState({
        name:'',
        email:'',
        password:'',
        salary:'',
        address:'',
        image:'',
        catagory_id:'',
        
    });
    const[catagory,setcatagory]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1234/auth/catagory')
        .then(result=>{ 
                setcatagory(result.data.Result)   
        })
        .catch(err=>console.log(err))
    },[]);
    const handelSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData();
        formData.append('name',employee.name);
        formData.append('email',employee.email);
        formData.append('password',employee.password);
        formData.append('address',employee.address);
        formData.append('salary',employee.salary);
        formData.append('image',employee.image);
        formData.append('catagory_id',employee.catagory_id);
        axios.post('http://localhost:1234/auth/add_employee',formData)
        .then(result=>{
                navigate('/dashboard/employee') 
        })
        .catch(err=>console.log(err))
    };
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center mt-3 '>
    <div className='p-3 rounded w-50 border '>
        
        <h3 className='text-center'>Add Employee</h3>
        <form className='row g-1' onSubmit={handelSubmit}>
            <div className='col-12'>
               <label for="inputName" className='form-lable'>Name</label>
               <input type='text' className='form-control rounded-0'
               id='inputName'
               placeholder='Enter Name' onChange={(e)=>setemployee({...employee,name:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputEmail4" className='form-lable'>Email</label>
               <input type='email' className='form-control rounded-0'
               id='inputEmail4'
               placeholder='Enter Email' autoComplete='off' onChange={(e)=>setemployee({...employee,email:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputPassword4" className='form-lable'>Password</label>
               <input type='Password' className='form-control rounded-0'
               id='inputPassword4'
               placeholder='Enter Password' onChange={(e)=>setemployee({...employee,password:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputSalary" className='form-lable'>Salary</label>
               <input type='text' className='form-control rounded-0'
               id='inputSalary'
               placeholder='Enter Salary' autoComplete='off' onChange={(e)=>setemployee({...employee,salary:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputAddress" className='form-lable'>Address</label>
               <input type='text' className='form-control rounded-0'
               id='inputAddress'
               placeholder='adiss,ethiopia' autoComplete='off' onChange={(e)=>setemployee({...employee,address:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="catagory" className='form-lable'>Catagory</label>
               <select name='catagory' id='catagory' className='form-select' onChange={(e)=>setemployee({...employee,catagory_id:e.target.value})}>
                    {catagory.map(c=>{
                        return<option value={c.id}>{c.name}</option>
                    })}
               </select>
            </div>
            <div className='col-12 mb-3'>
               <label for="inputGroupFile01" className='form-lable'>Select Image</label>
               <input type='file' className='form-control rounded-0'
               id='inputGroupFile01'
               name='image'
               onChange={(e)=>setemployee({...employee,image:e.target.files[0]})}/>
            </div>
            
            <div className='col-12'>
                <button type='submit' className='btn btn-primary w-100 '>Add Employee</button>
            </div>
            
        </form>
    </div>
</div>
</div>
  )
}

export default AddEmployee