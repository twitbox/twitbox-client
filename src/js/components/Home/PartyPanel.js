import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import CandidateEntry from './CandidateEntry';

class PartyPanel extends Component {
  render() {
    const { partyName, candidates } = this.props;
    // Create list of candiate modals
    const candidateEntries = candidates.map((item, i) => {
      const { name, positive, negative, volume, mostCommonHashtag } = item;
      return (
        <CandidateEntry
          key={`candidate-entry_${i}_${name}`}
          name={ name }
          positive={ positive }
          negative={ negative }
          volume={ volume }
          mostCommonHashtag={ mostCommonHashtag }
        />
      );
    });
    const classname = cx({
      'd-panel': partyName[0] === 'D',
      'r-panel': partyName[0] === 'R',
      'party-panel': true
    });
    return (
      <div className={ classname }>
        <div className="party-panel-title">
          <img className={ partyName.toLowerCase() + '-icon' } />
          <span>{ partyName }</span>
        </div>
        { candidateEntries }
      </div>
    );
  }
}

PartyPanel.propTypes = {
  partyName: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.object).isRequired
};

PartyPanel.defaultProps = {
  candidates: []
};

export default PartyPanel;
