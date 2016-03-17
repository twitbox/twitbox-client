import React, { Component, PropTypes } from 'react';

class CandidateEntry extends Component {
  render() {
    const { name, positive, negative, volume, mostCommonHashtag } = this.props;
    return (
      <div className='candidate-entry'>
        {name}
      </div>
    );
  }
}

CandidateEntry.propTypes = {
  name: PropTypes.string.isRequired,
  positive: PropTypes.number.isRequired,
  negative: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired
};

export default CandidateEntry;
