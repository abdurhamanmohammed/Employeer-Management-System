import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
    const{id}=useParams();
    const navigate=useNavigate()
    const[employee,setemployee]=useState({
        name:'',
        email:'',
        salary:'',
        address:'',
        catagory_id:'',
        
    });
    const[catagory,setcatagory]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1234/auth/catagory')
        .then(result=>{ 
                setcatagory(result.data.Result)   
        })
        .catch(err=>console.log(err))
        axios.get('http://localhost:1234/auth/employee/'+id)
        .then(result=>{ 
             setemployee({
                ...employee,
                name:result.data.Result[0].name,
                email:result.data.Result[0].email,
                address:result.data.Result[0].address,
                salary:result.data.Result[0].salary,
             })    
        })
        .catch(err=>console.log(err))
    },[]);
    const handelsubmit=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:1234/auth/edit_employee/"+id,employee)
        .then(result=>{
            navigate('/dashboard/employee')
        }).catch(err=>console.log(err))
    }
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center mt-3 '>
    <div className='p-3 rounded w-50 border '>
        
        <h3 className='text-center'>Edit Employee</h3>
        <form className='row g-1' onSubmit={handelsubmit}>
            <div className='col-12'>
               <label for="inputName" className='form-lable'>Name</label>
               <input type='text' className='form-control rounded-0'
               id='inputName'
               value={employee.name}
               placeholder='Enter Name' onChange={(e)=>setemployee({...employee,name:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputEmail4" className='form-lable'>Email</label>
               <input type='email' className='form-control rounded-0'
                value={employee.email}
               id='inputEmail4'
               placeholder='Enter Email' autoComplete='off' onChange={(e)=>setemployee({...employee,email:e.target.value})}/>
            </div>
          
            <div className='col-12'>
               <label for="inputSalary" className='form-lable'>Salary</label>
               <input type='text' className='form-control rounded-0'
               id='inputSalary'
               value={employee.salary}
               placeholder='Enter Salary' autoComplete='off' onChange={(e)=>setemployee({...employee,salary:e.target.value})}/>
            </div>
            <div className='col-12'>
               <label for="inputAddress" className='form-lable'>Address</label>
               <input type='text' className='form-control rounded-0'
                value={employee.address}
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
            
            
            <div className='col-12'>
                <button type='submit' className='btn btn-primary w-100 '>Edit Employee</button>
            </div>
            
        </form>
    </div>
</div>
</div>
  )
}

export default EditEmployee