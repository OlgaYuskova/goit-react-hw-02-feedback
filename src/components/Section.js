import React from 'react';

const Section = ({ title, children }) => (
    <div>
        {title && <h1>{title}</h1>}
        {children}
    </div>
);

export default Section;