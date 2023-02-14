import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Datelist = ({ date, weekday }) => {
    return (
        <Datelists>
            <span>{date}</span>
            <span>{weekday}</span>
        </Datelists>
    );
};

const Datelists = styled.p`
    display: flex;
    gap: 0 8px;

    span {
        color: ${colors.gray900};
        font: ${fonts.score13Medium};
    }
`;

export default Datelist;