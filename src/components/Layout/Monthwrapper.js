import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Monthwrapper = (props) => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default Monthwrapper;
