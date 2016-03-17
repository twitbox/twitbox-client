import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    const { children, candidates } = this.props;
    return (
      <div>
        <NavBar />
        <main className="main">
          { cloneElement(children, { candidates }) }
        </main>
      </div>
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