import { Link, useNavigate } from "react-router-dom";
import { FaCarSide, FaUserCircle } from 'react-icons/fa';

function UsersNav() {

    const id = sessionStorage.getItem('userid');
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        alert("Logged out successfully");
        navigate("/login");
    }

    return (
        <nav>
            <div className="navbar bg-black text-white">
            <div className="nav text-white ms-3">
                <span className="h4 mt-1 me-4">CarConnect</span>
                <Link to={"/login"} className="nav-link text-light text-decoration-none">Login / Register</Link>
            </div>
            <div className="nav justify-content-center me-3">
                <Link to={"/"} className="nav-link text-light text-decoration-none"> Home </Link>
                <Link to={"/users/" + id} className="nav-link text-light text-decoration-none"> View Cars </Link>
                <Link to="/user-booking" className="nav-link text-light text-decoration-none justify-content-space-between"><FaCarSide className="text-white  a1 me-1" /> Manage Bookings</Link>
                <Link to={"/profile/" + id} className="nav-link text-light text-decoration-none justify-content-space-between"><FaUserCircle className='text-whiteme-1' /> Profile</Link>
                <button className="nav-link text-light text-decoration-none" onClick={logout}>Logout</button>
            </div>
            </div>
            <hr className="text-white border-2 mt-1"/>
        </nav>
    )
}

export default UsersNav;