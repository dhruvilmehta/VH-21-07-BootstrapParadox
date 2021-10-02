import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from "../../UserContext"
import BedsCard from '../Cards/BedsCard/BedsCard'
import CasesCard from '../Cards/CasesCard/CasesCard'
import YoutubeCard from '../Cards/YoutubeCard/YoutubeCard'
import Casecount from '../casecount/Casecount'
import Vaccination from '../vaccination/vaccination/Vaccination'
import Services from "../services/Services"
import { HospitalHelper , distance} from "../Hospital/HospitalHelper";
import './Home.css'

const Home = () => {
    const { user, setUser } = useContext(UserContext)

    const [currentDataIndia, setCurrentDataIndia] = useState(null)
    const [currentDataWorld, setCurrentDataWorld] = useState(null)


    
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
        if(hospitalList !== undefined){
            const filteredHosp = hospitalList.filter((h)=>{
                console.log(distance(lat,long,h))
                return distance(lat,long,h) < 200
              })
              setFilteredData(filteredHosp)
        }
    
      }, [hospitalList,lat,long]);

    useEffect(async () => {

        const response = await fetch('https://corona.lmao.ninja/v2/countries/India?yesterday');
        const data = await response.json()
        console.log(data)
        setCurrentDataIndia(data)
    }, [])

    useEffect(async () => {

        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json()
        console.log(data)
        setCurrentDataWorld(data)
    }, [])
    return (
        <div>
            {/* <div className='img-text-container'> */}
                <img className='home-image' src="https://cdn.pixabay.com/photo/2020/04/04/13/41/corona-5002341_1280.jpg" alt="" />
            {/* </div> */}
            
            <div className='count-container'>
                <Casecount currentData={currentDataWorld} place={'World'} />
                <Casecount currentData={currentDataIndia} place={'India'} />
            </div>

            <div className='recommended-hosp-heading-container'>
                <div className='recommended-hosp-heading'>Recommended Hospitals</div>
                <Link to='/hospital/index' className='see-all-btn'>
                    See All
                </Link>
            </div>
            <div className='recommended-hosp-container'>
                {FilteredData.slice(0,4).map((hosp, ind) => {

                    return (
                        <BedsCard
                            _id={hosp._id}
                            name={hosp.name}
                            beds={hosp.beds}
                            city={hosp.city}
                            state={hosp.state}
                        />
                    )
                })
                }

            </div>
            <YoutubeCard />
            <div className='vaccination-container'>
                <Vaccination />
            </div>

            <div>
                <Services />
            </div>
        </div>
    )
}

export default Home
