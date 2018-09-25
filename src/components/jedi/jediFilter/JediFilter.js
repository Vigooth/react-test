import React from 'react';
import { connect } from 'react-redux';
import { filterJedi } from '../../../actions/filter';
import './index.css';

const JediFilter = ({ filterJedi }) => {
  return (
    <div id="Home-addJedi-container">
      <div id="Home-addJedi-content">
        <input placeholder="Search a jedi" name="namername" type="text" onChange={ e => {filterJedi({'search': e.target.value})}}/>
      </div>
    </div>
  );
};

export default connect(
  null, { filterJedi }
)(JediFilter);
