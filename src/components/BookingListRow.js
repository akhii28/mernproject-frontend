import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

function BookingListRow(props) {

    const { _id, brand, pic, model, startDate, endDate, totalRent, totalHours, name, cid, phoneno, address } = props.obj;
    const navigate = useNavigate();

    const today = format(new Date(), 'MMM dd yyyy HH:mm');
    console.log(today);


    const check = () => {
        if (today === endDate) {
            Axios.delete("https://backend-1-lc7h.onrender.com/bookingRoute/delete-booking/" + _id)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("deleted as time done");
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err))

            const data1 = { availability: "Available" };
            console.log(data1);
            Axios.put("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + cid, data1)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data);
                        navigate("/admin-bookings");
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err));
        }
    }
    
    check();

    const handleClick = () => {
        Axios.delete("https://backend-1-lc7h.onrender.com/bookingRoute/delete-booking/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record Deleted Successfully");
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))

        const data1 = { availability: "Available" };
        console.log(data1);
        Axios.put("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + cid, data1)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    navigate("/car-list");
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>{phoneno}</td>
            <td>{address}</td>
            <td>{brand}</td>
            <td><img src={pic} height="100px" alt="" /></td>
            <td>{model}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{totalHours}</td>
            <td>{totalRent}</td>
            <td className="justify-content-center">
                <button onClick={handleClick} className="btn btn-sm btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}

export default BookingListRow;