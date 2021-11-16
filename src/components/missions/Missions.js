import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  console.log(missions);
  return (
    <section>
      <div>
        {missions.forEach((mission) => {
          <p key={mission.mission_id}>{mission.mission_name}</p>;
        })}
      </div>
    </section>
  );
};

export default Missions;
