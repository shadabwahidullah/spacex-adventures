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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img className="logo" src={logo} alt="logo" width="100px" height="100px" />
            <h1 className="navbar-brand">Space Traveler&apos;s Hub</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <ul className="nav ">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/rockets">Rockets</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/missions">Missions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/profile">My Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/rockets">
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
