import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// Components
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import logo from './assets/img/logo.png';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <img src={logo} alt="logo" width="100px" height="100px" />
          <ul>
            <li>
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions">Missions</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route exact path="/missions">
            <Missions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
