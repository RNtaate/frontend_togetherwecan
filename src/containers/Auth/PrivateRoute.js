import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const logged_in = false;
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

export default PrivateRoute;