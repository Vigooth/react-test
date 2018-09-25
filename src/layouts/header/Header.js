import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import { connect } from "react-redux";
import { changeTemplate } from "../../actions/template";

const Header = ({ changeTemplate }) => {
    return (
      <header>
        <div className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h2>Jedi management tool</h2>
          <div style={{position: 'absolute', right: 0, top: 0}}>
            <button style={{background: 'yellow'}} onClick={() => changeTemplate('starwars')}> </button>
            <button style={{background: 'blue'}} onClick={() => changeTemplate('default')}> </button>
          </div>
        </div>

      </header>
    );
  };
export default connect(
  null, { changeTemplate }
)(Header);
