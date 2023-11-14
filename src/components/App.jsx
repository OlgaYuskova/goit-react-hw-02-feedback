import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

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
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
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

        const feedbackOptions = Object.keys(this.state);

        return (

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

        );
    }
}

