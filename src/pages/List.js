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

const List = () => {
    return (
        <Page>
            <Expenditure>
                <>
                    <DateListTotal date={'16일 월요일'} price={10000} />
                    <hr />
                    <ExpendList>
                        <TitleList>
                            <Title title={'제목입니다'} />
                            <Category
                                culture={'문화분류'}
                                place={'장소'}
                                payment={'결제수단'}
                            ></Category>
                        </TitleList>
                        <Price price={10000} />
                    </ExpendList>
                </>
            </Expenditure>
            <BottomNavigation />
        </Page>
    );
};

export default List;
