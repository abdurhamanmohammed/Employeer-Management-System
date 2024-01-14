import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Catagory() {
    const[catagory,setcatagory]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:1234/auth/catagory')
        .then(result=>{
              
                setcatagory(result.data.Result)
            
              
              
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='px-5 mt-3' >
        <div className='d-flex justify-content-center'>
            <h3>Catagory List</h3>
        </div>
        <Link to='/dashboard/add_catagory' className='btn btn-success'>Add Catagory</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <th>Name</th>
                </thead>
                <tbody>
                   {
                    catagory.map(c=>(
                        <tr>
                            <td>{c.name}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Catagory