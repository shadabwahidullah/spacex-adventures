import './App.css';
import { Router } from 'react-router';
import { NavLink } from 'react-router-dom';

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
        <switch>
          <route exact path="/" />
          <route exact path="/missions" />
        </switch>
      </div>
    </Router>
  );
}

export default App;
