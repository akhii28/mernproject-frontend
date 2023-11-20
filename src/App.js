import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateCar from './components/CreateCar';
import CarList from './components/CarList';
import EditCar from './components/EditCar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Booking from './components/Booking';
import UserBooking from './components/UserBooking';
import AdminBookings from './components/AdminBookings';
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Main from './components/Main';
import ContactView from './components/ContactView';

function App() {
  return (
    <div id='page-container'>
      <div id='content-wrap'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<ProtectedRouteAdmin component={Dashboard} />} />
            <Route path="/create-car" element={<ProtectedRouteAdmin component={CreateCar} />} />
            <Route path="/car-list" element={<ProtectedRouteAdmin component={CarList} />} />
            <Route path="/edit-car/:id" element={<ProtectedRouteAdmin component={EditCar} />} />
            <Route path='/contact' element={<ProtectedRouteAdmin component={ContactView} />} />
            <Route path="/admin-bookings/" element={<ProtectedRouteAdmin component={AdminBookings} />} />
            <Route path="/users/:id" element={<ProtectedRoute component={Users} />} />
            <Route path="/book/:id" element={<ProtectedRoute component={Booking} />} />
            <Route path="/user-booking" element={<ProtectedRoute component={UserBooking} />} />
            <Route path="/profile/:id" element={<ProtectedRoute component={Profile} />} />
            <Route path="/profileEdit/:id" element={<ProtectedRoute component={EditProfile} />} />
          </Routes>
        </HashRouter>
      </div>
      <footer id="footer">
        <ul className="nav justify-content-center border-top pt-3 mb-3 text-light">
          <li className="nav-item px-2">Kankshith</li>
          <li className="nav-item px-2">Nitya</li>
          <li className="nav-item px-2">Akhilesh</li>
          <li className="nav-item px-2">Veda</li>
          <li className="nav-item px-2">Aadhya</li>
        </ul>
        <p className="text-center text-light pb-3">© 2023 CarConnect</p>
      </footer>
    </div>
  );
}

function ProtectedRoute(props) {
  if (sessionStorage.getItem('userid')) {
    return <props.component {...props} />
  }
  else {
    alert("Login to continue");
    return <Navigate to='/login' />
  }
}

function ProtectedRouteAdmin(props) {
  if (sessionStorage.getItem('test')) {
    return <props.component {...props} />
  }
  else {
    alert("Login to continue");
    return <Navigate to='/login' />
  }
}

export default App;