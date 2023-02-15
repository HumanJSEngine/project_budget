import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
import 'moment/locale/ko';
import useFetch from '../hooks/useFetch';
import GetTotal from '../utils/GetTotal';

const Calendar = () => {
    const caldata = useFetch(
        'get',
        'http://haeji.mawani.kro.kr:8585/api/expense/page?ehMiSeq=2&page=0&size=20'
    );
    console.log(caldata);

    return (
        <Page>
            <Header title={'제목'} />
            <CalendarWrap>
                <ShowCalendar caldata={caldata} />
            </CalendarWrap>
            <Expenditure>
                <Datelist date={'1일'} weekday={'월요일'} />
                <Perdaytotal
                    counts={caldata.length}
                    amounts={GetTotal(caldata)}
                />
                <hr />
                {caldata.map((item) => (
                    <ExpendList key={item.ehSeq}>
                        <TitleList>
                            <Title title={item.ehTitle} />
                            <Category
                                culture={item.ehContent}
                                place={item.ehLocation}
                                payment={item.ehCcSeq}
                            ></Category>
                        </TitleList>
                        <Price price={item.ehPrice} />
                    </ExpendList>
                ))}
            </Expenditure>
            <BottomNavigation />
        </Page>
    );
};

const CalendarWrap = styled.div`
    .react-calendar {
        width: 100%;
        max-width: 380px;
        line-height: 1.25em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .react-calendar__navigation {
            width: 100%;
        }
        .react-calendar__viewContainer {
            .react-calendar__month-view {
                .react-calendar__month-view__days {
                    height: 280px;
                }
            }
        }
    }
`;
export default Calendar;
