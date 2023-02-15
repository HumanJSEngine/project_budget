import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const DateListTotal = ({ date, price }) => {
    return (
        <DateTotal>
            <span>{date}</span>
            {price ? <span>{price}</span> : null}
        </DateTotal>
    );
};

const DateTotal = styled.div`
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
        font: ${fonts.score13Regular};
        color: ${colors.gray700};
    }
    span:nth-child(2) {
        font: ${fonts.score13Regular};
        color: ${colors.gray900};
    }
`;
export default DateListTotal;
