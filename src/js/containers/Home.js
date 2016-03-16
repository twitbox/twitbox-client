import React, { Component, PropTypes } from 'react';
import MainFeed from '../components/Home/MainFeed';
import MapView from '../components/Home/MapView';

class Home extends Component {
  render() {
    return (
      <div>
        <MainFeed candidates={ this.props.candidates } />
        <MapView />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
