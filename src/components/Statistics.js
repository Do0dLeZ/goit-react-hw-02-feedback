import React from "react";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, percentGood }) => {
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

Statistics.defaultProps = {
  percentGood: 0,
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentGood: propTypes.number,
};

export default Statistics;
