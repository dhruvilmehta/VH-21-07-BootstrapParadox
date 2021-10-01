import React from "react";
import { useEffect, useState, useContext } from "react";
import "./Register.css";
import { Redirect } from "react-router-dom";
import { HospitalHelper } from "./HospitalHelper";
import { Location } from "./HospitalHelper";
import { HospitalContext } from "../../HospitalContext";

const Register = () => {
  const { hospital, setHospital } = useContext(HospitalContext);

  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const [FilteredData, setFilteredData] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    pincode: "",
    city: "",
    state: "",
    lat: "",
    long: "",
    address:"",
    phone:""
  });

  useEffect(() => {
    console.log("hello")
    const distance1 = async () => {
      const hospitalDistance = await HospitalHelper();
      // hospitalDistance.map((h) => Location(h));
      console.log(hospitalDistance)
      const filterlocation = () => {
        let hospital_present = hospitalDistance.filter((h) =>
        
        {console.log()
        return Location(h) < 300});
        console.log("hospital_present",hospital_present);
        setFilteredData(hospital_present);
      };
      filterlocation()
    };
    distance1()
  }, []);

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
  });

  const submitHandler = async (e) => {
    console.log("click");
    e.preventDefault();
    setErrors(errors);

    try {
      const res = await fetch("http://localhost:5000/hospital/signup", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          password: details.password,
          city: details.city,
          state: details.state,
          pincode: details.pincode,
          lat: details.lat,
          long: details.long,
          address:details.address,
          phone:details.phone
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.errors) {
        setErrors({
          emailError: data.errors.email,
          usernameError: data.errors.name,
          passwordError: data.errors.password,
        });
      }
      if (data.hospital) {
        console.log(data.hospital);
        setHospital(data.hospital);
        localStorage.setItem("hospital_id",data.hospital._id)
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (hospital) {
    return <Redirect to="/hospital/" />;
  }

  return (
    <div>
      <h1 className="shead">Register Hospital</h1>

      <div className="container signupcontainer mt-5 px-5 pt-3">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
              name="name"
              value={details.name}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="text-danger" type="password">
            {errors.usernameError}
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              id="email"
              name="email"
              value={details.email}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <div className="text-danger" type="password">
            {errors.emailError}
          </div>

          <div className="form-group my-3">
            <input
              type="password"
              className="form-control"
              placeholder=" Password *"
              id="password1"
              name="password1"
              value={details.password}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <div className="text-danger" type="password">
            {errors.passwordError}
          </div>
          <div className="form-group my-2">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password *"
              id="password2"
              name="password2"
              // value={details.confirm_password}
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder=" Pincode *"
              name="pincode"
              value={details.pincode}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  pincode: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude *"
              name="Latitude"
              value={details.Latitude}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  lat: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude *"
              name="Longitude"
              value={details.Longitude}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  long: e.target.value,
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
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  city: e.target.value,
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
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  state: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder=" Number *"
              name="number"
              value={details.phone}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder=" Address *"
              name="address"
              value={details.address}
              onChange={(e) => {
                setDetails((prevState) => ({
                  ...prevState,
                  address: e.target.value,
                }));
              }}
            />
          </div>

          <div className="form-group my-3 text-center">
            <button type="submit" className="btn btn-dark ">
              Signup
            </button>
          </div>
        </form>
      </div>
      {console.log(hospital)}
    </div>
  );
};

export default Register;
