import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

export default function Rockets() {
  const { rocketList, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
    if (status === 'succeed') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);
  return (
    <>
      <div>
        {rocketList.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image[0]}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </>
  );
}
