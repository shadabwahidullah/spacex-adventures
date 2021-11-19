import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="container row">
      <div className="col-md-6 pt-2">
        <h2>My Missions</h2>
        {missions.missions.map((mission) => {
          const { name, id, reserved } = mission;
          if (reserved) {
            return (
              <h6 className="border outline-secondary m-0 p-3" key={id}>
                {name}
              </h6>
            );
          }
          return null;
        })}
      </div>
      <div className="col-md-6 pt-2">
        <h2>My Rockets</h2>
        {rockets.Rockets.map((rocket) => {
          const { rocket_name: rocketName, id, reserved } = rocket;
          if (reserved) {
            return (
              <h6 className="border outline-secondary m-0 p-3" key={id}>
                {rocketName}
              </h6>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MyProfile;
