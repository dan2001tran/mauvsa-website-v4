import React from 'react';
import './LineGradientReversed.css';

const LineGradientReversed = ({ width = '100%', height = '2px' }) => {
  return <div className={`line-gradient-reversed`} style={{ width, height }} />;
};

export default LineGradientReversed;
