import {Link, useNavigate} from "react-router-dom";

export function AdminNav(){
    
    const navigate = useNavigate();
    const handleClick = () => {
        alert("Logged out successfully..");
        sessionStorage.clear();
        navigate("/login");
    }
    
    return(
        <nav className="navbar bg-black px-5">
            <Link to="/home" className="navbar-brand mx-3 fw-bold text-light">DASHBOARD</Link>
            <div className="nav">
                <Link className="nav-link text-light" to="/create-car">Add Cars</Link>
                <Link className="nav-link text-light" to="/car-list">All Cars</Link>
                <Link className="nav-link text-light" to="/admin-bookings">All Users Bookings</Link>
                <Link className="nav-link text-light" to="/contact">Messages</Link>
                <button className="btn text-light" onClick={handleClick}>Log Out</button>
            </div>
        </nav>
    )
}