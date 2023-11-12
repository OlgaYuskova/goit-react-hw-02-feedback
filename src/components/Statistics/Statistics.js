import React from 'react';
import {StatisticsDiv, StatisticsTitle, StatisticsText} from './Statistics.styled'

const Statistics = ({ title, good, neutral, bad, total, positivePercentage }) => (
<>
    { title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsDiv>
        <StatisticsText>Good: {good}</StatisticsText>
        <StatisticsText>Neutral: {neutral}</StatisticsText>
        <StatisticsText>Bad: {bad}</StatisticsText>
        <StatisticsText>Total: {total}</StatisticsText>
        <StatisticsText>Positive Feedback: {positivePercentage}%</StatisticsText>
        </StatisticsDiv>
</>
);


export default Statistics;