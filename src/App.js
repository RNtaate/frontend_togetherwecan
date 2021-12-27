import { useEffect, useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './containers/Auth/Signup';
import Home from './components/Home';
import Login from './containers/Auth/Login';
import PrivateRoute from './containers/Auth/PrivateRoute';
// import userReducer from './redux/reducers/userReducer';
import { setLoggedInStatus } from './redux/actions';




function App(props) {
  let { userObj, setUserLoggedInStatus } = props;


  useEffect(() => {

    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        console.log(response)
        setUserLoggedInStatus(response.data.logged_in)
      }).catch((err) => {
        console.log(err)
      })

  }, [])

  return (

    <div className="App">
      {
        userObj.loggedin == null ? <p>verifying credentials</p> :
          <BrowserRouter>
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps )(App);

