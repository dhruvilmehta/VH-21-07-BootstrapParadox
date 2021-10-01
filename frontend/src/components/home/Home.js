import React from 'react'
import { useState,useContext } from 'react'
import {UserContext} from "../../UserContext"
import BedsCard from '../Cards/BedsCard/BedsCard'
import CasesCard from '../Cards/CasesCard/CasesCard'
import YoutubeCard from '../Cards/YoutubeCard/YoutubeCard'

const Home = () => {
    const {user,setUser}=useContext(UserContext)
    return (
        <div>
            hi {JSON.stringify(user)}
            <CasesCard />
            <BedsCard />
            <YoutubeCard />
        </div>
    )
}

export default Home
