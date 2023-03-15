import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import KakaoMapMainMarker from './KakaoMapMainMarker';

const KakaoMapMain = ({ data, size: { width, height } }) => {
  const [toggles, setToggles] = useState([]);
  console.log(data);
  console.log(width);

  const handleToggle = index => {
    const newToggles = toggles.map((toggle, i) => {
      if (i === index) {
        return !toggle;
      } else {
        return toggles[index] === false ? false : toggle;
      }
    });

    setToggles(newToggles);
  };

  useEffect(() => {
    if (data) {
      setToggles(Array.from({ length: data.length }, () => false));
    }
  }, [data]);

  return (
    <Map
      center={{ lat: 37.541, lng: 126.986 }}
      style={{ width: width, height: height, zIndex: 0 }}
      level={8}
      disableDoubleClick={true}
    >
      {data.map(({ id, name, price, coordinate, images }, idx) => {
        return (
          <KakaoMapMainMarker
            key={id}
            id={id}
            name={name}
            price={price}
            coordinate={coordinate}
            images={images}
            toggle={toggles[idx]}
            handleToggle={() => handleToggle(idx)}
          />
        );
      })}
    </Map>
  );
};

export default KakaoMapMain;
