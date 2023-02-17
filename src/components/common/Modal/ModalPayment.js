import styled from 'styled-components';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListItem from './ModalListItem';

const ModalPayment = ({ closeModal, setPayment }) => {
  const getPaymentList = async () => {
    // try {
    // const res = await getPayment();
    //   const { message, status } = res;
    //   if (!status) {
    //     return console.log(message);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const selectPaymentHandler = (paymentSeq, paymentName) => {
    // const paymentInfo = {
    //   paymentSeq,
    //   paymentName,
    // };
    // setPayment(paymentInfo);
    closeModal();
  };
  return (
    <Box>
      <Header
        title={'결제 수단'}
        titlePosition={'left'}
        HeaderRight={<HeaderCloseButton event={closeModal} />}
        border={true}
      />
      <ModalContents>
        <ModalList>
          <ModalListItem name={'카드이름'} selectEvent={selectPaymentHandler} />
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

export default ModalPayment;
