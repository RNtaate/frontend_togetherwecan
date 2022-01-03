import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, userObj, ...rest}) => {
  const logged_in = userObj.loggedin;
  console.log(logged_in)
  return (
    <Route
    {...rest}
    render={ props => {
      return logged_in ? <Component {...props} /> : <Redirect to="/login"/>
    }}
    >
    </Route>
  )
}

const mapStateToProps = (state) => {
  return {
    userObj: state.userReducer
  }
}

export default connect(mapStateToProps,null)(PrivateRoute) ;