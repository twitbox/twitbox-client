import React, { Component, PropTypes } from 'react';
import BarMetric from '../BarMetric';

class CandidateEntry extends Component {
  render() {
    const { name, positive, negative, volume, mostCommonHashtag } = this.props;
    const iconClass = `candidate-icon ${name.split(' ')[1].toLowerCase()}-icon`
    return (
      <div className='candidate-entry'>
        <div className='name-bar-wrapper'>
          <span className='candidate-name'>{ name }</span>
          <BarMetric fillPercent={ positive.percent } />
        </div>
        <div className={ iconClass } />
      </div>
    );
  }
}

CandidateEntry.propTypes = {
  name: PropTypes.string.isRequired,
  positive: PropTypes.object.isRequired,
  negative: PropTypes.object.isRequired,
  volume: PropTypes.number.isRequired
};

export default CandidateEntry;
