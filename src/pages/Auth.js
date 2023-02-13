import PrimaryButton from '../components/common/PrimaryButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TransparentButton from '../components/common/TransparentButton';
import KakaoButton from '../components/auth/KakaoButton';

const Auth = () => {
  return (
    <Page>
      <ButtonArea>
        <KakaoButton />
        <Link to='/register'>
          <PrimaryButton>이메일로 가입하기</PrimaryButton>
        </Link>
        <Link to='/login'>
          <TransparentButton>로그인하기</TransparentButton>
        </Link>
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
