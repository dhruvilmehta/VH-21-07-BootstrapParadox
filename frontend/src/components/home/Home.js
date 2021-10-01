import React from 'react'
import { useState,useContext } from 'react'
import {UserContext} from "../../UserContext"
import BedsCard from '../BedsCard/BedsCard'
import CasesCard from '../CasesCard/CasesCard'
import Vaccination from '../vaccination/Vaccination'
import YoutubeCard from '../YoutubeCard/YoutubeCard'

const Home = () => {
    const {user,setUser}=useContext(UserContext)
    return (
        <div>
            hi {JSON.stringify(user)}
            {/* <CasesCard /> */}
            {/* <BedsCard /> */}
            {/* <YoutubeCard /> */}
            <Vaccination />
        </div>
    )
}

export default Home
