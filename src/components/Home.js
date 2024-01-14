import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  let [admintotal, setadmintotal] = useState();
  let [employeetotal, setemployeetotal] = useState();
  let [salarytotal, setsalarytotal] = useState();
  let [admins, setadmins] = useState([]);
  useEffect(() => {
    admincount();
    employeecount();
    salarycount();
    adminrecords();
  }, []);
  const adminrecords = () => {
    axios
      .get("http://localhost:1234/auth/admin_records")
      .then((result) => {
        setadmins(result.data.Result);
      })
      .catch((err) => console.log(err));
  };
  const admincount = () => {
    axios
      .get("http://localhost:1234/auth/admin_count")
      .then((result) => {
        setadmintotal(result.data.Result[0].admin);
      })
      .catch((err) => console.log(err));
  };
  const employeecount = () => {
    axios
      .get("http://localhost:1234/auth/employee_count")
      .then((result) => {
        setemployeetotal(result.data.Result[0].employee);
      })
      .catch((err) => console.log(err));
  };
  const salarycount = () => {
    axios
      .get("http://localhost:1234/auth/salary_count")
      .then((result) => {
        setsalarytotal(result.data.Result[0].salary);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 border shadow-sm w-25 ">
          <div className=" text-center pb-1">
            <h1>Admin</h1>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{admintotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h1>Employee</h1>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeetotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h1>Salary</h1>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>${salarytotal}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Edit</button>
                  <button className="btn btn-warning btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
