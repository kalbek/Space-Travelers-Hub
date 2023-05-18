import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

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
          />
        ))}
      </div>
    </>
  );
}
