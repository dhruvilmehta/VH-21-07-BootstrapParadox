import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import Cookies from 'js-cookie';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar.jsx'
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const cookie = Cookies.get()
    // document.cookie="user=Tejas";

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

  // console.log (user)


  return (

    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>

          {user ?<Navbar/> : null}
          <Switch>
            <Route exact path="/" >{user ? <Home /> : <Redirect to="/login" />}</Route>
            <Route path="/login" >{!user ? <Signin /> : <Redirect to="/" />}</Route>
            <Route path="/signup" >{!user ? <Signup /> : <Redirect to="/" />}</Route>
          </Switch>
        </UserContext.Provider>


      </div>
    </Router>



  );
}

export default App;