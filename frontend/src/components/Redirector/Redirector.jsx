import React from 'react'
import { Link } from 'react-router-dom'
import './Redirector.css'
export default function Redirector() {
    return (
        <div className='redirector-container'>
            <Link className='redirect-btn' to='/login'>User Login</Link>
            <Link className='redirect-btn' to='/hospital/login'>Hospital Login</Link>
        </div>
    )
}

