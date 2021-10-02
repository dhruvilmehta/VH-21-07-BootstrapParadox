import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import Cookies from 'js-cookie';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import UserHospital from './components/userHospital/UserHospital';
import Navbar from './components/Navbar/Navbar.jsx'
import { HospitalHelper, distance } from './components/Hospital/HospitalHelper';
import Register from './components/Hospital/Register';
import Login from './components/Hospital/Login';
import HospitalHome from "./components/Hospital/HospitalHome"
import { HospitalContext } from './HospitalContext';
import Redirector from './components/Redirector/Redirector';
function App() {

  const [user, setUser] = useState(null)
  const [hospital, setHospital] = useState(null)


  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [hospitalList, setHospitalList] = useState([])
  const [FilteredData, setFilteredData] = useState([]);


  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function (position) {

      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      console.log(position)
    });
  }, [])

  useEffect(async () => {
    const hospList = await HospitalHelper();
    setHospitalList(hospList)
  }, [])

  useEffect(() => {
    console.log("hello")
    const filteredHosp = hospitalList.filter((h) => {
      console.log(distance(lat, long, h))
      return distance(lat, long, h) < 200
    })
    setFilteredData(filteredHosp)
  }, [hospitalList, lat, long]);

  useEffect(() => {
    const cookie = Cookies.get()
    const verifyUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/verifyuser', {
          method: "POST",
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cookie })
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
  }, [])

  return (


    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <HospitalContext.Provider value={{ hospital, setHospital }}>
            {user ? <Navbar /> : null}
            <Switch>
              <Route exact path="/" >{user ? <Home FilteredData={FilteredData}/> : <Redirector />}</Route>
              <Route path="/login" >{!user ? <Signin /> : <Redirect to="/" />}</Route>
              <Route path="/signup" >{!user ? <Signup /> : <Redirect to="/" />}</Route>
              <Route path='/hospital/index'>{<UserHospital FilteredData={FilteredData}/>}</Route>
              <Route exact path="/hospital/">{<HospitalHome />}</Route>
              <Route path="/hospital/register">{<Register />}</Route>
              <Route path="/hospital/login">{<Login />}</Route>
            </Switch>
          </HospitalContext.Provider>
        </UserContext.Provider>


      </div>
    </Router >


  );
}

export default App;