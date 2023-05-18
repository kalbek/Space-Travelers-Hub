import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const { rocketList } = useSelector((store) => store.rockets);
  return (
    <>
      <div className="flex-centered">
        <table>
          <tr className="flex-start p-1">
            <th className="title-profile flex-start">My Missions</th>
          </tr>
          {missions
            .filter((mission) => mission.reserved)
            .map((mission) => (
              <div key={mission.mission_id}>
                <tr className="flex relative">
                  <td className="p-1 w-40 wrap profile">
                    <p>{mission.mission_name}</p>
                  </td>
                </tr>
              </div>
            ))}
        </table>
        <table>
          <tr>
            <th className="title-profile flex-start">My Rockets</th>
          </tr>
          {rocketList
            .filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <div key={rocket.id}>
                <tr className="flex relative">
                  <td className="p-1 w-40 wrap profile">
                    <p>{rocket.name}</p>
                  </td>
                </tr>
              </div>
            ))}
        </table>
      </div>
    </>
  );
};
export default MyProfile;
