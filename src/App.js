import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// Components
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/missions/Missions';
import logo from './assets/img/logo.png';
import MyProfile from './components/MyProfile';

function App() {
  // if (location.pathname === '/missions') {
  // // }
  // className={(isActive) =>
  //   'nav-link' + (!isActive ? ' ' : 'active')
  // // }
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="100px"
            height="100px"
          />
          <h1 className="navbar-brand">Space Traveler&apos;s Hub</h1>
          <div className="collapse navbar-collapse" />
          <ul className="nav justify-content-end">
            <li className="nave-item">
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li className="nave-item">
              <NavLink to="/missions">Missions</NavLink>
            </li>
            <li className="nave-item">
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/missions">
            <Missions />
          </Route>
          <Route exact path="/profile">
            <MyProfile />
          </Route>
          <Route exact path="/">
            <Rockets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
