import React from 'react'
import { HospitalContext } from "../../HospitalContext";
import { useEffect, useState, useContext } from "react";
import "./HospitalHome.css"

const HospitalHome = () => {
    const { hospital, setHospital } = useContext(HospitalContext);
    const [appointmentData,setAppointmentData] = useState(null)
useEffect(() => {
    let hos_id=localStorage.getItem("hospital_id");
    fetch(`http://localhost:5000/get-hospital/${hos_id}`).then(res=>res.json()).then(res=>setHospital(res))
}, [])

const [beds, setbeds] = useState(hospital.beds)
 const [icu_beds, seticu_beds] = useState(hospital.icu_beds)
 const [ambulance, setambulance] = useState(hospital.ambulance)   
 const [oxygen_cylinders, setoxygen_cylinders] = useState(hospital.oxygen_cylinders)

const editInventory=(e)=>{
    e.preventDefault()
    console.log(JSON.stringify({hospital_id:hospital._id,beds,icu_beds,ambulance,oxygen_cylinders}))
    fetch("http://localhost:5000/update-hospital",{
        method:"PATCH",
        body:JSON.stringify({hospital_id:hospital._id,beds,icu_beds,ambulance,oxygen_cylinders}),
        headers:{"Content-type":"application/json"}
    }).then(res=>res.json()).then(res=>setHospital(res))
}


const handleAproval=(user_email,user_name,user_id)=>{
    console.log({user_email,user_name,user_id,hospital_name:hospital.name})
    fetch(`http://localhost:5000/approve-appointment/${hospital._id}`,{
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({user_email,user_name,user_id,hospital_name:hospital.name}),
        method:"post"

    }).then(res=>res.json()).then(res=>console.log(res))

}

useEffect(async () =>{
    const response = await fetch(`http://localhost:5000/get-appointments/${hospital._id}`) 
    const res = await response.json()
    console.log(res)
    setAppointmentData(res)
},[])
 return (
        <div className="hospital-dashboard-container">
         
          
            <div className="white-section">
            <h1 className="mt-5">Hospital Dashboard: <span style={{color:"#4535aa"}}>{hospital.name}</span> </h1>
            <h3 className="text-start">Current Stats:</h3>
            <div className="row m-5 p-5">
                <div className="col-md-6 ">
                    <div className="mb-3"><h3 className="stats">{hospital.beds}</h3>BEDS</div>
                    <div className="mt-3"><h3 className="stats">{hospital.icu_beds}</h3>ICU BEDS</div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3"><h3 className="stats">{hospital.ambulance}</h3>AMBULANCES</div>
                    <div className="mt-3"><h3 className="stats">{hospital.oxygen_cylinders}</h3>OXYGEN CYLINDERS</div>
                </div>
            </div>
            </div>


            <div className="purple-section">
            <h3 className="text-start m-5">Edit Inventory:</h3>

<table className="table">
    <tr>
        <td>     <h5>BEDS  </h5></td>
        <td><div><button className="btn btn-danger" onClick={()=>setbeds(beds-1)}>-</button><input value={beds} type="number" className=" text-center mx-2"/>< button className="btn btn-success" onClick={()=>setbeds(beds+1)}>+</button></div></td>
    </tr>
    <tr>
        <td>     <h5>ICU BEDS </h5></td>
        <td><div><button className="btn btn-danger" onClick={()=>seticu_beds(icu_beds-1)}>-</button><input value={icu_beds} type="number" className="text-center mx-2"/>< button className="btn btn-success" onClick={()=>seticu_beds(icu_beds+1)}>+</button></div></td>
    </tr>
    <tr>
        <td>     <h5>AMBULANCES </h5></td>
        <td><div><button className="btn btn-danger" onClick={()=>setambulance(ambulance-1)}>-</button><input value={ambulance} type="number" className="text-center mx-2"/>< button className="btn btn-success" onClick={()=>setambulance(ambulance+1)}>+</button></div></td>
    </tr>
    <tr>
        <td>     <h5>OXYGEN CYLINDERS </h5></td>
        <td><div><button className="btn btn-danger" onClick={()=>setoxygen_cylinders(oxygen_cylinders-1)}>-</button><input value={oxygen_cylinders} type="number" className="text-center mx-2"/>< button className="btn btn-success" onClick={()=>setoxygen_cylinders(oxygen_cylinders+1)}>+</button></div></td>
    </tr>
</table>


<button className="btn btn-success" onClick={e=>editInventory(e)} type="submit">Make Changes</button>
        
            </div>
           
        
            <div className="text-start m-5">
                <h3 >Bookings</h3>
                <div>
                    {
                        appointmentData ? appointmentData.map(data=>{
                            console.log(data.name)
                            return (
                            <div>
                                <div class="card" style={{"width": "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{data.email},{data.city},{data.state}</h6>
    <button className="btn btn-success" onClick={()=>handleAproval(data.email,data.name,data._id)}>Approve</button> 
  </div>
</div>
                            </div>)
                        }) : null
                        // console.log
                    } 
                </div>

            </div>
           
            
            
        </div>
    )
}

export default HospitalHome