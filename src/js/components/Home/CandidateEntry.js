import React, { Component, PropTypes } from 'react';
import { BarMetric } from 'react-simple-charts';

class CandidateEntry extends Component {
  render() {
    const { name, positive, negative, volume, mostCommonHashtag } = this.props;
    console.log(positive);
    return (
      <div className='candidate-entry'>
        {name}
        <BarMetric 
          metricName={''}
          value={`${positive.percent}% positive`}
          percent={positive.percent}
          label={'sentiment'}
        />
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
