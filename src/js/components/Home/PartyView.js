import React, { Component, PropTypes } from 'react';

class PartyView extends Component {
  render() {
    const { partyName, candidates } = this.props;
    // Create list of candiate modals
    // const candidateModals = candidates.map(item => {
    //   // blahblah
    // });
    return (
      <div>
        <div>
          <img className={partyName + '-icon'} />
          <span>{partyName}</span>
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
