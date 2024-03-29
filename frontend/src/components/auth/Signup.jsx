import React from 'react'
import { useState,useContext } from 'react'
import "./SignUp.css"

import {UserContext} from "../../UserContext"


const Signup = () => {

const {user,setUser}=useContext(UserContext)
const [details,setDetails]=useState({
  name:'',
  email:'',
  password:'',
  city:"",
  state:"",
  pincode:"",
  aadhar_no:""

})

const [errors,setErrors]=useState({
  usernameError:'',
  emailError:'',
  passwordError:''
})

const submitHandler= async (e)=>{
  console.log('click')
  e.preventDefault();
  setErrors(errors);

try{
  const res = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({name:details.name,email:details.email,password:details.password,city:details.city,pincode:details.pincode,state:details.state,aadhar_no:details.aadhar_no}),
                headers: { 'Content-Type': 'application/json' }
            });
            const data= await res.json()
   
          if (data.errors) {
            setErrors({
              emailError:data.errors.email,
              usernameError:data.errors.name,
              passwordError:data.errors.password

            })

        }
        if (data.user) {
            setUser(data.user)
        }
      }  catch(error){
        console.log(error)
      }
}


    return (
        <div>

    <h1 className="shead">Signup</h1>

<div  className="container signupcontainer mt-5 px-5 pt-3">

    <form onSubmit={e=>submitHandler(e)}>
      
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          id="username"
          name="name"
          value={details.name}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                name: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.usernameError}</div>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          id="email"
          name="email"
          value={details.email}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                email: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.emailError}</div>
    
      <div className="form-group my-3">
        <input
          type="password"
          className="form-control"
          placeholder=" Password *"
          id="password1"
          name="password1"
          value={details.password}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                password: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.passwordError}</div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password *"
          id="password2"
          name="password2"
          // value={details.confirm_password}
          onChange={e=>e.target.value}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder=" Pincode *"
          
          name="pincode"
          value={details.pincode}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                pincode: e.target.value
            }));
          }}
        />
      </div>

      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder=" City *"
          
          name="city"
          value={details.city}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                city: e.target.value
            }));
          }}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder=" State *"
          
          name="state"
          value={details.state}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                state: e.target.value
            }));
          }}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder=" Aadhar No. *"
          
          name="aadhar_no"
          value={details.aadhar_no}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                aadhar_no: e.target.value
            }));
          }}
        />
      </div>
      <div className="form-group my-3 text-center">
        <button type='submit' className="btn btn-dark " >Signup</button>
 
      </div> 
       
    </form>
              
   </div>
    {console.log(user)}
        </div>
    )
}

export default Signup

