import { useParams, useNavigate } from "react-router-dom";
import CarForm from "./CarForm";
import { useEffect, useState } from "react";
import Axios from "axios";
import { AdminNav } from "./AdminNav";

function EditCar() {

    const { id } = useParams();

    const [data, setData] = useState({ brand: "", pic: "", model: "", rent: "",availability: "", fuelType: "", seating:"",mileage:"",transmission:"",engine:""});
    const [newData, setNewData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { brand, pic, model, rent, availability, fuelType, seating, mileage, transmission, engine } = res.data;
                    setData({ brand, pic, model, rent, availability, fuelType, seating, mileage, transmission, engine });
                }
                else
                    Promise.reject()
            })
            .catch((err) => alert(err));
    })

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { brand: newData[0], pic: newData[1], model: newData[2], rent: newData[3], availability: newData[4], fuelType: newData[5], seating: newData[6], mileage: newData[7], transmission: newData[8], engine: newData[9] }
        console.log(data);
        Axios.put("https://backend-1-lc7h.onrender.com/carRoute/update-car/" + id, data)
            .then((res) => {
                if (res.status === 200) {
                    navigate("/car-list");
                    alert("Record updated successfully");
                }
                else
                    Promise.reject()
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <AdminNav />
            <h2 className="text-center m-4 text-light">Edit details</h2>
            <form  onSubmit={handleSubmit} style={{margin: "0px auto",maxWidth:"50%"}} className="bg-light px-3 rounded">
                <CarForm getState={getState} brandValue={data.brand} picValue={data.pic} modelValue={data.model} rentValue={data.rent} availabilityValue={data.availability} fuelTypeValue={data.fuelType} seatingValue={data.seating} mileageValue={data.mileage} transmissionValue={data.transmission} engineValue={data.engine} >
                    Update
                </CarForm>
            </form>
        </div>
    )
}

export default EditCar;