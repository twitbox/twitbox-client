import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import TwitterActions from '../actions/twitter';

class App extends Component {
  componentDidMount() {
    const mockInterval = setInterval(this.props.actions.mockChange, 1000);
  }
  render() {
    const { children, candidates, actions } = this.props;
    return (
      <div>
        <NavBar />
        <main className="main">
          { cloneElement(children, { candidates, actions }) }
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
    actions: bindActionCreators(TwitterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);