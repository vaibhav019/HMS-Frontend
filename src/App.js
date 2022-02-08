import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Adddoctor from './Components/Admin/Adddoctor';
// import AddPatient from './Components/User/AddPatient';
import AdminHome from './Components/Admin/AdminHome';
//import Footer from './Components/Footer';
import Header from './Components/Header';

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
 //import AdminHome from './Components/Admin/AdminHome';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer} from 'react-toastify';

// import ViewPatients from './Components/Admin/ViewPatients';
// import PatientDetailbymail from './Components/User/PatientDetailbymail';
// import AddAmbulance from './Components/Admin/AddAmbulance';
// import BloodDonorDetails from './Components/Admin/Bloodcamp/BloodDoonerDetails';
// import BloodRequesterDetails from './Components/Admin/Bloodcamp/BloodRequesterDetails';


function App() {
  return(
    <div>
   
    <BrowserRouter>
    <Header role="user"/>

    <Switch>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/userhome" component={UserHome}/>
   <Route exact route="/adminhome" component={AdminHome}/>

    </Switch>
    
    </BrowserRouter>
    </div>
  )
}

export default App;
