import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJedi, deleteJedi } from '../../../actions/jedi';
import { filters } from '../../../actions/filter';
import { JediItem } from "./JediItem";
import './index.css'

class JediList extends Component {

  componentWillMount() {
    this.props.fetchJedi();
  }

  render() {
    const { jedi, deleteJedi } = this.props;
    return (
      <div className="jedi-list">
        {jedi.map((jedi, index) => (
          <JediItem
            key={index}
            jedi={jedi}
            deleteJedi={deleteJedi}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    jedi: filters(state),
    filter: state.filter
  }
);

JediList.propTypes = {
  jedi: PropTypes.array,
  filter: PropTypes.object,
};
export default connect(
  mapStateToProps, { fetchJedi, deleteJedi }
)(JediList);
