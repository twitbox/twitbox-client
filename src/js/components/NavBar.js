import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="nav-home-button">
          <Link to="/">
            <span className="header-title ">
              Twitbox
            </span>
          </Link>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {
};

export default NavBar;
