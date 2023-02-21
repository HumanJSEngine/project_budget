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

    return (
        <Page>
              <Container>
            <Expenditure>
                <>
                    <DateListTotal
                        date={'16일 월요일'}
                        price={GetTotal(listdata).toLocaleString()}
                    />
                    <hr />
                    {listdata.map(
                        ({ ehSeq, ehTitle, ehCcSeq, ehStoreName, ehPiSeq }) => (
                            <ExpendList key={ehSeq}>
                                <TitleList>
                                    <Title title={ehTitle} />
                                    <Category
                                        culture={ehCcSeq}
                                        place={ehStoreName}
                                        payment={ehPiSeq}
                                    ></Category>
                                </TitleList>
                                <Price price={10000} />
                            </ExpendList>
                        )
                    )}
                </>
            </Expenditure>
                  </Container>
            <BottomNavigation />
        </Page>
    );
};

export default List;
