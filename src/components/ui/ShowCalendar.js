import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import GetDateList from '../../utils/GetDateList';

const ShowCalendar = ({ caldata }) => {
  //   const dateData = GetDateList(caldata);
  const data = caldata.map((item) => {
    return {
      date: moment(item.ehDate).format('YYYY-MM-DD'),
      price: item.ehPrice,
    };
  });

  const result = data.reduce((acc, cur) => {
    const arr = acc;
    const index = arr.findIndex((item) => item.date === cur.date);
    if (index >= 0) {
      arr[index].price += cur.price;
    } else if (index === -1) {
      arr.push(cur);
    }
    return arr;
  }, []);

  //   console.log('datedata', data);
  //   console.log('result', result);
  const [value, onChange] = useState(new Date());
  //   const [mark, setMark] = useState(dateData);
  //   useEffect(() => setMark(dateData), []);
  //   console.log(mark);

  //   const showTile = ({ date, view }) => {
  //     let html = [];

  //     // 우선 mark 와 같은 경우 item 을 리턴하여 저장한다.
  //     let obj = caldata.find((item, index) => {
  //       if (item.ehDate === moment(date).format('YYYY-MM-DD')) {
  //         return item;
  //       }
  //     });

  //     if (obj !== undefined) {
  //       html.push(<div> {obj.price}</div>);

  //       return (
  //         <DotWrapper>
  //           <Dot />
  //         </DotWrapper>
  //       );
  //     }

  //     return null;

  // if (mark.find((item) => item.date === moment(date).format('YYYY-MM-DD'))) {
  //   return (
  //     <DotWrapper>
  //       <Dot />
  //     </DotWrapper>
  //   );
  // }
  // return null;
  //   };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div>
      {result.length !== 0 && (
        <Calendar
          // onChange={onChange}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          tileContent={({ date, view }) => {
            let html = [];
            result.forEach((item) => {
              if (item.date === moment(date).format('2022-MM-DD')) {
                html.push(
                  <div style={{ width: 20, height: 20 }}>{item.price}</div>
                );
              }
            });
            return <div>{html}</div>;
          }}
        />
      )}
    </div>
  );
};

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    position: absolute;
    bottom: -20px;
    white-space: nowrap;
    font-size: 9px;
    color: ${colors.primary};
    transform: translateY(15%);
  }
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${colors.primary};
  border-radius: 50%;
  position: absolute;
  opacity: 0.8;
  left: 6px;
  top: -24px;
`;

export default ShowCalendar;
