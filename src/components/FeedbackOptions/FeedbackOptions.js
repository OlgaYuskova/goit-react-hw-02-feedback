import React from 'react';
import {FeedbackOptionsDiv, FeedbackOptionsButton} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <FeedbackOptionsDiv>
        {options.map((option) => (
            <FeedbackOptionsButton key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </FeedbackOptionsButton>
        ))}
    </FeedbackOptionsDiv>
);

export default FeedbackOptions;