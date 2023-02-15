import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import GetDateList from '../../utils/GetDateList';

const ShowCalendar = ({ caldata }) => {
    const [value, onChange] = useState(new Date());
    const [mark, setMark] = useState(GetDateList(caldata));
    console.log(mark);
    return (
        <div>
            <Calendar
                onChange={onChange}
                formatDay={(locale, date) => moment(date).format('DD')}
                value={value}
                tileContent={({ date, view }) => {
                    if (
                        mark.find(
                            (item) => item === moment(date).format('YYYY-MM-DD')
                        )
                    )
                        return (
                            <DotWrapper>
                                <Dot />
                                <span className='dayexpense'>+20000</span>
                            </DotWrapper>
                        );
                }}
            />
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
