import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>Base</div>
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