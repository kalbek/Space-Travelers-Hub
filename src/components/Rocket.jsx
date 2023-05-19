import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { bookRocket, leaveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card roc">
      <div>
        <img src={image} className="image" alt="rocket" />
      </div>
      <div className="options">
        <h3 className="name">{name}</h3>
        <div className="block">
          <div>
            <span>{reserved ? 'Reserved' : ''}</span>
          </div>
          <div>
            <p className="description">{description}</p>
          </div>
        </div>
        <button
          type="button"
          className={reserved ? 'reserved unbook' : 'reserved book'}
          onClick={
            reserved
              ? () => {
                dispatch(leaveRocket(id));
              }
              : () => {
                dispatch(bookRocket(id));
              }
          }
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.defaultProps = {
  id: '', name: '', description: '', image: '', reserved: false,
};
Rocket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};
