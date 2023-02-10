import React from 'react';
import styled from 'styled-components';
import { AiFillCaretLeft } from 'react-icons/ai';

const HeaderBackButton = () => {
    return (
        <IconButton>
            <AiFillCaretLeft />
        </IconButton>
    );
};

const IconButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-left: -10px;
    svg {
        width: 10px;
        height: 8px;
    }
`;

export default HeaderBackButton;
