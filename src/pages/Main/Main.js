import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../../components/KakaoMap/KakaoMap';
import HotelList from './components/HotelList';

const Main = () => {
  const [isMapView, setIsMapView] = useState(false);
  const [hotels, setHotels] = useState({});
  useEffect(() => {
    fetch(`http://hyggesil.com/hotels`)
      .then(response => response.json())
      .then(({ hotels }) => {
        setHotels(hotels);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <HotelListWrap>
      {isMapView ? (
        <KakaoMap
          type="main"
          data={hotels}
          size={{ width: '100vw', height: '90vh' }}
        />
      ) : (
        <HotelList />
      )}
      <MapBtn onClick={() => setIsMapView(prevState => !prevState)}>
        {isMapView ? '리스트보기' : '지도보기'}
      </MapBtn>
    </HotelListWrap>
  );
};

export default Main;

const HotelListWrap = styled.div`
  margin: 10px auto;
`;
export const MapBtn = styled.button`
  background-color: black;
  position: fixed;
  color: white;
  bottom: 100px;
  left: 47%;
  /* border: solid 1px #b0b0b0; */
  padding: 10px;
  width: 100px;
  height: 35px;
  z-index: 1;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
`;
