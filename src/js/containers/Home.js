import React, { Component, PropTypes } from 'react';
import CandidateView from '../components/Home/CandidateView';
import StatPanel from '../components/Home/StatPanel';
import MapView from '../components/Home/MapView';

class Home extends Component {
  render() {
    return (
      <div>
        <CandidateView />
        <StatPanel />
        <MapView />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
