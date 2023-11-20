import { useEffect, useState } from "react"
import { AdminNav } from "./AdminNav";
import Axios from "axios";
import ContactRow from "./ContactRow";

function ContactView(){
    
    const [arr,setArr] = useState([]);

    useEffect(()=>{
        Axios.get("https://backend-2-zd1q.onrender.com/contactRoute")
        .then((res)=>{
            if(res.status === 200){
                setArr(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    })

    const List = () => {
        return arr.map((val, ind) => {
            return <ContactRow key={ind} obj={val} />
        })
    }
    
    return(
        <div>
            <AdminNav />
            <div className="container text-light mt-3">
                <h2>People's Messages: </h2>
                {List()}
            </div>
        </div>
    )
}

export default ContactView;