import { useState,useEffect } from "react";

function ProfileForm(props){
    
    const [email,setEmail] = useState(props.emailValue);
    const [password,setPassword] = useState(props.passwordValue);
    const [name,setName] = useState(props.nameValue);
    const [lastname,setLastname] = useState(props.lastnameValue);
    const[mobile,setMobile] = useState(props.mobileValue);
    const[Address,setAddress] = useState(props.AddressValue)

    useEffect(()=>{
        setEmail(props.emailValue);
        setPassword(props.passwordValue);
        setName(props.nameValue);
        setLastname(props.lastnameValue);
        setMobile(props.mobileValue);
        setAddress(props.AddressValue);
    },[props.emailValue,props.passwordValue,props.nameValue,props.lastnameValue,props.mobileValue,props.AddressValue])

    const arr = [email,password,name,lastname,mobile,Address];

    const handleClick = () => {
        props.getState(arr);
    }
    
    return(
        <div className="container border border-3 rounded mt-5" style={{maxWidth:"40%"}}>
            <div className="my-4">
                <p className="text-center text-light h5 mb-4 fw-bolder"><span className="text-primary">Edit</span> Your Profile</p>
                <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email" type="email" required />
                <input defaultValue={props.passwordValue} onChange={(event)=>setPassword(event.target.value)} className="form-control my-3" placeholder="Enter your password" type="password" required />
                <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} className="form-control my-3" placeholder="Enter your First Name" required />
                <input defaultValue={props.lastnameValue} onChange={(event)=>setLastname(event.target.value)} className="form-control my-3" placeholder="Enter your Last Name" />
                <input defaultValue={props.mobileValue} onChange={(event)=>setMobile(event.target.value)} className="form-control my-3" placeholder="Enter your Phone Number" />
                <input defaultValue={props.AddressValue} onChange={(event)=>setAddress(event.target.value)} className="form-control my-3" placeholder="Enter your Address" />
                <button onClick={handleClick} className="btn btn-success d-block mx-auto my-3" type="submit">Update</button>
            </div>
        </div>
    )
}

export default ProfileForm;