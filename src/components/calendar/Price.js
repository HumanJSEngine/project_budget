import React from 'react';
import styled from 'styled-components';

const Price = ({ price }) => {
    return <Prices>{price}</Prices>;
};

const Prices = styled.div`
    font: ${(props) => props.theme.fonts.score15Medium};
    color: ${(props) => props.theme.colors.primary};
`;
export default Price;
