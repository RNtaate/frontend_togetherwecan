import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './containers/Auth/Signup';
import Home from './components/Home';
import Login from './containers/Auth/Login';
import PrivateRoute from './containers/Auth/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;