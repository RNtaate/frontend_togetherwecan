import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { setLoggedInStatus } from '../redux/actions';

const Dashboard = (props) => {

  let {userObj, setUserLoggedInStatus} = props;
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

  return (
    <div>
      <h2 className="text-secondary">Dashboard</h2>
      <h4>Welcome {userObj.user.first_name.toUpperCase()}</h4>

      <Button type="button" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userObj: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedInStatus: (loggedInStatus) => {
      dispatch(setLoggedInStatus(loggedInStatus));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);