import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { fetchRocketsCreator } from '../redux/RocketsReducer';

const Rockets = () => {
  const rockets = useSelector((state) => state.Rockets);
  console.log(rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRocketsCreator(dispatch);
  }, []);
  return (
    <div>
      <Rocket />
    </div>
  );
};

export default Rockets;
