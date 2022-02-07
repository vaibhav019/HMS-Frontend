import './App.css';
import Adddoctor from './Components/Admin/Adddoctor';
import AddPatient from './Components/User/AddPatient';
//import AdminHome from './Components/Admin/AdminHome';
import Footer from './Components/Footer';
import Header from './Components/Header';

 import Login from './Components/Login';
 import Register from './Components/Register';
import Ambulance from './Components/User/Ambulance';
import BloodDonationPage from './Components/User/BloodDonationPage';
import BookApointmentPage from './Components/User/BookApointmentPage';
import BookVaccination from './Components/User/BookVaccination';
import Feedback from './Components/User/Feedback';
import ViewDoctors from './Components/User/ViewDoctors';
//import { BrowserRouter , Route, Link } from "react-router-dom";
import UserHome from './Components/User/UserHome';
import AdminHome from './Components/Admin/AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import ViewPatients from './Components/Admin/ViewPatients';
import PatientDetailbymail from './Components/User/PatientDetailbymail';
import AddAmbulance from './Components/Admin/AddAmbulance';


function App() {
  const role="admin";
  if(role=="admin"){
    return(
      <div className="App"> 
    <BrowserRouter>
    <ToastContainer/>
    <Header role="admin"/>
    {/*<UserHome/>
    <AddPatient/>
    <ViewPatients/>
    */}
    <Register/>
    <Login/>
    
    <BookApointmentPage/>
    <Adddoctor/>
    <Ambulance/>
    <PatientDetailbymail/>
  <AddPatient/>
  <ViewPatients/>
  <Ambulance/>
  <AddAmbulance/>
 
    </BrowserRouter>
    </div>
    )
  }
  return (
   
    <div className="App"> 
    <BrowserRouter>
    <ToastContainer/>
    <Header role="user"/>
    <AdminHome/>
    {/*
    <Routes>
    <Route exact path="/addpatient" component={AddPatient}/>
    <Route exact path="/viewpatient" component={ViewPatients}/>
    <Route exact path="/" component={Login}/>
    </Routes>
    */}
    
    </BrowserRouter>
    
    
  
  
    </div>
    
  );
}

export default App;
