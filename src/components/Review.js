import Axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import './style.css';

function Review(props) {
    const { _id, name, reviewtitle, reviewDes, reviewNo } = props.obj;
    const username = sessionStorage.getItem('user_name');

    const handleClick = () => {
        if (username === name) {
            Axios.delete("https://backend-2-zd1q.onrender.com/reviewRoute/delete-review/" + _id)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Review Deleted Successfully");
                    }
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err))
        }
        else {
            alert("You can delete only your reviews");
        }
    }

    const Delete = () => {
        if (username === name) {
            return <button className="btn btn-danger px-2 pt-0" onClick={handleClick}><MdDelete /></button>;
        }
    }

    return (
            <div className="col-4">
                <div className="card p-3 my-3 card-review bg-light card-hover">
                    <div className="row d-flex align-items-center">
                        <div className="col-10">
                            <div className="card-title fw-bolder">
                                <FaRegUserCircle className="fs-3" /> {name} (Rating: {reviewNo})
                            </div>
                            <div className="card-body">
                                <span className="fw-bolder h6">{reviewtitle}</span> <br />
                                {reviewDes}
                            </div>

                        </div>
                        <div className="col-2">
                            {Delete()}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Review;
