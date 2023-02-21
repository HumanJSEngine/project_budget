import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import axios from 'axios';
import Page from '../../styles/Page';
import Header from '../common/Header';
import Container from '../../styles/Container';
import AddCateList from './AddCateList';
import SettingCateList from './SettingCateList';

const SettingCdclist = () => {
    const { id } = useParams();
    const [cdclist, setCdclist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    `http://haeji.mawani.kro.kr:8585/api/category/detail/list?no=${id}`
                );
                setCdclist(result.data.cdclist);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    console.log(cdclist);

    return (
        <Page>
            <Header title={'공연'} />
            <Container>
                <SettingList>
                    <AddCateList>세부 카테고리 추가</AddCateList>
                    {cdclist.length > 0 ? (
                        cdclist.map((list) => (
                            <SettingCateList key={list.cdcSeq}>
                                {list.cdcName}
                            </SettingCateList>
                        ))
                    ) : (
                        <span>세부 카테고리를 추가해주세요</span>
                    )}
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
