import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  /* margin: auto; */
  width: 100%;
  height: 100px;
  top: 0;
  /* padding :  */
  z-index: 4;
  position: fixed;
  /* border-radius: 40px; */
  /* border: solid 2px black; */
  justify-content: center;
  background-color: white;
`;

export const HotelContainer = styled.div`
  display: grid;
  margin: 80px auto 20px auto;
  width: 70%;
  grid-template-columns: auto auto auto auto;
  /* border: solid 1px black; */
  column-gap: 20px;
`;

export const FilterDiv = styled.div`
  display: flex;
  /* width: 120px; */

  button {
    margin-right: 20px;
    margin-left: 20px;
    background-color: white;
    font-size: 20px;
    border: none;
    color: #b0b0b0;
    border-bottom: solid 3px #b0b0b0;

    &:hover {
      color: black;
      font-weight: bold;
      border-bottom: solid 3px black;
    }
  }
`;

export const Icon = styled.div`
  font-size: 50px;
  text-align: center;
`;
export const FilterBtn = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  border: solid 1px black;
  margin-left: 30px;
  right: 16%;
  top: 32%;
  /* border-radius: 10px; */
  font-size: 15px;
  background-color: white;
  cursor: pointer;
`;

export const Anim = styled.button`
  background-size: 400% 400%;
  animation: gradient1 5s ease infinite;

  @keyframes gradient1 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradient2 {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;

export const Footer = styled.div`
  /* width: ; */
  text-align: center;
  /* margin: auto; */
  /* border: solid 1px black; */
`;

export const PageBtn = styled.button`
  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border: solid 1px #b0b0b0;
  padding: 10px;
  width: 50px;
  height: 35px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
`;
