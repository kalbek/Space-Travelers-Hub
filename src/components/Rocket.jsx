import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ name, description, image }) => (

  <div className="card">
    <div>
      <img src={image} className="image" alt="rocket" />
    </div>
    <div className="options">
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <button type="button" className="reserved">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;

Rocket.defaultProps = { name: '', description: '', image: '' };
Rocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
