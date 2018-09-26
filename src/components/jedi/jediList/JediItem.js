import React, { Component, PropTypes } from 'react';
import { debounce } from "../../../utils/fcts";

const debounceUpdatedjedy = debounce((fn, jedi, name ) => {fn(jedi, name)}, 450);

export default class  JediItem extends Component {
  state = {
    updatingJedi: false
  };
  onChangeJediName = (e) => {
    const { jedi, updateJedi } = this.props;
    debounceUpdatedjedy(updateJedi, jedi, e.target.value)
  };

  updateJediState = (updating) => {
    this.setState({ updatingJedi: updating })
  };

  render() {
    const { jedi, deleteJedi } = this.props;
    return (
      <div className="jedi-item"  onClick={() => this.updateJediState(true)}>
        <span className="jedi-id" >{`# ${jedi.id}`}</span>
        {
          this.state.updatingJedi ?
            <input
              defaultValue={jedi.name}
              autoFocus
              onBlur={() => this.updateJediState(false)}
              onChange={this.onChangeJediName}/>
            : <span>{jedi.name}</span>
        }
        <button className="btn-delete" onClick={() => deleteJedi(jedi.id)}>X</button>
      </div>
    )
  }
};

JediItem.propTypes = {
  jedi: PropTypes.object,
  deleteJedi: PropTypes.func,
  updateJedi: PropTypes.func
};

