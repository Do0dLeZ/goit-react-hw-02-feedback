import React from "react";

const Statistics = ({ good, neutral, bad, total, percentGood = 0 }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{percentGood}%</span>
      </p>
    </div>
  );
};

export default Statistics;
