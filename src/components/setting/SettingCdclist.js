import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import Page from '../../styles/Page';
import Header from '../common/Header';
import Container from '../../styles/Container';
import AddCateList from './AddCateList';
import SettingCateList from './SettingCateList';

const SettingCdclist = () => {
    return (
        <Page>
            <Header title={'공연'} />
            <Container>
                <SettingList>
                    <AddCateList>세부 카테고리 추가</AddCateList>
                    <SettingCateList>뮤지컬</SettingCateList>
                    <SettingCateList>연극</SettingCateList>
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
    padding: 0 16px;
`;
export default SettingCdclist;
