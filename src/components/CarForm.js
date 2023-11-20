import { useState, useEffect } from "react";

function CarForm(props){
    
    const [brand,setBrand] = useState(props.brandValue);
    const [pic,setPic] = useState(props.picValue);
    const [model,setModel] = useState(props.modelValue);
    const [rent,setRent] = useState(props.rentValue);
    const [fuelType,setFuelType] = useState(props.fuelTypeValue);
    const [availability, setAvailability] = useState(props.availabilityValue);
    const [seating,setSeating] = useState(props.seatingValue);
    const [mileage,setMileage] = useState(props.mileageValue);
    const [transmission,setTransmission] = useState(props.transmissionValue);
    const [engine,setengine] = useState(props.engineValue);
    useEffect(()=>{
        setBrand(props.brandValue);
        setPic(props.picValue);
        setModel(props.modelValue);
        setRent(props.rentValue);
        setAvailability(props.availabilityValue);
        setFuelType(props.fuelTypeValue);
        setSeating(props.seatingValue);
        setMileage(props.mileageValue);
        setTransmission(props.transmissionValue);
        setengine(props.engineValue);
    },[props.brandValue,props.picValue,props.modelValue,props.rentValue,props.availabilityValue,props.fuelTypeValue,props.seatingValue,props.mileageValue,props.transmissionValue,props.engineValue])
    
    const arr = [brand, pic, model, rent, availability, fuelType, seating, mileage, transmission, engine]

    const handleClick = () => {
        props.getState(arr);
    }

    return(
        <div className=" mt-2 py-2">
            <input defaultValue={props.brandValue} onChange={(event)=>setBrand(event.target.value)} className="form-control my-3" placeholder="Enter car brand" required/>
            <input defaultValue={props.picValue} onChange={(event)=>setPic(event.target.value)} className="form-control my-3" placeholder="Enter the URL of Pic" />
            <input defaultValue={props.modelValue} onChange={(event)=>setModel(event.target.value)} className="form-control my-3" placeholder="Enter car model" required/>
            <input defaultValue={props.rentValue} onChange={(event)=>setRent(event.target.value)} className="form-control my-3" placeholder="Enter the rent per hour" required/>
            <input defaultValue={props.availabilityValue} onChange={(event)=>setAvailability(event.target.value)} className="form-control my-3" placeholder="Enter the car availability" required/>
            <input defaultValue={props.fuelTypeValue} onChange={(event)=>setFuelType(event.target.value)} className="form-control my-3" placeholder="Enter the fuel type of the car" required/>
            <input defaultValue={props.seatingValue} onChange={(event)=>setSeating(event.target.value)} className="form-control my-3" placeholder="Enter the Seating capacity" required/>
            <input defaultValue={props.mileageValue} onChange={(event)=>setMileage(event.target.value)} className="form-control my-3" placeholder="Enter the Mileage" required/>
            <input defaultValue={props.transmissionValue} onChange={(event)=>setTransmission(event.target.value)} className="form-control my-3" placeholder="Enter the Transmission type" required/>
            <input defaultValue={props.engineValue} onChange={(event)=>setengine(event.target.value)} className="form-control my-3" placeholder="Enter the engine of the car" required/>
            <button onClick={handleClick} className="btn btn-success d-block mx-auto my-3" type="submit">{props.children}</button>
        </div>
    )
}

export default CarForm;