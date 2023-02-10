import Page from '../styles/Page';
import PrimaryButton from '../components/common/PrimaryButton';
import Inner from '../styles/Inner';
import KakaoButton from '../components/register/KakaoButton';
import styled from 'styled-components';

const Auth = () => {
  return (
    <Page>
      <Inner>
        <ButtonArea>
          <KakaoButton />
          <PrimaryButton>이메일로 가입하기</PrimaryButton>
        </ButtonArea>
      </Inner>
    </Page>
  );
};

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Auth;
