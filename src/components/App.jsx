import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification'

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    incrementFeedback = (feedbackTypeBtn) => {
        this.setState((prevState) => ({
            [feedbackTypeBtn]: prevState[feedbackTypeBtn] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();

        if (total === 0) {
            return 0;
        }

        return Math.round((good / total) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        const feedbackOptions = ['good', 'neutral', 'bad'];

        return (
          <div>
            <Section title="Please leave feedback">
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.incrementFeedback}
            />
            {total > 0 ? (
              <Statistics title="Statistics"
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />) : (
              <Notification message="There is no feedback"/>
              )}
              </Section>
            </div>
        );
    }
}

