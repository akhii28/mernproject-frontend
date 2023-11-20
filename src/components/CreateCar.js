import { useState } from "react";
import CarForm from "./CarForm";
import Axios from "axios";
import { AdminNav } from "./AdminNav";

function CreateCar() {

    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { brand: arr[0], pic: arr[1], model: arr[2], rent: arr[3], availability: arr[4], fuelType:arr[5], seating:arr[6], mileage:arr[7], transmission:arr[8], engine:arr[9] }
        Axios.post("https://backend-1-lc7h.onrender.com/carRoute/create-car", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record added successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <AdminNav />
            <h2 className="text-center m-4 text-light">Add details</h2>
            <form onSubmit={handleSubmit} style={{margin: "0px auto",maxWidth:"50%"}} className="bg-light px-3 rounded">
                <CarForm getState={getState} brandValue={""} picValue={""} modelValue={""} rentValue={""} availabilityValue={""} fuelTypeValue={""} seatingValue={""} mileageValue={""} transmissionValue={""} engineValue={""}>
                    Create
                </CarForm>
            </form>
        </div>
    )

}

export default CreateCar;