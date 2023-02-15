import React, { useState } from 'react';
import styled from 'styled-components';
import BottomNavigation from '../components/common/BottomNavigation';
import ShowCalendar from '../components/ui/ShowCalendar';
import Page from '../styles/Page';
import ExpendList from '../components/calendar/ExpendList';
import TitleList from '../components/calendar/TitleList';
import Title from '../components/calendar/Title';
import Category from '../components/calendar/Category';
import Price from '../components/calendar/Price';
import Expenditure from '../components/calendar/Expenditure';
import Datelist from '../components/calendar/Datelist';
import Perdaytotal from '../components/calendar/Perdaytotal';
import Header from '../components/Layout/Header';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import 'moment/locale/ko';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Page>
            <Header title={'제목'} />
            <CalendarWrap>
                <ShowCalendar calendarType='US' onChange={setDate} />
            </CalendarWrap>
            <Expenditure>
                <Datelist date={'1일'} weekday={'월요일'} />
                <Perdaytotal counts={6} amounts={10000} />
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
            </Expenditure>
            <BottomNavigation />
        </Page>
    );
};

const CalendarWrap = styled.div`
    .react-calendar {
        width: 360px;
        max-width: 100%;
        border: 1px solid black;
        line-height: 1.25em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .react-calendar__navigation {
            width: 100%;
        }
    }
`;
export default Calendar;
