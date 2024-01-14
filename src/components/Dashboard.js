import React from 'react'
import "./dashstyle.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  const anvig=useNavigate()
  axios.defaults.withCredentials=true
  const handlelogout=()=>{
    axios.get('http://localhost:1234/auth/logout')
    .then(result=>{
      if(result.data.Status){
      localStorage.removeItem('valid')
      anvig('/')
      }
    })
    
  }
  return (
    <div className="done">
      <div className="dtwo">
        <div className="dthree">
          <Link to="/dashboard" ><h3>abdy</h3></Link>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/employee">Manage Employee</Link>
            </li>
            <li>
              <Link to="/dashboard/catagory">Catagory</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li onClick={handlelogout}>
              <Link to="/dashboard">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dfour">
        <div className='dfive'>
          <h4>Employee Management System</h4>
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard