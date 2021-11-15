import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {' '}
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/missions">Missions</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/missions" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
