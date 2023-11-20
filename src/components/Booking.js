import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DatePicker } from "antd";
import { differenceInHours, format } from 'date-fns';
import Review from "./Review";
import Axios from "axios";
import './style.css';
import UsersNav from "./UsersNav";
const { RangePicker } = DatePicker;


function Booking() {

    const navigate = useNavigate();
    const { id } = useParams();
    sessionStorage.setItem('bookid', { id })
    const [reviewarr, setReviewarr] = useState([]);
    const [car, setCar] = useState([]);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [totalHours, setTotalHours] = useState(0);
    const [phoneNo, setPhoneNo] = useState(0);
    const [address, setAddress] = useState();
    const name = sessionStorage.getItem('user_name');
    const [reviewtitle, setReviewTitle] = useState();
    const [reviewDes, setReviewDes] = useState();
    const [reviewno, setReviewno] = useState();
    const [rent, setRent] = useState(0);
    const uid = sessionStorage.getItem('userid');

    function selectedTimeSlots(values) {
        if (values && values.length > 0) {
            setFrom(format(values[0].$d, 'MMM dd yyyy HH:00'));
            setTo(format(values[1].$d, 'MMM dd yyyy HH:00'));
            setTotalHours(differenceInHours(values[1].$d, values[0].$d));
            setRent(differenceInHours(values[1].$d, values[0].$d) * car.rent);
        }
        else {
            console.log("Enter values");
        }
    }

    useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/carRoute/" + id)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    setCar(res.data);
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [id]);

    useEffect(() => {
        Axios.get("https://backend-2-zd1q.onrender.com/reviewRoute")
            .then((res) => {
                if (res.status === 200) {
                    const filteredRevArr = res.data.filter((review) => review.cid === id);
                    setReviewarr(filteredRevArr);
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    })

    const handleClick = () => {
        const totalRent = totalHours * car.rent;
        if (!to && !from) {
            alert("Please choose the dates");
        }
        else if (totalRent === 0) {
            alert("Please take a min of 1 hr");
        }
        else if (phoneNo.length !== 10) {
            alert("Enter 10-digits of phone number");
        }
        else if (address.length === 0) {
            alert("Enter your address");
        }
        else {
            const data = { brand: car.brand, pic: car.pic, model: car.model, startDate: from, endDate: to, totalRent: totalHours * car.rent, totalHours: totalHours, name: name, phoneno: phoneNo, address: address, cid: id };
            Axios.post("https://backend-1-lc7h.onrender.com/bookingRoute/new-booking", data)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Booked Successfully");
                        const data1 = { availability: "Not Available" };
                        Axios.put("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + id, data1)
                            .then((res) => {
                                if (res.status === 200) {
                                    console.log(res.data);
                                    navigate("/users/"+uid);
                                }
                                else
                                    Promise.reject();
                            })
                            .catch((err) => alert(err));
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err));
        }

    }

    const handleReview = () => {
        const data = { name: name, reviewtitle: reviewtitle, reviewDes: reviewDes, reviewNo: reviewno, cid: id }
        console.log(data);
        if (reviewno) {
            Axios.post("https://backend-2-zd1q.onrender.com/reviewRoute/create-review", data)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Reviewed Successfully");
                        window.location.reload();
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err));
        }
        else {
            alert("Please give the rating");
        }
    }

    const List = () => {
        return reviewarr.map((val, ind) => {
            return <Review key={ind} obj={val} />
        })
    }

    return (
        <div className="bg-light">
            <UsersNav/>
            <div className="container">
                <div className="row mx-5 pt-5 d-flex align-items-center">
                    <div className="col-8 mb-5 text-center">
                        <div className="">
                            <img src={car.pic} alt="ph1" className=" border rounded booking-image" />
                        </div>
                        <p className="h1 pt-3 fw-bolder">{car.brand} {car.model}</p>
                    </div>
                    <div className="col-4 my-5 text-start bg-light text-dark p-3 rounded">
                        <div>
                            <form className="row justify-content-center">
                                <div className="col-12">
                                    <RangePicker showTime={{ format: "HH" }} format="MMM DD YYYY HH:00" onChange={selectedTimeSlots} />
                                    <p className="text-secondary mt-1">Total hours of booking: {totalHours}</p>
                                </div>
                                <br /><br />
                                <div className="col-12">
                                    <label>Your Phone Number:</label>
                                    <input type="number" className="form-control" onChange={(event) => setPhoneNo(event.target.value)} /><br />
                                    <label>Your Address(Only in Hyderabad):</label>
                                    <textarea onChange={(event) => setAddress(event.target.value)} className="form-control" rows={3} cols={40} ></textarea>
                                    <p className="text-center fw-bold fs-1">&#8377;{rent}</p>
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary w-100" onClick={handleClick} >Book</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-11 card text-start p-3 m-5">
                        <div className="card-title">
                            <h5 className="fw-bolder">Details:</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <ul className="col-6 list-group bg-light">

                                    <li className="list-group-item"><span className="fw-bold">Fuel Type: </span>{car.fuelType}</li>
                                    <li className="list-group-item"><span className="fw-bold">Rent(per hour): </span>{car.rent}</li>
                                    <li className="list-group-item"><span className="fw-bold">Seating Capacity: </span>{car.seating}</li>
                                </ul>
                                <ul className="col-6 list-group">
                                    <li className="list-group-item"><span className="fw-bold">Engine(cc): </span>{car.engine}</li>
                                    <li className="list-group-item"><span className="fw-bold">City Mileage: </span>{car.mileage}</li>
                                    <li className="list-group-item"><span className="fw-bold">Transmission Type: </span>{car.transmission}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="pb-5 text-dark border-2" />
                    <div className="col-12">
                        <div className="row bg-light text-dark border rounded p-3 pb-5 align-items-center">
                            <span className="h3 fw-bolder">Post a Review:</span>
                            <div className="col-11 mt-3">
                                <span className="fw-bold">Rating:</span>&nbsp; &nbsp; &nbsp;
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="rating" id="1" value={1} onChange={(event) => setReviewno(event.target.value)} />
                                    <label className="form-check-label" htmlFor="1">
                                        1
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="rating" id="2" value={2} onChange={(event) => setReviewno(event.target.value)} />
                                    <label className="form-check-label" htmlFor="2">
                                        2
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="rating" id="3" value={3} onChange={(event) => setReviewno(event.target.value)} />
                                    <label className="form-check-label" htmlFor="3">
                                        3
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="rating" id="4" value={4} onChange={(event) => setReviewno(event.target.value)} />
                                    <label className="form-check-label" htmlFor="4">
                                        4
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="rating" id="5" value={5} onChange={(event) => setReviewno(event.target.value)} />
                                    <label className="form-check-label" htmlFor="5">
                                        5
                                    </label>
                                </div>
                                <br /><br />
                                <input className="form-control" required placeholder="Enter review title (required)" onChange={(event) => setReviewTitle(event.target.value)} />
                                <br />
                                <textarea rows={5} maxLength={150} className="form-control" onChange={(event) => setReviewDes(event.target.value)} placeholder="Give a descriptive review upto 150 characters."></textarea>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-warning" onClick={handleReview}>Post</button>
                            </div>
                        </div>
                        <div className="row mt-3 p-3 bg-light rounded">
                            <span className="fw-bolder h3 text-dark">User Reviews: </span>
                            {List()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;