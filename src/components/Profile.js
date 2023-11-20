import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Axios from "axios";
import UsersNav from "./UsersNav";

function Profile() {

    const { id } = useParams();

    const [data, setData] = useState({ email: "", password: "", name: "",lastname:"",mobile:"",Address:"" });

    useEffect(() => {
        Axios.get("https://backend-2-zd1q.onrender.com/loginRoute/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { email, password, name,lastname,mobile,Address } = res.data;
                    setData({ email, password, name,lastname,mobile,Address });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    })
    return (
        <section>
            <UsersNav />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center text-light h2 fw-bolder mb-4">YOUR PROFILE</p>
                        <div className="card mb-4 bg-light">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-bold">Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-3">
                                        <p className="mb-0 fw-bold">Email</p>
                                    </div>
                                    <div className="col-9">
                                        <p className="text-muted mb-0">{data.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-bold">Password</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="password" disabled value={data.password} className="form-control w-25" />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-bold">Last Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.lastname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-bold">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.mobile}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-bold">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.Address}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-end mt-2">
                                        <Link to={"/profileEdit/" + id}><button className="btn btn-success">Edit</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile;