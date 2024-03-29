import React,{useEffect,useState} from 'react'
import CentersCard from './CentersCard'

import './Vaccination.css'

function  Vaccination() {
    const [states,setStates]=useState([])
    const [districts,setDistricts]=useState([])
    const [centers,setCenters]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then(response => response.json())
        .then(data => {
            setStates(data.states)
            setIsLoading(false)
        })
        
    }, [])

    const getDistricts = (event)=>{
        states.map((item,index)=>{
            if(item.state_name===event.target.value){
                fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${item.state_id}`)
                .then(response=>response.json())
                .then(data=>{
                setDistricts(data.districts)
            })
            }
        })
    }

    const getCenters=(event)=>{
        districts.map((item,index)=>{
            if(item.district_name===event.target.value){
                fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${item.district_id}&date=02-10-2021`)
                .then(response=>response.json())
                .then(data=>{
                    console.log(data.sessions)
                setCenters(data.sessions)
            })
            }
        })
    }

    return isLoading===true ? "Loading" : <div id="vaccinationslots">
        <h3 className="infoline text-start m-3 text-dark">To know about Vaccination Centers, Search Here</h3>
            <label for="selectstate" className="label text-dark">Enter Your State</label>
            <input type="text" list="statelist" id="selectstate" onChange={getDistricts} placeholder="Enter Your State" className="text-dark"></input>
            <datalist id="statelist">
                {states.map((item,index)=>{
                    return <option key={index}>{item.state_name}</option>
                })}
            </datalist>

            <label for="selectdistricts" className="label text-dark">Enter Your District</label>
            <input type="text" list="districtlist" id="selectdistricts" onChange={getCenters} placeholder="Enter Your District"></input>
            <datalist id="districtlist">
                {districts.map((item,index)=>{
                    return <option key={index}>{item.district_name}</option>
                })}
            </datalist>

            <div id="centers">
                {districts.length!==0 && centers.length===0 && <div>No Centers</div>}
                {centers.map((item,index)=>{
                    return <CentersCard item={item}/>
                })}
            </div>


            
            </div>

        </div>
}

export default Vaccination