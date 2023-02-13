import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
    return <Titlename>{title}</Titlename>;
};

const Titlename = styled.div`
    font: ${(props) => props.theme.fonts.score15Regular};
    color: ${(props) => props.theme.colors.gray900};
`;
export default Title;
