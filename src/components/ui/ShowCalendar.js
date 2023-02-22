import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';

const ShowCalendar = ({ caldata }) => {
  const data = caldata.map((item) => {
    return {
      date: moment(item.ehDate).format('YYYY-MM-DD'),
      price: item.ehPrice,
    };
  });
  const result = data.reduce((acc, cur) => {
    const index = acc.findIndex((item) => item.date === cur.date);
    if (index >= 0) {
      acc[index].price += cur.price;
    } else if (index === -1) {
      acc.push(cur);
    }
    return acc;
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

    useEffect(() => {}, [result]);

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
                html.push(<DatePrice>+{item.price}</DatePrice>);
              } else {
                html.push(<DatePrice></DatePrice>);
              }
            });
            return <div>{html}</div>;
          }}
        />
      )}
    </div>
  );
};

const DatePrice = styled.span`
  width: 100%;
  color: ${colors.primary};
  font-size: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export default ShowCalendar;
