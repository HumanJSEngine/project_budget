import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/Theme';
import fonts from '../styles/FontStyle';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import HeaderButton from '../components/common/HeaderButton';
import HeaderCloseButton from '../components/common/HeaderCloseButton';
import Container from '../styles/Container';
import PhotoContents from '../components/write/PhotoContents';
import WriteFormTitle from '../components/write/WriteFormTitle';
import WriteFormText from '../components/write/WriteFormText';
import WriteFormTextArea from '../components/write/WriteFormTextArea';
import Modal from '../components/common/Modal/Modal';
import ModalDate from '../components/common/Modal/ModalDate';
import ModalCategory from '../components/common/Modal/ModalCategory';
import ModalPayment from '../components/common/Modal/ModalPayment';
import useModal from '../hooks/useModal';
import moment from 'moment';
import WriteFormSelect from '../components/write/WriteFormSelect';
import Popup from '../components/common/Popup/Popup';
import usePopup from '../hooks/usePopup';

const Write = () => {
  const [time, setTime] = useState(moment().format('YYYY-MM-DDTHH:mm'));
  const [category, setCategory] = useState('');
  const [payment, setPayment] = useState('');
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const { openedModal, openModal, closeModal } = useModal();
  const handleDateSelect = () => {
    openModal(
      <ModalDate closeModal={closeModal} currentTime={time} setTime={setTime} />
    );
  };
  const handleCategorySelect = () => {
    openModal(
      <ModalCategory closeModal={closeModal} setCategory={setCategory} />
    );
  };
  const handlePaymentSelect = () => {
    openModal(<ModalPayment closeModal={closeModal} setPayment={setPayment} />);
  };
  const postSubmitHandler = (postData) => {
    console.log(time, category, payment);
  };

  return (
    <Page>
      <Header
        title={'기록하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton type='submit' form='write-form'>
            <ButtonText>등록</ButtonText>
          </HeaderButton>
        }
      />
      <Container>
        <WriteForm id='write-form' onSubmit={postSubmitHandler}>
          <WriteInfo>
            <WriteFormTitle />
            <PhotoContents />
          </WriteInfo>
          <WriteFormText title={'장소'} />
          <WriteFormSelect
            title={'날짜'}
            value={moment(time).format('YYYY/MM/DD a hh : mm')}
            selectEvent={handleDateSelect}
          />
          <WriteFormSelect
            title={'카테고리'}
            value={
              !category.categoryName
                ? ''
                : `${category.categoryName} ${
                    !category.detailCategoryName
                      ? ''
                      : ' > ' + category.detailCategoryName
                  }`
            }
            selectEvent={handleCategorySelect}
          />
          <WriteFormTextArea title={'내용'} />
          <WriteFormSelect
            title={'결제 수단'}
            value={!payment.paymentName ? '' : `${payment.paymentName}`}
            selectEvent={handlePaymentSelect}
          />
          <WriteFormText title={'결제처'} />
          <WriteFormText title={'금액'} />
        </WriteForm>
      </Container>
      <Modal openedModal={openedModal} closeModal={closeModal} />
      <Popup
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        message={popupMessage.current}
        buttonText={'확인'}
      />
    </Page>
  );
};

const ButtonText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const WriteForm = styled.form`
  width: 100%;
  padding: 32px 16px;
`;

const WriteInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export default Write;
