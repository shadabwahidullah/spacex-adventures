import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const [memberValue, setMemberValue] = useState('Not a Member');
  const [memberClass, setMemberClass] = useState('not-member');
  const [missionValue, setMissionValue] = useState('Join Mission');
  const [missionClass, setMissionClass] = useState('join-mission');

  const handleMission = () => {
    setMemberValue(
      memberValue === 'Not a Member' ? 'Active Member' : 'Not a Member',
    );
    setMemberClass(
      memberClass === 'not-member' ? 'active-member' : 'not-member',
    );
    setMissionValue(
      missionValue === 'Join Mission' ? 'Leave Mission' : 'Join Mission',
    );
    setMissionClass(
      missionClass === 'join-mission' ? 'leave-mission' : 'join-mission',
    );
  };

  return (
    <section>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Missions</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td className="desc">{mission.description}</td>
              <td>
                <button type="button" className={`${memberClass}`}>
                  {memberValue}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={`btn ${missionClass}`}
                  onClick={handleMission}
                >
                  {missionValue}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
