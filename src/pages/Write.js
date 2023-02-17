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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Popup from '../components/common/Popup/Popup';
import usePopup from '../hooks/usePopup';

const writeSchema = yup.object({
  title: yup.string().required('제목을 입력해 주세요.'),
  place: yup.string().required('장소를 입력해 주세요.'),
  time: yup.string().required('시간을 선택해 주세요.'),
  category: yup.string().required('카테고리를 선택해 주세요.'),
  contents: yup.string().required('내용을 입력해 주세요.'),
  payment: yup.string().required('결제 수단을 입력해 주세요.'),
  payPlace: yup.string().required('결제처를 입력해 주세요.'),
  payPrice: yup.string().required('금액을 입력해 주세요.'),
});

const Write = () => {
  const [time, setTime] = useState(moment().format('YYYY-MM-DDTHH:mm'));
  const [category, setCategory] = useState('');
  const [payment, setPayment] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(writeSchema), mode: 'onSubmit' });
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
    if (errors) console.log(postData);
    console.log(time, category, payment);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Page>
      <Header
        title={'기록하다'}
        HeaderLeft={<HeaderCloseButton />}
        HeaderRight={
          <HeaderButton type="submit" form="write-form">
            <ButtonText>등록</ButtonText>
          </HeaderButton>
        }
      />
      <Container>
        <WriteForm id="write-form" onSubmit={handleSubmit(postSubmitHandler)}>
          <WriteInfo>
            <WriteFormTitle validation={register('title')} />
            <PhotoContents />
          </WriteInfo>
          <WriteFormText title={'장소'} validation={register('place')} />
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
          <WriteFormTextArea title={'내용'} validation={register('contents')} />
          <WriteFormSelect
            title={'결제 수단'}
            value={!payment.paymentName ? '' : `${payment.paymentName}`}
            selectEvent={handlePaymentSelect}
          />
          <WriteFormText title={'결제처'} validation={register('payPlace')} />
          <WriteFormText title={'금액'} validation={register('payPrice')} />
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
