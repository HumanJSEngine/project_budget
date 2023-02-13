import React from 'react';
import styled from 'styled-components';

const Perdaytotal = ({ counts, amounts }) => {
    return (
        <Perdaytotals>
            <span>총 {counts}건</span>
            <span>+{amounts}</span>
        </Perdaytotals>
    );
};

const Perdaytotals = styled.div`
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
        font: ${(props) => props.theme.fonts.score13Regular};
        color: ${(props) => props.theme.colors.gray700};
    }
    span:nth-child(2) {
        font: ${(props) => props.theme.fonts.score13Medium};
        color: ${(props) => props.theme.colors.gray900};
    }
`;

export default Perdaytotal;
