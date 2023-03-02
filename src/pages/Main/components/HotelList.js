import React, { useState, useEffect } from 'react';
import Hotel from './Hotel';
import FilterModal from './FilterModals/FilterModal';
import * as S from './HotelList.styled';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { useLocation, useSearchParams } from 'react-router-dom';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [initFilter, setInitFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    price_min: 0,
    price_max: 1000000,
    bedrooms: null,
    bathrooms: null,
    beds: null,
    area_id: null,
    convenients: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // const URL = `http://10.58.52.190:4000/hotels${location.search}`;
    // fetch(URL)
    const MOCK = `data/hotellist.json?${location.search}`;
    console.log('mock', MOCK);
    fetch(MOCK)
      .then(response => response.json())
      .then(({ hotels }) => {
        setHotels(hotels);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [selectedFilters]);

  const handleOpenModal = () => {
    setInitFilter(!initFilter);
    setIsFilterModalOpen(true);
  };

  const filterByAreaId = areaId => {
    setSelectedFilters({
      ...selectedFilters,
      area_id: areaId,
    });
    if (areaId === null) {
      searchParams.delete('area_id');
    } else {
      searchParams.set('area_id', areaId);
    }
    setSearchParams(searchParams);
  };
  const movePage = pageNum => {
    setCurrentPage(pageNum);
    searchParams.set('page', pageNum);
    setSearchParams(searchParams);
  };
  const pageCount = Math.ceil(hotels.length / 5);

  useEffect(() => {
    searchParams.delete('price_min');
    searchParams.delete('price_max');
    searchParams.delete('bedrooms');
    searchParams.delete('bathrooms');
    searchParams.delete('beds');
    searchParams.delete('convenients');
    setSearchParams(searchParams);
  }, [initFilter]);
  return (
    <>
      <S.FilterWrap>
        {FILTER_BUTTON_LIST.map(button => (
          <S.FilterDiv key={button.id}>
            <button onClick={() => filterByAreaId(button.id)}>
              {button.name}
            </button>
          </S.FilterDiv>
        ))}
        <S.FilterBtn onClick={handleOpenModal}>
          <HiOutlineAdjustmentsHorizontal /> 필터
        </S.FilterBtn>
      </S.FilterWrap>

      <S.HotelContainer>
        {hotels.map(hotel => {
          return <Hotel key={hotel.id} hotel={hotel} />;
        })}
      </S.HotelContainer>
      <S.Footer>
        {Array.from({ length: pageCount }).map((_, index) => (
          <S.PageBtn
            key={index}
            selected={currentPage === index + 1}
            onClick={() => movePage(index + 1)}
          >
            {index + 1}
          </S.PageBtn>
        ))}
      </S.Footer>
      {isFilterModalOpen === true ? (
        <FilterModal
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setIsFilterModalOpen={setIsFilterModalOpen}
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
          isFilterModalOpen={isFilterModalOpen}
        />
      ) : null}
    </>
  );
};

export default HotelList;

const FILTER_BUTTON_LIST = [
  { id: null, name: '전체보기' },
  { id: 1, name: '서울 동부' },
  { id: 2, name: '서울 서부' },
  { id: 3, name: '서울 남부' },
  { id: 4, name: '서울 북부' },
];
