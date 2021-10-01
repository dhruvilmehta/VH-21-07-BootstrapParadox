import React from 'react'
import { useState,useContext } from 'react'
import {UserContext} from "../../UserContext"
const Home = () => {
    const {user,setUser}=useContext(UserContext)
    return (
        <div>
            hi {JSON.stringify(user)}
        </div>
    )
}

export default Home
