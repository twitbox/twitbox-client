import React, { Component, PropTypes } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <p>
          {'This app parses twitter sentiment regarding each of the current political candidates. Built by '} 
          <a 
            href="http://github.com/jimgong92"
            className="explicit-link"
          >
            Jimmy Gong
          </a>
          .
        </p>
      </div>
    );
  }
}

About.propTypes = {
};

export default About;
