import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Missions.css';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../../redux/missions/missions';

let flag = true;
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (flag) {
      dispatch(fetchMissions());
      flag = !flag;
    }
  }, []);

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
          {missions.missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td className="desc">{mission.description}</td>
              {mission.reserved ? (
                <>
                  <td>
                    <button type="button" className="btn btn-success">
                      Active Member
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => dispatch(leaveMission(mission.id))}
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Not a Member
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => dispatch(joinMission(mission.id))}
                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
