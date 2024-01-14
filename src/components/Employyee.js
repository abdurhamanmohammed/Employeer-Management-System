import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Employyee() {
    const[employee,setEmployee]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:1234/auth/employee')
        .then(result=>{
                setEmployee(result.data.Result) 
        })
        .catch(err=>console.log(err))
    },[]);
   let handeldelete=(id)=>{
    axios.delete('http://localhost:1234/auth/delete_employee/'+id)
    .then(result=>{
        window.location.reload()
    }).catch(err=>console.log(err))
   }
  return (
    <div className='px-5 mt-3' >
        <div className='d-flex justify-content-center'>
            <h3>Employee List</h3>
        </div>
        <Link to='/dashboard/add_employee' className='btn btn-success'>Add Employee</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   {
                    employee.map(e=>(
                        <tr>
                            <td>{e.name}</td>
                            <td><img src={'http://localhost:1234/images/'+e.image}  className='employye_img'/></td>
                            <td>{e.email}</td>
                            <td>{e.address}</td>
                            <td>{e.salary}</td>
                            <td>
                                <Link to={`/dashboard/edit_employee/`+e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                                <button onClick={()=>handeldelete(e.id)} className='btn btn-warning btn-sm'>Delete</button>
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Employyee