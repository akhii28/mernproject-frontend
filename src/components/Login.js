import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import UsersNav from './UsersNav';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [adminp, setAdminp] = useState();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        axios.post('https://backend-2-zd1q.onrender.com/loginRoute', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.email === email) {
                    console.log("Login Success");
                    alert('Login successful!');
                    sessionStorage.setItem('user_name', result.data.name);
                    sessionStorage.setItem('userid', result.data._id);
                    console.log(result.data._id);
                    navigate("/");
                    console.log(sessionStorage);
                }
                else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    }

    const handleAdmin = (e) => {
        e.preventDefault();
        console.log(adminp);
        if (adminp === "Akhilesh@9") {
            alert("Welcome Admin");
            sessionStorage.setItem("test", "test");
            navigate('/home');
        }
        else {
            alert('Incorrect password! Please try again.');
        }
    }

    return (
        <div className='text-center background-image'>
            <UsersNav />
            <div className="container text-start mt-5 content-container">
            <p className='text-center fw-bold mb-5' style={{fontSize:"60px"}}>Welcome to CarConnect</p>
                <div className='row justify-content-center'>
                    <div className="p-3 rounded border border-3 col-5 m-3">
                        <h2 className='mb-3 fw-bolder' style={{ color: 'rgb(203, 240, 253)' }}>Login</h2>
                        <form onSubmit={handleLogin} className='text-white'>
                            <div className="mb-3 mt-4 text-start">
                                <label className="form-label">
                                    <strong>Email Id</strong>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn text-white" style={{ backgroundColor: 'rgb(36, 177, 228)' }}>User Login</button>
                            <p className='container my-2'>Don&apos;t have an account? <Link to='/signup' className="text-decoration-none">Register</Link></p>

                        </form>

                    </div>
                    <div className='p-3 rounded border border-3 col-5 m-3'>
                        <h2 className='mb-3 fw-bolder' style={{ color: 'rgb(203, 240, 253)' }}>Admin</h2>
                        <form onSubmit={handleAdmin} className='text-white'>
                            <div className="mb-3 text-start">
                                <label className="form-label">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                    onChange={(e) => setAdminp(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn text-white" style={{ backgroundColor: 'rgb(36, 177, 228)' }}>Admin Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login