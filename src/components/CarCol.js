import { Link } from "react-router-dom";
import "./style.css";

function CarCol(props){

    const{_id,brand,pic,model,rent} = props.obj;

    return(
        <div className="col-4 card-group mb-4" id="car">
            <div className="card card-hover px-3">
                <div className="card-image d-flex justify-content-center">
                    <img className="mt-3 image" src={pic} alt=""/>
                </div>
                <div className="card-title">
                    {brand} {model}
                </div>
                <div className="card-body text-start">
                    <p>Rent per hour: {rent}</p>
                    <Link to={"/book/" + _id} className="btn btn-primary">Book</Link>
                </div>
            </div>
        </div>
    )
}

export default CarCol;