import Axios from "axios";
import { useState, useEffect } from "react";
import BookingListRow from "./BookingListRow";
import { AdminNav } from "./AdminNav";

function AdminBookings(){
    
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/bookingRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data);
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <BookingListRow key={ind} obj={val} />
        })
    }
    
    return(
        <div>
            <AdminNav />
            <div className="mt-4">
            <table className="table table-bordered" style={{margin:"0px auto",maxWidth:"80%"}} >
                <thead>
                    <tr>
                        <th className="text-center">User</th>
                        <th className="text-center">Phone Number</th>
                        <th className="text-center">Address</th>
                        <th className="text-center">Brand</th>
                        <th className="text-center">Pic</th>
                        <th className="text-center">Model</th>
                        <th className="text-center">From</th>
                        <th className="text-center">To</th>
                        <th className="text-center">Total Hours</th>
                        <th className="text-center">Total Rent</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
            </div>

        </div>
    )
}

export default AdminBookings;