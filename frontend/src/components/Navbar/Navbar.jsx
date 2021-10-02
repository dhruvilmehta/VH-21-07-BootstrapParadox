import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../../UserContext"
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { FaHospital, FaSyringe, FaUserCircle } from 'react-icons/fa';
import './Navbar.css'

export default function Navbar() {

    const { user, setUser } = useContext(UserContext)
    const [linksVisible, setLinksVisible] = useState(false)

    const LogoutHandle = async () =>{

        await fetch("http://localhost:5000/logout",{method:"GET",credentials:"include"});
        setUser(null)

    }
    return (
        <div className="navbar">
            <div className="nav-brand" style={{ padding: 0, margin: 0 }}>
                <h6 className='m-0 p-0'>Covid-19</h6>
            </div>

            <ul className="nav-items-1" id={linksVisible ? "hidden" : ""}>
                <li><Link className='nav-items' to='/'>
                    <span className='icons'><AiFillHome /></span>
                    <span> Home</span>
                </Link></li>
                <li><Link className='nav-items' to='/hospital/index'>
                    <span className='icons'><FaHospital /></span>
                    <span> Hospitals</span>

                </Link>
                </li>
                <li><Link className='nav-items' to='/vaccination'>
                    <span className='icons'><FaSyringe /></span>
                    <span>Vaccination</span>
                </Link></li>
                <li><div className='nav-items'>
                    <span className='icons'><FaUserCircle /></span>
                    <span>{user.name}</span>
                </div></li>
                {
                    user ?
                        <li>
                            <div className='nav-items'>
                                <span className='icons'><AiOutlineLogout /></span>
                                <span onClick={()=>LogoutHandle()}>Logout</span>
                            </div>
                        </li>
                        : null
                }
            </ul>

            <button onClick={() => setLinksVisible(!linksVisible)} className="nav-burger">
                <i class="fas fa-bars fa-2x"></i>
            </button>
        </div>
    )
}

