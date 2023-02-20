import React, { useState, useEffect, useRef } from 'react';
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
import 'moment/locale/ko';
import Container from '../styles/Container';
import useFetch from '../hooks/useFetch';
import GetTotal from '../utils/GetTotal';

const Calendar = () => {
  const caldata = useFetch(
    'get',
    'http://haeji.mawani.kro.kr:8585/api/expense/list'
  );
  return (
    <Page>
      <Header title={'제목'} />
      <Container>
        <CalendarWrap>
          <ShowCalendar caldata={caldata} />
        </CalendarWrap>
        <Expenditure>
          <Datelist date={'1일'} weekday={'월요일'} />
          <Perdaytotal counts={caldata.length} amounts={GetTotal(caldata)} />
          <hr />
          {caldata.map(({ ehSeq, ehTitle, ehCcSeq, ehLocation, ehPrice }) => (
            <ExpendList key={ehSeq}>
              <TitleList>
                <Title title={ehTitle} />
                <Category
                  culture={ehCcSeq}
                  place={ehLocation}
                  payment={ehCcSeq}
                ></Category>
              </TitleList>
              <Price price={ehPrice} />
            </ExpendList>
          ))}
        </Expenditure>
      </Container>
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
