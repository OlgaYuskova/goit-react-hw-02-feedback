import React from 'react';
import {SectionDiv, SectionTitle} from './Section.styled'

const Section = ({ title, children }) => (
    <SectionDiv>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
    </SectionDiv>
);

export default Section;