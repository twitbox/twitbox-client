import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <main className="main">
        <NavBar />
      </main>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);