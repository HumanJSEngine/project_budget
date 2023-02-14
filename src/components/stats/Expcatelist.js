import React from 'react';
import styled from 'styled-components';

const Expcatelist = ({ children }) => {
    return <Expcatelists>{children}</Expcatelists>;
};

const Expcatelists = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px 0px;
`;
export default Expcatelist;
