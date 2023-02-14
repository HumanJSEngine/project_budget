import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/Theme';
import Page from '../styles/Page';
import Container from '../styles/Container';
import FormInput from '../components/common/FormInput';
import InputAlertLabel from '../components/common/InputAlertLabel';
import Header from '../components/common/Header';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';
import Button from '../components/common/Button';

const Login = () => {
  const loginHandler = (e) => {
    console.log('clicked');
    e.preventDefault();
  };
  return (
    <Page>
      <Header title={'로그인'} HeaderLeft={<HeaderGoBackButton position={'left'} />} />
      <Container>
        <FormArea onSubmit={loginHandler}>
          <InputArea>
            <AuthTextArea>
              <FormInput type={`text`} placeholder={'이메일을 입력해 주세요.'} required />
              <InputAlertLabel state={'warning'}>이메일 형식이 맞지 않습니다.</InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={`password`}
                name={'password'}
                placeholder={'비밀번호를 입력해 주세요.'}
                autoComplete={'off'}
                required
              />
              <InputAlertLabel state={'warning'}>비밀번호가 일치하지 않습니다.</InputAlertLabel>
            </AuthTextArea>
          </InputArea>
          <ActionArea>
            <Button primary>로그인하기</Button>
            <Link to='/register'>
              <Button transparent>
                계정이 없으신가요? <TextUnderline>회원가입하기</TextUnderline>
              </Button>
            </Link>
          </ActionArea>
        </FormArea>
      </Container>
    </Page>
  );
};

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 100px 16px 0 16px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AuthTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextUnderline = styled.span`
  border-bottom: 1px solid ${colors.primary};
`;

export default Login;
