import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyDatePicker } from '../../../styles/Content.styled';
import { CalendarContainer } from 'react-datepicker';
import moment from 'moment';
import { ko } from 'date-fns/esm/locale';
import { BookingButton, CountButton } from '../../../styles/Button.styled';
import {
  BookingForm,
  DateForm,
  CountForm,
  CheckForm,
  CenterForm,
} from '../../../styles/Form.styled';
import {
  BetweenDiv,
  Underline,
  H1,
  H2,
  UnderlinedH2,
  BoldH2,
  H3,
  BoldH3,
  Span,
  BigSpan,
} from '../../../styles/Content.styled';
import { CalendarFlexContainer } from '../../../styles/Container.styled';
import './DatePicker.css';

const Booking = ({ productData }) => {
  const [count, setCount] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const params = useParams();
  const [startDate, endDate] = dateRange;
  const checkInDate = startDate && moment(startDate).format('YYYY-MM-DD');
  const checkOutDate = endDate && moment(endDate).format('YYYY-MM-DD');
  const duration = moment
    .duration(moment(checkOutDate).diff(moment(checkInDate)))
    .asDays();
  const wonPrice =
    productData.length &&
    productData[params.id - 1].price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const sumPrice =
    productData.length &&
    (productData[params.id - 1].price * duration)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const CountUpHandler = () => {
    setCount(prev => prev + 1);
  };

  const CountDownHandler = () => {
    count > 0 && setCount(prev => prev + -1);
  };

  const MyContainer = ({ className, children }) => {
    return (
      <CalendarContainer className={className}>
        <H1>{!isNaN(duration) && `${duration}박`}</H1>
        <CalendarFlexContainer>{children}</CalendarFlexContainer>
      </CalendarContainer>
    );
  };

  return (
    <BookingForm duration={duration}>
      <div>
        <BigSpan>{`₩ ${wonPrice}`}</BigSpan>
        <Span>/박</Span>
      </div>
      <DateForm>
        <CheckForm>
          <CenterForm>
            <BoldH3>예약일</BoldH3>
          </CenterForm>

          <MyDatePicker
            className="custom-date-picker"
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div>
                <button
                  aria-label="Previous Month"
                  className="react-datepicker__navigation react-datepicker__navigation--previous"
                  style={
                    customHeaderCount === 1 ? { visibility: 'hidden' } : null
                  }
                  onClick={decreaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                    {'<'}
                  </span>
                </button>
                <span className="react-datepicker__current-month">
                  {monthDate.toLocaleString('kr-Kr', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className="react-datepicker__navigation react-datepicker__navigation--next"
                  style={
                    customHeaderCount === 0 ? { visibility: 'hidden' } : null
                  }
                  onClick={increaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                    {'>'}
                  </span>
                </button>
              </div>
            )}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={update => {
              setDateRange(update);
            }}
            isClearable={true}
            dateFormat="yyyy.MM.dd"
            locale={ko}
            monthsShown={2}
            showPopperArrow={false}
            calendarContainer={MyContainer}
            popperPlacement="auto"
          />
        </CheckForm>
        <CountForm>
          <H3>인원</H3>
          <CountButton onClick={CountDownHandler}>-</CountButton>
          <H2>{count}</H2>
          <CountButton onClick={CountUpHandler}>+</CountButton>
        </CountForm>
      </DateForm>
      <BookingButton>예약하기</BookingButton>
      <H3>예약 확정 전에는 요금이 청구되지 않습니다.</H3>
      <BetweenDiv duration={duration}>
        <UnderlinedH2>{`₩ ${wonPrice} x ${duration}박`}</UnderlinedH2>
        <H2>{`₩ ${sumPrice}`}</H2>
      </BetweenDiv>
      <Underline duration={duration} />
      <BetweenDiv duration={duration}>
        <BoldH2>총합계</BoldH2>
        <BoldH2>{`₩ ${sumPrice}`}</BoldH2>
      </BetweenDiv>
    </BookingForm>
  );
};

export default Booking;
