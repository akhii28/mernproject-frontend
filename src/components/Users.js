import Axios from "axios";
import CarCol from "./CarCol";
import { useState, useEffect } from "react";
import UsersNav from "./UsersNav";


function Users() {

    const [arr, setArr] = useState([]);
    const availability = "Available";
    

    useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/carRoute")
            .then((res) => {
                const filteredArr = res.data.filter((booking)=>booking.availability === availability);
                setArr(filteredArr);
            })
            .catch((err) => alert(err))
    })

    const List = () => {
        return arr.map((val, ind) => {
            return <CarCol key={ind} obj={val} />
        })
    }



    return (
        <div>
            <UsersNav ></UsersNav>
            <div className="container">
                <div className="row mt-5">
                    {List()}
                </div>
            </div>
        </div>
    )
}

export default Users;