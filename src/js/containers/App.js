import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    const { children, candidates } = this.props;
    return (
      <main className="main">
        <NavBar />
        { cloneElement(children, { candidates }) }
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  candidates: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    candidates: state.twitter
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