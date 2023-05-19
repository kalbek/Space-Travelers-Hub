import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  getMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <table>
        <thead>
          <tr className="flex-start">
            <th className="p-1 w-10 wrap">Mission</th>
            <th className="p-1 w-70 wrap">Description</th>
            <th className="p-1 w-10 wrap">Status</th>
            <th className="p-1 w-10 wrap">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <React.Fragment key={mission.mission_id}>
              <tr className="flex relative">
                <td className="p-1 w-10 wrap">{mission.mission_name}</td>
                <td className="p-1 w-70 wrap">{mission.description}</td>
                <td className="p-1 w-10 wrap">
                  {mission.reserved ? (
                    <>
                      <button type="button" className="btn-active-member ptr">
                        <p>Active Member</p>
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" className="btn-not-member ptr">
                        <p>NOT A MEMBER</p>
                      </button>
                    </>
                  )}
                </td>
                <td className="p-1 w-10 wrap">
                  {mission.reserved ? (
                    <>
                      <button
                        type="button"
                        className="btn-leave-mission ptr"
                        onClick={() => handleLeaveMission({ id: mission.mission_id })}
                      >
                        <p>Leave Mission</p>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn-join-mission ptr"
                        onClick={() => handleJoinMission({ id: mission.mission_id })}
                      >
                        <p>Join Mission</p>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
