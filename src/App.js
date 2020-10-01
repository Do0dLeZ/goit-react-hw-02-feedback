import React, { Component } from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotal = () => Object.values().reduce((acc, value) => (acc += value));

  countPercentGood = (total) =>
    total > 0 ? Math.round((this.state.good * 100) / total) : 0;

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotal;

    const percentGood = this.countPercentGood(total);

    return (
      <div>
        <Section title="Please leave feedback...">
          <FeedbackOptions
            onGood={this.handleChange}
            onNeutral={this.handleChange}
            onBad={this.handleChange}
          />
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentGood={percentGood}
            />
          )}
        </Section>
      </div>
    );
  }
}
