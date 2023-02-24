import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import CalendarContainer from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const BetweenDiv = styled.div`
  display: ${props => (isNaN(props.duration) ? 'none' : 'flex')};
  justify-content: space-between;
`;

export const Underline = styled.div`
  display: ${props => isNaN(props.duration) && 'none'};
  border-bottom: 1px solid ${props => props.theme.bg.border};
`;

export const H1 = styled.h1`
  font-size: 22px;
  font-weight: 300;
`;

export const H2 = styled.h2`
  font-size: 15px;
`;

export const UnderlinedH2 = styled(H2)`
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;
export const BoldH2 = styled(H2)`
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-size: 10px;
`;

export const BoldH3 = styled(H3)`
  font-weight: bold;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const BigSpan = styled(Span)`
  font-size: 20px;
  font-weight: bold;
`;

export const MyDatePicker = styled(DatePicker)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 50px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: black;
  text-align: center;
  transform: translate(-50%, -50%);
  &:focus {
    border-radius: 8px;
    outline: 2px solid black;
  }
`;

export const DoubleCalendarContainer = styled(CalendarContainer)`
  display: flex;
`;
