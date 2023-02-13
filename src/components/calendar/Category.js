import React from 'react';
import styled from 'styled-components';

const Category = ({ culture, place, payment }) => {
    return (
        <Categories>
            <span>{culture}</span>
            <span>{place}</span>
            <span>{payment}</span>
        </Categories>
    );
};

const Categories = styled.div`
    display: flex;
    gap: 0 1rem;
`;
export default Category;
