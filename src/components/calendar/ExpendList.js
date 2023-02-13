import React from 'react';
import styled from 'styled-components';

const ExpendList = ({ children }) => {
    return <Expendlist>{children}</Expendlist>;
};

const Expendlist = styled.div`
    width: 100%;
    height: 100%;
    max-height: 51px;
    display: flex;
    justify-content: space-between;
`;

export default ExpendList;
