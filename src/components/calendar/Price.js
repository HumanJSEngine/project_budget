import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Price = ({ price }) => {
    return <Prices>+{price.toLocaleString()}</Prices>;
};

const Prices = styled.div`
    font: ${fonts.score15Medium};
    color: ${colors.primary};
`;
export default Price;
