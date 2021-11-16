import { React } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../assets/img/logo.png';

import { fetchRocketsCreator } from '../redux/RocketsReducer';

const Rocket = () => {
  const dispatch = useDispatch();
  const getRockets = () => {
    fetchRocketsCreator(dispatch, { Rockets: 'called from rockets' });
  };
  return (
    <div>
      <img src={logo} alt="spaceship" />
      <h2>Falcon</h2>
      <p>description about the rocket</p>
      <button type="button" onClick={getRockets}>Reserve Rocket</button>
    </div>
  );
};
export default Rocket;
