import React from 'react';
import styled from 'styled-components';

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
        font: ${(props) => props.theme.fonts.score15Medium};
        color: ${(props) => props.theme.colors.gray900};
    }
`;

export default Datelist;
