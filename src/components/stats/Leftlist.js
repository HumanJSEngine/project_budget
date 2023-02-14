import React from 'react';
import styled from 'styled-components';

const Leftlist = ({ part, percent }) => {
    return (
        <Leftlists>
            <span></span>
            <span className='movie'>{part}</span>
            <span className='percent'>{percent}%</span>
        </Leftlists>
    );
};

const Leftlists = styled.div`
    display: flex;
    gap: 0 10px;
    span:first-child {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgb(116, 169, 207);
    }
`;

export default Leftlist;
