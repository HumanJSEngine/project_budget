import React from 'react';
import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';

const HeaderFrontButton = () => {
    return (
        <IconButton>
            <AiFillCaretRight />
        </IconButton>
    );
};

const IconButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-left: -5px;
    svg {
        width: 10px;
        height: 8px;
    }
`;

export default HeaderFrontButton;
