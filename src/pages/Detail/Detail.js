import React, { useEffect, useState } from 'react';
import Booking from './Booking/Booking';

const Detail = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/price.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);
  return <Booking productData={productData} />;
};

export default Detail;
