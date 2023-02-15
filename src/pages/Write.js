import styled from 'styled-components';
import colors from '../styles/Theme';
import fonts from '../styles/FontStyle';
import Page from '../styles/Page';
import Container from '../styles/Container';
import Header from '../components/common/Header';
import HeaderButton from '../components/common/HeaderButton';
import HeaderCloseButton from '../components/common/HeaderCloseButton';
import PhotoContents from '../components/write/PhotoContents';
import WriteFormTitle from '../components/write/WriteFormTitle';
import WriteFormText from '../components/write/WriteFormText';
import WriteFormTextArea from '../components/write/WriteFormTextArea';
import Modal from '../components/common/Modal/Modal';
import ModalDate from '../components/common/Modal/ModalDate';
import ModalCategory from '../components/common/Modal/ModalCategory';
import ModalPayment from '../components/common/Modal/ModalPayment';
import useModal from '../hooks/useModal';
import { useState } from 'react';

const Write = () => {
  const [category, setCategory] = useState({ cateSeq: 0, cateName: '' });
  const { openedModal, openModal, closeModal } = useModal();
  const handleDateSelect = () => {
    openModal(<ModalDate closeModal={closeModal} />);
  };
  const handleCategorySelect = () => {
    openModal(<ModalCategory closeModal={closeModal} />);
  };
  const handlePaymentSelect = () => {
    openModal(<ModalPayment closeModal={closeModal} />);
  };
  return (
    <Page>
      <Header
        title={'기록하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton>
            <ButtonText>등록</ButtonText>
          </HeaderButton>
        }
      />
      <Container>
        <WriteForm>
          <WriteInfo>
            <WriteFormTitle />
            <PhotoContents />
          </WriteInfo>
          <WriteFormText type={'default'} title={'장소'} />
          <WriteFormText type={'select'} title={'날짜'} selectEvent={handleDateSelect} />
          <WriteFormText
            type={'select'}
            title={'카테고리'}
            value={category.cateName}
            selectEvent={handleCategorySelect}
          />
          <WriteFormTextArea title={'내용'} />
          <WriteFormText type={'select'} title={'결제 수단'} selectEvent={handlePaymentSelect} />
          <WriteFormText type={'default'} title={'결제처'} />
          <WriteFormText type={'default'} title={'금액'} />
        </WriteForm>
      </Container>
      <Modal openedModal={openedModal} closeModal={closeModal} />
    </Page>
  );
};

const ButtonText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const WriteForm = styled.div`
  width: 100%;
  padding: 32px 16px;
`;

const WriteInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export default Write;
