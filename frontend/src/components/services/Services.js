import React,{useState,useEffect} from 'react'
import './services.css'
import ServicesCard from './ServicesCard'

function Services() {
    const [states,setStates]=useState([])
    const [data,setData]=useState([])
    const [geo,setGeo]=useState(null)
    const [districts,setDistricts]=useState([])
    const [finalData,setFinalData]=useState([])

    useEffect(() => {
        fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then(response => response.json())
        .then(data => {
            setStates(data.states)
        })

        Geolocation()
        
    }, [])

    const Geolocation = () =>{
        fetch("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0/8dd79c70-0801-11ec-a29f-e381a788c2c0")
        .then(reponse => reponse.json())
        .then(data => {
            console.log("Data",data)
            setGeo(data)
        })
    }

    const getDistricts=(event)=>{
        states.map((item,index)=>{
            if(item.state_name===event.target.value){
                console.log("State ID",item.state_id)
                fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${item.state_id}`)
                .then(response=>response.json())
                .then(data=>{
                    setDistricts(data.districts)
                })
                console.log("SetDistricts",districts)
                

                fetch(`https://covid-resources-backend.herokuapp.com/api/resources/${item.state_name.toLowerCase()}`)
                .then(response=>response.json())
                .then(data=>{
                    setData(data)
                })
            }
        })
    }

    const getServices=(event)=>{
        let district=document.getElementById("selectdistrictsforhospitals").value
        // console.log(event.target.value)
        if(event.target.value==="Hospital"||event.target.value==="Ambulance"||event.target.value==="Oxygen Concentrator"){
            if(event.target.value==="Hospital"){setFinalData([])}
            if(event.target.value==="Ambulance"){setFinalData([])}
            if(event.target.value==="Oxygen Concentrator"){setFinalData([])}
            data.map((item,index)=>{
                if(item.facility===event.target.value && item.city===district){
                    // console.log(item.facility,item.city)
                    setFinalData(prevState=>([...prevState,item]))
                }
            })
        }
    }
    console.log(finalData)

    return (
        <div className="services">
            <h5 className="infoline">To Know about Various Services, Search Here</h5>
            <input type="text" list="statelistforhospitals" id="selectstateforhospitals" placeholder="Enter Your State" onChange={getDistricts}></input>
            <datalist id="statelistforhospitals">
                {states.map((item,index)=>{
                    return <option key={index}>{item.state_name}</option>
                })}
            </datalist>

            <input type="text" list="districtlistforhospitals" id="selectdistrictsforhospitals" placeholder="Enter Your District"></input>
            <datalist id="districtlistforhospitals">
                <option>All</option>
                {districts.map((item,index)=>{
                    return <option key={index}>{item.district_name}</option>
                })}
            </datalist>

            <input type="text" list="serviceslist" id="service" onChange={getServices} placeholder="Enter Type of Service"></input>
            <datalist id="serviceslist">
                <option>Oxygen Concentrator</option>
                <option>Ambulance</option>
                <option>Hospital</option>
            </datalist>

            {finalData.length!==0 && <div className="servicescards">
                {finalData.map((item,index)=>{
                    return <ServicesCard key={index} item={item} />
                })}
            </div>
            }

        </div>
    )
}

export default Services
