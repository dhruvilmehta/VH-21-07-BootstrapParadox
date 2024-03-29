import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from "../../UserContext"
import "./Login.css"
const Signin = () => {
  const { user, setUser } = useContext(UserContext)
  const [details, setDetails] = useState({
    email: '',
    password: '',

  })

  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: ''
  })

  const submitHandler = async (e) => {
    console.log('click')
    e.preventDefault();
    setErrors(errors);

    try {
      const res = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email: details.email, password: details.password }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json()
      console.log(details.email)


      if (data.errors) {
        console.log(data.errors)
        setErrors({
          emailError: data.errors.email,
          passwordError: data.errors.password

        })

      }
      if (data.user) {
        console.log(data.user)
        setUser(data.user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="logincontainer mx-auto px-4 py-md-2">
      <h3 className='text-light'>User Login</h3>
      <form className="loginform" onSubmit={e => submitHandler(e)}>
        <div className="form-group my-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            id="username"
            name="username"
            onChange={(e) => {
              setDetails(prevState => ({
                ...prevState,
                email: e.target.value
              }));
            }}
          />
        </div>
        <div className="text-danger" type="password">{errors.emailError}</div>
        <div className="form-group my-2">
          <input
            type="password"
            className="form-control"
            placeholder=" Password *"
            id="password"
            name="password"
            onChange={(e) => {
              setDetails(prevState => ({
                ...prevState,
                password: e.target.value
              }));
            }}
          />
        </div>
        <div className="text-danger" type="password">{errors.passwordError}</div>
        <div className="row">
          <div className="form-group col-lg-5 text-center my-3 ">
            <button className="loginsubmit btn btn-dark" type="submit">Login</button>
          </div>



        </div>
      </form>

    </div>


  )
}

export default Signin
