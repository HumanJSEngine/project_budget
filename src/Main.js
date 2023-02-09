import React from "react";
import styled from "styled-components";

const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${(props) => props.theme.Primary};
`;
const Box2 = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${(props) => props.theme.Secondary};
`;

const Main = () => {
    return (
        <Box>
            메인2
            <Box2>메인3</Box2>
        </Box>
    );
};

export default Main;
