import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import IconBox from '../styles/IconBox';
import { HiArrowLeft } from 'react-icons/hi';
import Container from '../styles/Container';
import SettingCateList from '../components/setting/SettingCateList';
import Header from '../components/common/Header';
import AddCateList from '../components/setting/AddCateList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SetCategory = () => {
    const [cclist, setCclist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    'http://haeji.mawani.kro.kr:8585/api/category/list'
                );
                setCclist(result.data.cclist);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Page>
            <Header title={'카테고리 편집'} />
            <Container>
                <SettingList>
                    <AddCateList>카테고리 추가</AddCateList>

                    {cclist.map((list) => (
                        <SettingCateList
                            cdclist={list.cdclist}
                            key={list.ccSeq}
                        >
                            {list.ccName}
                        </SettingCateList>
                    ))}
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
