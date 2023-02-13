import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/Theme';
import Page from '../styles/Page';
import Container from '../styles/Container';
import FormInput from '../components/common/FormInput';
import InputAlertLabel from '../components/common/InputAlertLabel';
import PrimaryButton from '../components/common/PrimaryButton';
import TransparentButton from '../components/common/TransparentButton';

const Register = () => {
  const registerHandler = (e) => {
    console.log('clicked');
    e.preventDefault();
  };
  return (
    <Page>
      <Container>
        <FormArea onSubmit={registerHandler}>
          <InputArea>
            <AuthTextArea>
              <FormInput type={'text'} placeholder={'이메일을 입력해 주세요.'} required />
              <InputAlertLabel state={'success'}>사용 가능한 이메일입니다.</InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={'password'}
                name={'password'}
                placeholder={'비밀번호를 입력해 주세요.'}
                autoComplete={'off'}
                required
              />
              <InputAlertLabel state={'success'}>사용 불가능한 비밀번호입니다.</InputAlertLabel>
            </AuthTextArea>
            <AuthTextArea>
              <FormInput
                type={'password'}
                name={'check-password'}
                placeholder={'비밀번호를 다시 한번 입력해 주세요.'}
                autoComplete={'off'}
                required
              />
              <InputAlertLabel state={'success'}>비밀번호가 일치하지 않습니다.</InputAlertLabel>
            </AuthTextArea>
          </InputArea>
          <ActionArea>
            <PrimaryButton>가입하기</PrimaryButton>
            <Link to='/login'>
              <TransparentButton>
                이미 계정이 있으신가요? <TextUnderline>로그인하기</TextUnderline>
              </TransparentButton>
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

export default Register;
