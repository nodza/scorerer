import React from 'react';
import PropTypes from 'prop-types';

const Stats = props => (

  <div>
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>76</td>
        </tr>
      </tbody>
    </table>
  </div>
  );


Stats.propTypes = {
  players: PropTypes.array.isRequired,
};

export default Stats;
