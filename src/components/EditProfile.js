import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import UsersNav from "./UsersNav";
import ProfileForm from "./ProfileForm";

function EditProfile(){

    const { id } = useParams();

    const[data,setData] = useState({email:"",name:"",password:"",lastname:"",mobile:"",Address:""});
    const [newData,setNewData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("https://backend-2-zd1q.onrender.com/loginRoute/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { email, password, name,lastname,mobile,Address } = res.data;
                    setData({ email, password, name, lastname, mobile, Address });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    })
    const getState = (childData) => {
        setNewData(childData);
    }
    
    const handleSubmit = () => {
        const data = {email: newData[0],password:newData[1],name:newData[2],lastname:newData[3],mobile:newData[4],Address:newData[5]}
        Axios.put("https://backend-2-zd1q.onrender.com/loginRoute/update-details/" + id , data)
        .then((res)=>{
            if(res.status === 200){
                navigate("/profile/"+id);
                alert("Updated");
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }

    return(
        <div>
            <UsersNav />
            <form onSubmit={handleSubmit}>
                <ProfileForm getState={getState} emailValue = {data.email} passwordValue={data.password} nameValue={data.name} lastnameValue={data.lastname} mobileValue={data.mobile} AddressValue={data.Address} />
            </form>
        </div>
    )
}



export default EditProfile;