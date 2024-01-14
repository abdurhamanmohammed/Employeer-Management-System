import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function EmployeeDetail() {
    const[employee,setemployee]=useState([])
    let navigate=useNavigate()
    const{id}=useParams()
    useEffect(()=>{
        axios.get('http://localhost:1234/employee/detail/'+id)
        .then(result=>setemployee(result.data[0]))
        .catch(err=>console.log(err))
    },[]);
    let handellogout=()=>{
        axios.get('http://localhost:1234/employee/logout')
        .then(result=>{
            if(result.data.Status){
            localStorage.removeItem('valid')
            navigate('/')
            }
        })
        .catch(err=>
          console.log(err)
        )
    }
  return (
    <div>
      <div className="dfour">
        <div className="dfive">
          <h4>Employee Management System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <img src={`http://localhost:1234/images/`+employee.image} className='empo'/>
        <div className='d-flex align-items-center flex-column mt-5'>
            <h3>Name:{employee.name}</h3>
            <h3>Email:{employee.email}</h3>
            <h3>Salary:${employee.salary}</h3>
        </div>
        <div>
            <button className='btn btn-primary me-2'>Edit</button>
            <button className='btn btn-danger' onClick={handellogout}> Logout</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail