import React, { Component, PropTypes } from 'react';
import CandidatesFeed from '../components/Home/CandidatesFeed';
import MapView from '../components/Home/MapView';

class Home extends Component {
  render() {
    return (
      <div>
        <CandidatesFeed candidates={ this.props.candidates } />
        <MapView />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
