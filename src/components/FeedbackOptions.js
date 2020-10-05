import React from "react";
import propTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button onClick={onGood} value="good">
        Good
      </button>
      <button onClick={onNeutral} value="neutral">
        Neutral
      </button>
      <button onClick={onBad} value="bad">
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGood: propTypes.objectOf(propTypes.func).isRequired,
  onNeutral: propTypes.objectOf(propTypes.func).isRequired,
  onBad: propTypes.objectOf(propTypes.func).isRequired
}

export default FeedbackOptions;
