import React,{useState,useEffect} from 'react'
import BedsCard from '../Cards/BedsCard/BedsCard';
import { HospitalHelper , distance} from "../Hospital/HospitalHelper";

export default function UserHospital() {

    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [hospitalList,setHospitalList] = useState([])
    const [FilteredData, setFilteredData] = useState([]);


    useEffect(()=>{

        navigator.geolocation.getCurrentPosition(function (position) {
          
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
          console.log(position)
        });
      },[])

      useEffect(async ()=>{
        const hospList = await HospitalHelper();
        setHospitalList(hospList)
      },[])

      useEffect(() => {
        console.log("hello")
        const filteredHosp = hospitalList.filter((h)=>{
          console.log(distance(lat,long,h))
          return distance(lat,long,h) < 200
        })
        setFilteredData(filteredHosp)
      }, [hospitalList,lat,long]);

    return (
        <div>
            <div className='recommended-hosp-heading'>Recommended Hospitals</div>
            <div className='recommended-hosp-container'>
               { FilteredData.map((hosp) =>{
                   return <BedsCard 
                   _id = {hosp._id}
                   name={hosp.name}
                   beds = {hosp.beds}
                   city = {hosp.city}
                   state = {hosp.state}
                   />
               })
               }
                
            </div>
        </div>
    )
}
