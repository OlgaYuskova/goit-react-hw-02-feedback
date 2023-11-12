import { Component } from 'react';

class FormComponent extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        
        if (total === 0) {
            return 0; 
        }

        return Math.round((good / total) * 100);
    }

    incrementClickBtn = (evt) => {
    const currentBtn = evt.currentTarget.textContent.toLowerCase()
        this.setState((prevState) => ({
            [currentBtn]: prevState[currentBtn] + 1,
        }));
    }

    render() {
        const { title } = this.props;
        const {good, neutral, bad} = this.state
        return (
            <div>
                {title && <h1>{title}</h1>}
                <div>
                    <button type='button' onClick={this.incrementClickBtn}>Good</button>
                    <button type='button'onClick={this.incrementClickBtn}>Neutral</button>
                    <button type='button'onClick={this.incrementClickBtn}>Bad</button>
                </div>
                <div>
                    <h1>Statistics</h1>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback({ good, neutral, bad })}</p>
                    <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </div>
        );
    }
}

export default FormComponent;



