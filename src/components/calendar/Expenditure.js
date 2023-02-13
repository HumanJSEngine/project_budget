import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';

const Expenditure = ({ children }) => {
    return <Expenditures>{children}</Expenditures>;
};

const Expenditures = styled.div`
    width: 100%;
    max-width: 360px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem 0;
    margin-top: 20px;
    padding: 10px;
    background: ${colors.white};
`;
export default Expenditure;
