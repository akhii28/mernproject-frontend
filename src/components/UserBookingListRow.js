import { useNavigate} from "react-router-dom";
import Axios from "axios";

function UserBookingListRow(props){
    
    const{_id,brand,pic,model,startDate,endDate,totalRent,totalHours,cid, phoneno, address} = props.obj;
    const navigate = useNavigate();
    const uid = sessionStorage.getItem("userid")

    const handleClick = () => {
        Axios.delete("https://backend-1-lc7h.onrender.com/bookingRoute/delete-booking/" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Booking Deleted Successfully");
                navigate("/users/"+uid);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))

        const data1 = {availability: "Available"};
        console.log(data1);
        Axios.put("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + cid, data1)
        .then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                navigate("/users/"+uid);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));

    }

    return(
        <tr className="text-center">
            <td>{brand}</td>
            <td><img src={pic} height="100px" alt="" className="rounded"/></td>
            <td>{model}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{totalHours}</td>
            <td>{totalRent}</td>
            <td>{phoneno}</td>
            <td>{address}</td>
            <td><button onClick={handleClick} className="btn btn-sm btn-danger mx-3">Delete</button></td>
        </tr>
    )
}

export default UserBookingListRow;