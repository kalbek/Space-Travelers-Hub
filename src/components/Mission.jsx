import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <section className="missions">
        <div />
        <div>
          <ul className="missionsIndex">
            <li>
              <button type="button">Join Mission</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Mission;
