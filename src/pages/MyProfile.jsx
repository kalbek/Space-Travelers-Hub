import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  return (
    <>
      <div className="flex-centered">
        <table>
          <tr className="flex-start p-1">
            <th className="title-profile flex-start">My Missions</th>
          </tr>
          {missions.map(
            (mission) => mission.reserved && (
            <div key={mission.mission_id}>
              <tr className="flex relative">
                <td className="p-1 w-40 wrap profile">
                  <p>{mission.mission_name}</p>
                </td>
              </tr>
            </div>
            ),
          )}
        </table>
        <table>
          <tr>
            <th className="title-profile flex-start">My Rockets</th>
          </tr>
        </table>
      </div>
    </>
  );
};
export default MyProfile;
