import Axios from "axios";
import { useState, useEffect } from "react";
import CarListRow from "./CarListRow";
import { AdminNav } from "./AdminNav";

function CarList() {

    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/carRoute")
            .then((res) => {
                if (res.status === 200) {
                    setArr(res.data);
                    console.log(res.data);
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <CarListRow key={ind} obj={val} />
        })
    }

    return (
        <div>
            <AdminNav />
            <div className="mt-4">
            <table className="table table-bordered" style={{margin:"0px auto",maxWidth:"80%"}} >
                <thead>
                    <tr>
                        <th className="text-center">Brand</th>
                        <th className="text-center">Pic</th>
                        <th className="text-center">Model</th>
                        <th className="text-center">Rent (per hour)</th>
                        <th className="text-center">Fuel Type</th>
                        <th className="text-center">Engine</th>
                        <th className="text-center">Seating Capacity</th>
                        <th className="text-center">Mileage</th>
                        <th className="text-center">Transmission Type</th>
                        <th className="text-center">Availability</th>
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

export default CarList;