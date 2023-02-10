import React from 'react';
import styled from 'styled-components';
import colors from './styles/Theme';
import Layout from './components/Layout/Layout';

const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${colors.primary};
`;

const Main = () => {
    return (
        <>
            <Box>메인2</Box>
            <Layout />
        </>
    );
};

export default Main;
