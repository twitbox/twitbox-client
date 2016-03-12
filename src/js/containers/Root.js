import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import '../../styles/main.less';


// Enable hot reloading of styles
if(module.hot) {
  module.hot.accept('../../styles/main.less', function() {
    require('../../styles/main.less');
  });
}

class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={ store }>
        <Router
          history={ history }
          routes={ routes }
        />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
