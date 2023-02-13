import React from 'react';
import styled from 'styled-components';
import WriteFormText from '../components/write/WriteFormText';
import Container from '../styles/Container';
import Page from '../styles/Page';

const Write = () => {
  return (
    <Page>
      <Container>
        <WriteForm>
          <WriteFormText type={'default'} title={'장소'} />
          <WriteFormText type={'select'} title={'날짜'} />
          <WriteFormText type={'select'} title={'카테고리'} />
          <WriteFormText type={'default'} title={'내용'} />
          <WriteFormText type={'select'} title={'결제 수단'} />
          <WriteFormText type={'default'} title={'결제처'} />
          <WriteFormText type={'default'} title={'장소'} />
          <WriteFormText type={'default'} title={'금액'} />
        </WriteForm>
      </Container>
    </Page>
  );
};

const WriteForm = styled.form`
  padding: 0 16px;
`;

export default Write;
