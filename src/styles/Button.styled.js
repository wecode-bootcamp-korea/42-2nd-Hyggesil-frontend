import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
`;

export const BookingButton = styled(StyledButton)`
  width: 100%;
  padding: 14px;
  background-color: ${props => props.theme.bg.button};
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.bg.common};
`;

export const CountButton = styled(StyledButton)`
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.bg.border};
  font-size: 15px;
`;
