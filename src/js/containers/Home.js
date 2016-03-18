import React, { Component, PropTypes } from 'react';
import CandidatesFeed from '../components/Home/CandidatesFeed';
import MapView from '../components/Home/MapView';

class Home extends Component {
  render() {
    const { actions, candidates } = this.props;
    return (
      <div>
        <CandidatesFeed candidates={ candidates } />
        <MapView />
      </div>
    );
  }
}

Home.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object
};

export default Home;
