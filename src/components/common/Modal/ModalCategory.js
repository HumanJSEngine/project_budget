import styled from 'styled-components';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListBack from './ModalListBack';
import ModalListItem from './ModalListItem';

const ModalCategory = ({ closeModal }) => {
  return (
    <Box>
      <Header
        title={'카테고리'}
        titlePosition={'left'}
        HeaderRight={<HeaderCloseButton event={closeModal} />}
        border={true}
      />
      <ModalContents>
        <ModalList>
          <ModalListBack name={'카테고리명'} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
          <ModalListItem name={'카테고리 명'} hasDetail={true} />
        </ModalList>
      </ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalContents = styled.div`
  width: 100%;
  height: 240px;
  padding: 0 16px;
  overflow-y: auto;
`;
const ModalList = styled.ul`
  width: 100%;
  height: 100%;
`;

export default ModalCategory;
