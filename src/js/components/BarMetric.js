import React, { Component, PropTypes } from 'react';

class BarMetric extends Component {
  render() {
    const { fillPercent, label } = this.props;
    const fillColor = fillPercent >= 50 ? '#26B14C' : '#8a0707';
    return (
      <div className='bar-container'>
        <span className='bar-label'>
          { `${label}: ${fillPercent}%` }
        </span>
        <svg
          className='bar-svg'
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,5 L 100,5"
            stroke="#DDD"
            strokeWidth={20}
            fillOpacity={0} 
          />
          <path
            d="M 0,5 L 100,5"
            stroke={ fillColor }
            strokeWidth={20}
            fillOpacity={0}
            style={
              {
                strokeDasharray: '100px; 100px',
                strokeDashoffset: `${100 - fillPercent}px`
              }
            }
          />

        </svg>
      </div>
    );
  }
}

BarMetric.propTypes = {
  label: PropTypes.string.isRequired,
  fillPercent: PropTypes.number.isRequired
};

BarMetric.defaultProps = {
  label: 'Sentiment'
}

export default BarMetric;
