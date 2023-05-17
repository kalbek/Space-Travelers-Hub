import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ name, description, image }) => (
  <div className="card">
    <div className="options">
      <image className="img" src={image} />
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <button type="button" className="reserved">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
