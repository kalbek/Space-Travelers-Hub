import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const [reservedMissions, setReservedMissions] = useState(0);
  const [reservdsRockets, setReservedRockets] = useState(0);

  const { missions } = useSelector((store) => store.missions);
  const { rocketList } = useSelector((store) => store.rockets);

  useEffect(() => {
    missions.forEach((mission) => {
      if (mission.reserved) {
        setReservedMissions((count) => count + 1);
      }
    });
    rocketList.forEach((mission) => {
      if (mission.reserved) {
        setReservedRockets((count) => count + 1);
      }
    });
  }, [rocketList, missions]);
  return (
    <>
      <div className="flex-centered pro">
        <table>
          <thead>
            <tr className="flex-start p-1">
              <th className="title-profile flex-start">My Missions</th>
            </tr>
          </thead>
          <tbody>
            {reservedMissions === 0 ? (
              <tr className="flex relative">
                <td className="p-1 w-40 wrap profile">
                  <p>No joined missions.</p>
                </td>
              </tr>
            ) : (
              missions
                .filter((mission) => mission.reserved)
                .map((mission) => (
                  <React.Fragment key={mission.mission_id}>
                    <tr className="flex relative">
                      <td className="p-1 w-40 wrap profile">
                        <p>{mission.mission_name}</p>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
            )}
          </tbody>
        </table>
        <table>
          <thead>
            <tr className="flex-start p-1">
              <th className="title-profile flex-start">My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {reservdsRockets === 0 ? (
              <tr className="flex relative">
                <td className="p-1 w-40 wrap profile">
                  <p>No reserved rockets.</p>
                </td>
              </tr>
            ) : (
              rocketList
                .filter((rocket) => rocket.reserved)
                .map((rocket) => (
                  <React.Fragment key={rocket.id}>
                    <tr className="flex relative">
                      <td className="p-1 w-40 wrap profile">
                        <p>{rocket.name}</p>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyProfile;
