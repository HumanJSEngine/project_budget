import React from 'react';
import { BiSearch } from 'react-icons/ai';
import styled from 'styled-components';

const Search = () => {
    return (
        <SearchBtn>
            <BiSearch />
        </SearchBtn>
    );
};

const SearchBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Search;
