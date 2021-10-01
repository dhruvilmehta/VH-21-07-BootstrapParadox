import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from "../../UserContext"
import BedsCard from '../BedsCard/BedsCard'
import CasesCard from '../CasesCard/CasesCard'
import YoutubeCard from '../YoutubeCard/YoutubeCard'
import Casecount from '../casecount/Casecount'
import './Home.css'
const Home = () => {
    const { user, setUser } = useContext(UserContext)

    const [currentDataIndia, setCurrentDataIndia] = useState(null)
    const [currentDataWorld, setCurrentDataWorld] = useState(null)

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
            <img className='home-image' src="https://cdn.pixabay.com/photo/2020/04/04/13/41/corona-5002341_1280.jpg" alt="" />
            <div className='count-container'>
                <Casecount currentData={currentDataWorld} place={'World'} />
                <Casecount currentData={currentDataIndia} place={'India'} />
            </div>

            <div className = 'recommended-hosp-heading'>Recommended Hospitals</div>
            <div className ='recommended-hosp-container'>
                <BedsCard />
                <BedsCard />
                <BedsCard />
                <BedsCard />
                <button className='see-all-btn'>
                    See All
                </button>
            </div>
            <YoutubeCard />
        </div>
    )
}

export default Home
