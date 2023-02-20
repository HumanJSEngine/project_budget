import { useRef } from 'react';
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
import { addPost } from '../api/postApi';

const Write = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const placeRef = useRef(null);
  const timeRef = useRef(moment().format('YYYY-MM-DDTHH:mm'));
  const categoryRef = useRef(null);
  const contentRef = useRef(null);
  const paymentRef = useRef(null);
  const payPlaceRef = useRef(null);
  const payPriceRef = useRef(null);
  const { isOpenPopup, popupMessage, openPopup, closePopup } = usePopup();
  const { openedModal, openModal, closeModal } = useModal();
  const handleDateSelect = () => {
    openModal(<ModalDate closeModal={closeModal} timeRef={timeRef} />);
  };
  const handleCategorySelect = () => {
    openModal(
      <ModalCategory closeModal={closeModal} categoryRef={categoryRef} />
    );
  };
  const handlePaymentSelect = () => {
    openModal(<ModalPayment closeModal={closeModal} paymentRef={paymentRef} />);
  };
  const postSubmitHandler = async () => {
    if (checkValidation()) {
      return;
    }
    const postData = {
      title: titleRef.current.value,
      date: timeRef.current,
      paymentSeq: paymentRef.current.paymentSeq,
      price: payPriceRef.current.value,
      storeName: payPlaceRef.current.value,
      location: placeRef.current.value,
      categorySeq: categoryRef.current.categorySeq,
      detailCategorySeq: categoryRef.current.detailCategoryName,
      content: contentRef.current.value,
    };
    try {
      const res = await addPost(postData);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const checkValidation = () => {
    if (!titleRef.current.value.trim()) {
      openPopup('제목을 입력해 주세요.');
      return true;
    }
    if (!placeRef.current.value) {
      openPopup('장소를 입력해 주세요.');
      return true;
    }
    if (!timeRef.current) {
      openPopup('시간을 선택해 주세요.');
      return true;
    }
    if (!categoryRef.current) {
      openPopup('카테고리를 선택해 주세요.');
      return true;
    }
    if (!paymentRef.current) {
      openPopup('결제 수단을 선택해 주세요.');
      return true;
    }
    if (!payPlaceRef.current.value) {
      openPopup('결제처를 입력해 주세요.');
      return true;
    }
    if (!payPlaceRef.current.value) {
      openPopup('금액을 입력해 주세요.');
      return true;
    }
    return false;
  };
  return (
    <Page>
      <Header
        title={'기록하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton onClick={postSubmitHandler}>
            <ButtonText>등록</ButtonText>
          </HeaderButton>
        }
      />
      <Container>
        <WriteForm>
          <WriteInfo>
            <WriteFormTitle textRef={titleRef} />
            <PhotoContents imgRef={imgRef} />
          </WriteInfo>
          <WriteFormText title={'장소'} textRef={placeRef} />
          <WriteFormSelect
            title={'날짜'}
            value={moment(timeRef.current).format('YYYY/MM/DD a hh : mm')}
            selectEvent={handleDateSelect}
          />
          <WriteFormSelect
            title={'카테고리'}
            value={
              !categoryRef.current
                ? ''
                : `${categoryRef.current.categoryName} ${
                    !categoryRef.current.detailCategoryName
                      ? ''
                      : ' > ' + categoryRef.current.detailCategoryName
                  }`
            }
            selectEvent={handleCategorySelect}
          />
          <WriteFormTextArea title={'내용'} textRef={contentRef} />
          <WriteFormSelect
            title={'결제 수단'}
            value={
              !paymentRef.current ? '' : `${paymentRef.current.paymentName}`
            }
            selectEvent={handlePaymentSelect}
          />
          <WriteFormText title={'결제처'} textRef={payPlaceRef} />
          <WriteFormText title={'금액'} textRef={payPriceRef} />
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

const WriteForm = styled.div`
  width: 100%;
  padding: 32px 16px;
`;

const WriteInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export default Write;
