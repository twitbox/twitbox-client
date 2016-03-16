import React, { Component, PropTypes } from 'react';
import PartyView from './PartyView';

class MainFeed extends Component {
  render() {
    const partySplit = this.props.candidates.reduce((p, c) => {
      if (c.party === 'Democrat') p.democrat.push(c);
      else p.republican.push(c);
      return p;
    }, { democrat: [], republican: [] })
    return (
      <div>
        <PartyView 
          partyName="Democrat"
          candidates={ partySplit.democrat }
        />
        <PartyView 
          partyName="Republican"
          candidates={ partySplit.republican }
        />
      </div>
    );
  }
}

MainFeed.propTypes = {
};

export default MainFeed;
