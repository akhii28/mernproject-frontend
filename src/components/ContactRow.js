import { MdDelete } from "react-icons/md";
import Axios from "axios";
function ContactRow(props){
    const{_id,name,email,message} = props.obj;

    const handleClick = () => {
        Axios.delete("https://backend-2-zd1q.onrender.com/contactRoute/delete/"+_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Deleted");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <div className="card m-3">
            <div className="card-body row d-flex align-items-center h6">
                <div className="col-11">
                    {message}
                </div>
                <div className="col-1">
                    <button onClick={handleClick} className="btn btn-danger px-2 pt-0"><MdDelete /></button>
                </div>
            </div>
            <div className="card-footer text-muted" style={{fontSize:"13px"}}>
                By {name}<br/>
                Email: {email}
            </div>
        </div>
    )
}

export default ContactRow;