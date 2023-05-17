import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission, description, status }) => (
  <>
    <section className="missions">
      <div>
        <ul className="missionsHead">
          <li>Mission</li>
          <li>Description</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <ul className="missionsIndex">
          <li>
            <h2>{mission}</h2>
          </li>
          <li>
            <p>{description}</p>
          </li>
          <li>
            <h3>{status}</h3>
          </li>
          <li>
            <button type="button">Join Mission</button>
          </li>
        </ul>
      </div>
    </section>

  </>
);

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
