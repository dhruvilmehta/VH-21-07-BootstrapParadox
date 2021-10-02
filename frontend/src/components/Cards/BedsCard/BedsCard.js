import React,{useContext} from "react";
import { UserContext } from "../../../UserContext"
import { HospitalContext } from "../../../HospitalContext";
import './BedsCard.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function BedsCard({name,beds,city,state,_id}) {

  const{ user,setUser }= useContext(UserContext)
  // const { hospital, setHospital } = useContext(HospitalContext);
  const bookBed = async () =>{

 
    try {
      const res = await fetch(`http://localhost:5000/book-appointment/${_id}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          user_id : user._id
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      const response = await res.json()
      console.log(response)
      if(response.err){
        toast.error(response.err, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        })
      }else{
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        })
      }
    }catch(err){
       console.log(err)
    }
  }
  return (
    <div className="card border border-secondary">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2">{beds}</h6>
        <p className="card-text">{city},{state}</p>
        <div className="btn btn-primary bg-dark" onClick={() => bookBed(_id)}>Book Now</div>
      </div>
    </div>
  );
}

export default BedsCard;
