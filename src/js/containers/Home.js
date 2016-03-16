import React, { Component, PropTypes } from 'react';
import CandidateView from '../components/Home/CandidateView';
import MapView from '../components/Home/MapView';

class Home extends Component {
  render() {
    return (
      <div>
        <CandidateView candidates={ this.props.candidates } />
        <MapView />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
