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
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <img className="logo" src={logo} alt="logo" width="100px" height="100px" />
          <h1 className="navbar-brand">Space Traveler&apos;s Hub</h1>
          <div className="collapse navbar-collapse" />
          <ul className="nav justify-content-end">
            <li className="nave-item">
              <NavLink className="nav-link" to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/profile">My Profile</NavLink>
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
          <Route exact path="/profile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
