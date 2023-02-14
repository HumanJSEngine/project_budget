import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';
import Header from '../Header';
import HeaderButton from '../HeaderButton';

const ModalDate = ({ closeModal }) => {
  return (
    <Box>
      <Header
        title={'날짜'}
        titlePosition={'left'}
        HeaderRight={
          <HeaderButton event={closeModal}>
            <HeaderText>완료</HeaderText>
          </HeaderButton>
        }
        border={true}
      />
      <ModalContents></ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeaderText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
`;
const ModalContents = styled.div`
  width: 100%;
  height: 152px;
`;

export default ModalDate;
