import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Employyee from './components/Employyee';
import Catagory from './components/Catagory';
import Profile from './components/Profile';
import AddCatagory from './components/AddCatagory';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Start from './components/Start';
import EmployLogin from './components/EmployLogin';
import EmployeeDetail from './components/EmployeeDetail';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/employee_login' element={<EmployLogin/>}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail/>}></Route>

      <Route path='/dashboard' element={
      <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/dashboard/employee' element={<Employyee/>}></Route>
        <Route path='/dashboard/catagory' element={<Catagory/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        <Route path='/dashboard/add_catagory' element={<AddCatagory/>}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>


      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
