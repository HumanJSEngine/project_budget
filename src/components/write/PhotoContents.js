import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import colors from '../../styles/Theme';

const PhotoContents = () => {
  return (
    <Box>
      <IconBox>
        <AiFillCamera size={24} />
      </IconBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  background: ${colors.primary};
`;

const IconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${colors.white};
`;

export default PhotoContents;
