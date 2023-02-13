import styled from 'styled-components';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import Container from '../styles/Container';
import WriteFormTitle from '../components/write/WriteFormTitle';
import WriteFormText from '../components/write/WriteFormText';
import PhotoContents from '../components/write/PhotoContents';
import WriteFormTextArea from '../components/write/WriteFormTextArea';
import HeaderButton from '../components/common/HeaderButton';
import colors from '../styles/Theme';
import fonts from '../styles/FontStyle';
import HeaderCloseButton from '../components/common/HeaderCloseButton';

const Write = () => {
  return (
    <Page>
      <Header
        title={'작성하다'}
        HeaderLeft={<HeaderCloseButton position={'left'} />}
        HeaderRight={
          <HeaderButton position='right'>
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
          <WriteFormText type={'select'} title={'날짜'} />
          <WriteFormText type={'select'} title={'카테고리'} />
          <WriteFormTextArea title={'내용'} />
          <WriteFormText type={'select'} title={'결제 수단'} />
          <WriteFormText type={'default'} title={'결제처'} />
          <WriteFormText type={'default'} title={'금액'} />
        </WriteForm>
      </Container>
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
