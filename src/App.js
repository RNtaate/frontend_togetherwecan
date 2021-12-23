import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './containers/Auth/Signup';
import Home from './components/Home';
import Login from './containers/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;