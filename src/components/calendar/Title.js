import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Title = ({ title }) => {
    return <Titlename>{title}</Titlename>;
};

const Titlename = styled.div`
    font: ${fonts.score15Regular};
    color: ${colors.gray900};
`;
export default Title;
