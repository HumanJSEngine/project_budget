import styled from 'styled-components';
import KakaoButton from '../components/auth/KakaoButton';
import PrimaryButton from '../components/common/PrimaryButton';
import TransparentButton from '../components/common/TransparentButton';

const Auth = () => {
  return (
    <Page>
      <ButtonArea>
        <KakaoButton />
        <PrimaryButton>이메일로 가입하기</PrimaryButton>
        <TransparentButton>로그인하기</TransparentButton>
      </ButtonArea>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 800px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 16px;
`;

export default Auth;
