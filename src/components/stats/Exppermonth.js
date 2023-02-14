import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Exppermonth = () => {
    return (
        <Expmonth>
            <p className='month'>1월 문화 비용</p>
            <p className='monthprice'>+10,000</p>
        </Expmonth>
    );
};

const Expmonth = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    p:nth-child(1) {
        font: ${fonts.score13Medium};
        color: ${colors.gray900};
    }
    p:nth-child(2) {
        font: ${fonts.score15Medium};
        color: ${colors.primary};
    }
`;
export default Exppermonth;
