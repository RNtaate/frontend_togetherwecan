import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './containers/Auth/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signup' component={Signup} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;