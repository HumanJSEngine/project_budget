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
    border: none;
    background: none;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 10px;
        height: 8px;
    }
`;

export default HeaderBackButton;
