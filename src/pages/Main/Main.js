import React from 'react';
import styled from 'styled-components';
import HotelList from './components/HotelList';

const Main = () => {
  return (
    <HotelListWrap>
      <HotelList />
    </HotelListWrap>
  );
};

export default Main;

const HotelListWrap = styled.div`
  margin: 10px auto;
`;
