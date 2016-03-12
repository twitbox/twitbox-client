import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="header-title ">
          Twitbox
        </span>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;