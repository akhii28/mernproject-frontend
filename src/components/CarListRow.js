import Axios from "axios";
import { Link } from "react-router-dom";

function CarListRow(props){

    const{_id,brand,pic,model,rent,availability,fuelType,seating,mileage,transmission,engine} = props.obj;
    
    const handleClick = () => {
        Axios.delete("https://backend-1-lc7h.onrender.com/carRoute/delete-car/" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record Deleted Successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }

    return(
        <tr className="text-center">
            <td>{brand}</td>
            <td><img src={pic} height="100px" alt="" className="rounded"/></td>
            <td>{model}</td>
            <td>{rent}</td>
            <td>{fuelType}</td>
            <td>{engine}</td>
            <td>{seating}</td>
            <td>{mileage}</td>
            <td>{transmission}</td>
            <td>{availability}</td>
            <td className="justify-content-center">
                <button className="btn btn-sm btn-success">
                    <Link  to={"/edit-car/" + _id} className="text-decoration-none text-light">Edit</Link>
                </button>
                <button onClick={handleClick} className="btn btn-sm btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default CarListRow;