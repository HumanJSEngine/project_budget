import { useRef } from 'react';
import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';
import Header from '../Header';
import HeaderButton from '../HeaderButton';

const ModalDate = ({ closeModal, setTime }) => {
  const date = useRef(null);
  const time = useRef(null);
  const selectTime = () => {
    setTime({ date: date.current.value, time: time.current.value });
    closeModal();
  };
  return (
    <Box>
      <Header
        title={'날짜'}
        titlePosition={'left'}
        HeaderRight={
          <HeaderButton event={selectTime}>
            <HeaderText>완료</HeaderText>
          </HeaderButton>
        }
        border={true}
      />
      <ModalContents>
        <InputDateTime type='date' ref={date} />
        <InputDateTime type='time' ref={time} />
      </ModalContents>
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 152px;
`;
const InputDateTime = styled.input`
  border: 0;
  color: ${colors.gray900};
  font: ${fonts.score15Medium};
  &:focus {
    outline: none;
  }
`;

export default ModalDate;
