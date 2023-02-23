import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Leftlist = ({ part, price, percent, color }) => {
    return (
        <Leftlists color={color}>
            <span></span>
            <span className='part'>{part}</span>
            <span className='percent'>
                {((price / percent) * 100).toFixed(2)}%
            </span>
        </Leftlists>
    );
};

const Leftlists = styled.div`
    display: flex;
    gap: 0 10px;
    span:first-child {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${(props) => props.color};
        transform: translateY(50%);
    }
    .part {
        font: ${fonts.score15Regular};
        color: ${colors.gray900};
    }

    .percent {
        font: ${fonts.score15Regular};
        color: ${colors.gray500};
    }
`;

export default Leftlist;
