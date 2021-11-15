import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// Components
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <img src="" alt="logo" />
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
