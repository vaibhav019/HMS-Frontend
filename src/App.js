import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Adddoctor from './Components/Admin/Adddoctor';
// import AddPatient from './Components/User/AddPatient';
import AdminHome from './Components/Admin/AdminHome';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage'
import Login from './Components/Login';
import Register from './Components/Register';
// import Ambulance from './Components/User/Ambulance';
// import BloodDonationPage from './Components/User/BloodDonationPage';
// import BookApointmentPage from './Components/User/BookApointmentPage';
// import BookVaccination from './Components/User/BookVaccination';
// import Feedback from './Components/User/Feedback';
// import ViewDoctors from './Components/User/ViewDoctors';
// import { BrowserRouter , Route, Switch,Link } from "react-router-dom";
import UserHome from './Components/User/UserHome';
import UpdatePatient from './Components/User/UpdatePatient';
import Feedback from './Components/User/Feedback';

import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'

//import AdminHome from './Components/Admin/AdminHome';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer} from 'react-toastify';

// import ViewPatients from './Components/Admin/ViewPatients';
// import PatientDetailbymail from './Components/User/PatientDetailbymail';
// import AddAmbulance from './Components/Admin/AddAmbulance';
// import BloodDonorDetails from './Components/Admin/Bloodcamp/BloodDoonerDetails';
// import BloodRequesterDetails from './Components/Admin/Bloodcamp/BloodRequesterDetails';
//import {role} from './Components/Login'

function App() {
  // console.log(localStorage.getItem('role'),"====================================")

  return (
    <div>

      <BrowserRouter>

        <Header role={localStorage.getItem('role')} />

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/home" component={MainPage} />
          <Route path="/adminhome" component={AdminHome} />
          <Route path="/userhome" component={UserHome} />


        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
