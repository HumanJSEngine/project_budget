import React from 'react';
import styled from 'styled-components';
import colors from './styles/Theme';

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${colors.Primary};
`;
const Box2 = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${colors.Secondary};
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
