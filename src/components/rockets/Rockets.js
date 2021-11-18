import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { fetchRocketsCreator } from '../../redux/RocketsReducer';

let flag = true;

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (flag) {
      fetchRocketsCreator(dispatch);
      flag = !flag;
    }
  }, []);
  return (
    <div className="rockets-list">
      {rockets.Rockets.map((rocket) => {
        const { id } = rocket;
        return <Rocket key={id} rocket={rocket} />;
      })}
    </div>
  );
};

export default Rockets;
