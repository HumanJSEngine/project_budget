import React from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Expenditure from '../components/calendar/Expenditure';
import ExpendList from '../components/calendar/ExpendList';
import TitleList from '../components/calendar/TitleList';
import Title from '../components/calendar/Title';
import Category from '../components/calendar/Category';
import Price from '../components/calendar/Price';
import DateListTotal from '../components/list/DateListTotal';
import useFetch from '../hooks/useFetch';
import GetTotal from '../utils/GetTotal';
import Container from '../styles/Container';
import Header from '../components/Layout/Header';
import WriteButton from '../components/common/WriteButton';

const List = () => {
    const listdata = useFetch(
        'get',
        'http://haeji.mawani.kro.kr:8585/api/expense/list'
    );
    console.log(listdata);

    return (
        <Page>
            <Container>
                <Expenditure>
                    <>
                        <DateListTotal
                            date={'월요일'}
                            price={GetTotal(listdata).toLocaleString()}
                        />
                        <hr />
                        {listdata.map((list) => (
                            <ExpendList key={list.ehSeq}>
                                <TitleList>
                                    <Title title={list.ehTitle} />
                                    <Category
                                        culture={list.ehCcSeq}
                                        place={list.ehStoreName}
                                        payment={list.ehPiSeq}
                                    ></Category>
                                </TitleList>
                                <Price price={list.ehPrice} />
                            </ExpendList>
                        ))}
                    </>
                </Expenditure>
            </Container>
            <BottomNavigation />
        </Page>
    );
};

export default List;
