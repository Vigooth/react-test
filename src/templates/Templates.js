import React, { Component, PropTypes } from 'react';

export default class Templates extends Component {

  getTemplate = () => localStorage.getItem("template");

  render() {
    this.getTemplate() === 'starwars' ? require('./templateStarwars.css') : require('./templateDefault.css');
    return <div className="wrapper">{this.props.children}</div>
  }
}
Templates.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
