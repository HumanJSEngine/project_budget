import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';

const Expenditure = ({ children }) => {
    return <Expenditures>{children}</Expenditures>;
};

const Expenditures = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
    gap: 1.5rem 0;
    margin-top: 20px;
    padding: 10px;
    background: ${colors.white};
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.primary};
    }
`;

export default Expenditure;
