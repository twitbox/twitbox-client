import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class PartyView extends Component {
  render() {
    const { partyName, candidates } = this.props;
    // Create list of candiate modals
    // const candidateModals = candidates.map(item => {
    //   // blahblah
    // });
    const classname = cx({
      'd-panel': partyName[0] === 'D',
      'r-panel': partyName[0] === 'R',
      'party-panel': true
    });
    return (
      <div className={ classname }>
        <div>
          <img className={ partyName.toLowerCase() + '-icon' } />
          <span>{ partyName }</span>
        </div>
        {'TODO: Insert list of candidate models'}
      </div>
    );
  }
}

PartyView.propTypes = {
  partyName: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object).isRequired
};

PartyView.defaultProps = {
  candidates: []
};

export default PartyView;
