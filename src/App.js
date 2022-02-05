import './App.css';
import Adddoctor from './Components/Admin/Adddoctor';
import AddPatient from './Components/User/AddPatient';
//import AdminHome from './Components/Admin/AdminHome';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import AdminHome from './Components/AdminHome';
 import Login from './Components/Login';
 import Register from './Components/Register';
import Ambulance from './Components/User/Ambulance';
import BloodDonationPage from './Components/User/BloodDonationPage';
import BookApointmentPage from './Components/User/BookApointmentPage';
import BookVaccination from './Components/User/BookVaccination';
import Feedback from './Components/User/Feedback';
import ViewDoctors from './Components/User/ViewDoctors';
//import { BrowserRouter , Route, Link } from "react-router-dom";
//import UserHome from './Components/User/UserHome';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import ViewPatients from './Components/Admin/ViewPatients';
import PatientDetailbymail from './Components/User/PatientDetailbymail';


function App() {

  return (
   
    <div className="App"> 
    
    <Header/>
    
  
  
    </div>
    
  );
}

export default App;
