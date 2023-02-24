import styled from 'styled-components';

export const StyledForm = styled.div`
  background-color: ${props => props.theme.bg.common};
`;

export const BookingForm = styled(StyledForm)`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  min-height: ${props => (props.duration ? '400px' : '320px')};
  padding: 24px;
  border: 1px solid ${props => props.theme.bg.border};
  border-radius: 12px;
`;

export const DateForm = styled(StyledForm)`
  min-height: 50px;
  border: 1px solid ${props => props.theme.bg.boldBorder};
  border-radius: 8px;
  border-collapse: collapse;
`;

export const CountForm = styled(StyledForm)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 50px;
  margin-bottom: 5px;
  border-top: 1px solid ${props => props.theme.bg.boldBorder};
  font-size: 8px;
`;

export const CheckForm = styled(StyledForm)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin-top: 5px;
`;

export const CenterForm = styled(StyledForm)`
  position: absolute;
  padding: 5px;
  margin-bottom: 20px;
`;
