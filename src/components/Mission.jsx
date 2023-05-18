import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <table>
        <tr className="flex-start">
          <th className="p-1 w-10 wrap">Mission</th>
          &nbsp;
          <th className="p-1 w-70 wrap">Description</th>
          &nbsp;
          <th className="p-1 w-10 wrap">Status</th>
          &nbsp;
          <th className="p-1 w-10 wrap">&nbsp;</th>
        </tr>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <tr className="flex relative">
              <td className="p-1 w-10 wrap">{mission.mission_name}</td>
              <td className="p-1 w-70 wrap">{mission.description}</td>
              <td className="p-1 w-10 wrap">
                <button type="button" className="btn-not-member ptr">
                  <p>NOT A MEMBER</p>
                </button>
              </td>
              <td className="p-1 w-10 wrap">
                <button
                  type="button"
                  className={
                    !mission.reserved
                      ? 'btn-join-mission ptr'
                      : 'btn-leave-mission ptr'
                  }
                  onClick={() => handleJoinMission({ id: mission.mission_id })}
                >
                  <p>{!mission.reserved ? 'Join Mission' : 'Leave Mission'}</p>
                </button>
              </td>
            </tr>
          </div>
        ))}
      </table>
    </>
  );
};

export default Mission;
