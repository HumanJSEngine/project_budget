import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

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
    span {
        color: ${colors.gray700};
        font: ${fonts.score12Regular};
        position: relative;
        &:nth-child(-n + 2)::after {
            content: '';
            width: 1.2px;
            height: 7px;
            position: absolute;
            background: ${colors.gray700};
            top: 5px;
            right: -10px;
        }
    }
`;
export default Category;
