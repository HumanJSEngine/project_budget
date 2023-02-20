import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import IconBox from '../styles/IconBox';
import { HiArrowLeft } from 'react-icons/hi';
import Container from '../styles/Container';
import SettingCateList from '../components/setting/SettingCateList';
import Header from '../components/common/Header';
import AddCateList from '../components/setting/AddCateList';

const SetCategory = () => {
    return (
        <Page>
            <Header title={'카테고리 편집'} />
            <Container>
                <SettingList>
                    <AddCateList>카테고리 추가</AddCateList>
                    <SettingCateList>영화</SettingCateList>
                    <SettingCateList>전시</SettingCateList>
                    <SettingCateList>공연</SettingCateList>
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
    padding: 0 16px;
`;

export default SetCategory;
