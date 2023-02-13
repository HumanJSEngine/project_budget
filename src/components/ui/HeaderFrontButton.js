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

    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 10px;
        height: 8px;
    }
`;

export default HeaderFrontButton;
