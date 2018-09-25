import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addJedi } from '../../../actions/jedi';
import './index.css';

class AddJedi extends Component {
  state = {
    jedi: ""
  };

  addJedi = (e) => {
    const
      { addJedi } = this.props,
      { jedi } = this.state;

     if (e.key==="Enter" && e.target.value.length) {
       addJedi(jedi);
       e.target.value = "";
     }
  };

  render() {
    return (
      <div id="Home-addJedi-container">
        <div id="Home-addJedi-content">
          <input placeholder="Type your jedi name" name="namername" type="text" onChange={(e) => this.setState({jedi: e.target.value})} onKeyPress={this.addJedi}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { jedi: state.jedi }
);

AddJedi.propTypes = {
  jedi: PropTypes.array,
};

export default connect(
  mapStateToProps, { addJedi }
)(AddJedi);
