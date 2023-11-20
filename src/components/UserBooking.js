import { useEffect, useState } from "react";
import Axios from "axios";
import UsersNav from "./UsersNav";
import UserBookingListRow from "./UserBookingListRow";

function UserBooking() {

    const name = sessionStorage.getItem('user_name');

    const [arr, setArr] = useState([]);

      useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/bookingRoute")
          .then((result) => {
            const filteredArr = result.data.filter((booking) => booking.name === name);
            setArr(filteredArr);
          })
          .catch((err) => console.log(err));
      });

    const List = () => {
        return arr.map((val, ind) => {
            return <UserBookingListRow key={ind} obj={val} />
        })
    }

    return (
        <div>
            <UsersNav />
            <div className="container">
            <table className="table table-bordered table-dark table-striped mt-4">
                <thead>
                    <tr>
                        <th className="text-center">Brand</th>
                        <th className="text-center">Pic</th>
                        <th className="text-center">Model</th>
                        <th className="text-center">From</th>
                        <th className="text-center">To</th>
                        <th className="text-center">Hours</th>
                        <th className="text-center">Total Rent</th>
                        <th className="text-center">Phone Number</th>
                        <th className="text-center">Your Address</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {List()}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default UserBooking;