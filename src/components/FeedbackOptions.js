import React from "react";

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

export default FeedbackOptions;
