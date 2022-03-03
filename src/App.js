import { useEffect, useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter, Switch, Route,useHistory } from 'react-router-dom';
import Signup from './containers/Auth/Signup';
import Home from './components/Home';
import Login from './containers/Auth/Login';
import PrivateRoute from './containers/Auth/PrivateRoute';
// import userReducer from './redux/reducers/userReducer';
import { setCurrentUser, setLoggedInStatus } from './redux/actions';
import NavbarComponent from './containers/Navbar';




function App(props) {
  let { userObj, setUserLoggedInStatus, setUserObj } = props;
  let history = useHistory();

  let handleLogout = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then((response) => {
      console.log("Successfully looged out yay!");
      console.log(response);
      setUserLoggedInStatus(response.data.logged_in)
      history.push("/login")
    }).catch((error) => {
      console.log('Someting went wrong', error);
    })
  }


  useEffect(() => {

    if(!userObj.loggedin) {
      axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        console.log(response)
        setUserLoggedInStatus(response.data.logged_in)
        setUserObj(response.data.user);
      }).catch((err) => {
        console.log(err)
      })
    }

  }, [])

  return (

    <div className="App">
      {
       Object.values(userObj).includes(null) ? <p>verifying credentials</p> :
          <BrowserRouter>
            {userObj.loggedin && <NavbarComponent currentUser={userObj} handleLogout={handleLogout}/>} 
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}  />
              <PrivateRoute exact path='/home' component={Home} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />

            </Switch>
          </BrowserRouter>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userObj: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedInStatus: (loggedInStatus) => {
      dispatch(setLoggedInStatus(loggedInStatus))
    },
    setUserObj: (currentUser) => {
      dispatch( setCurrentUser(currentUser) )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps )(App);

