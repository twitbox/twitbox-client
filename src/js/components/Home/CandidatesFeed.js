import React, { Component, PropTypes } from 'react';
import PartyPanel from './PartyPanel';

class CandidatesFeed extends Component {
  render() {
    const partySplit = this.props.candidates.reduce((p, c) => {
      if (c.party === 'Democrat') p.democrat.push(c);
      else p.republican.push(c);
      return p;
    }, { democrat: [], republican: [] })
    return (
      <div className='feed-container'>
        <PartyPanel 
          partyName="Democrat"
          candidates={ partySplit.democrat }
        />
        <PartyPanel 
          partyName="Republican"
          candidates={ partySplit.republican }
        />
      </div>
    );
  }
}

CandidatesFeed.propTypes = {
};

export default CandidatesFeed;
