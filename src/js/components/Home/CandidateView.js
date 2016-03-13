import React, { Component, PropTypes } from 'react';
import PartyView from './PartyView';

class CandidateView extends Component {
  render() {
    return (
      <div>
        <PartyView 
          partyName="Democrat"
          candidates={ [] }
        />
        <PartyView 
          partyName="Republican"
          candidates={ [] }
        />
      </div>
    );
  }
}

CandidateView.propTypes = {
};

export default CandidateView;
