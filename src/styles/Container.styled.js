import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.bg.common};
`;

export const CalendarWrapperContainer = styled(StyledContainer)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  background: #ffffff;
`;

export const CalendarFlexContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
`;
