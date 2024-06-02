import styled from "styled-components";
import crossIcon from "../../assets/icon/cross.webp";
import backwardIcon from "../../assets/icon/backwardIcon.webp";
import pinIcon from "../../assets/icon/pinIcon.webp";
import pantoIcon from "../../assets/icon/pantoIcon.webp";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { ReactComponent as Arrow } from "../../assets/icon/arrow.svg";

const MainContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: green;
  gap: 5px;
  //border-bottom: 2px solid ${(props) => props.theme.gray};
`;

const InputBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.gray};
  height: 40px;
  //background-color: blue;
  //padding: 0 0px; // 상하 여백 0, 좌우 여백 10px
  //flex: 9;
`;
const InputBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: gray;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  gap: 10px;
  //background-color: blue;
  //padding: 0 0px; // 상하 여백 0, 좌우 여백 10px
  //flex: 9;
`;

const InputButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  //padding: 15px;
  text-indent: 10px;
  height: 40px;
  margin-left: 20px;
  //margin-top: 10px;
  //margin-bottom: 10px;
  text-align: left;
  width: 80%;
  border-radius: 3px;
  color: gray;
  &:focus {
    outline: none; // 기본 테두리 스타일 제거
    border: 2px solid ${(props) => props.theme.blue}; // 테두리 스타일 설정
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const CloseButton = styled.button`
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  width: 50px; 
  height: 50px;
`;
const BackwardButton = styled.button`
  background-image: url(${backwardIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  margin-left: 10px;
  width: 25px;
  height: 25px;
`;

const PantoButton = styled.button`
  margin-left: 40px;
  background-image: url(${pantoIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  width: 25px;
  height: 25px;
`;

const PinButton = styled.button`
  background-image: url(${pinIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  width: 25px; // Adjust as needed
  height: 25px; // Adjust as needed
`;

const DirectionSearchButton = styled.button`
  width: 33px;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.blue};
  display: block;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.3);
`;

const DirectionSearchText = styled.p`
  font-size: 6px;
  color: white;
`;

const SearchingBar = () => {
  const [isDepartureInputClicked, setDepartureInputClicked] = useState(false);
  const [departureInput, setDepartureInput] = useState("");

  const handleDepartureInputClick = () => {
    setDepartureInputClicked(true);
  };

  const handleBackwardButtonClick = (event) => {
    event.stopPropagation();
    setDepartureInputClicked(false); // 출발지 버튼 클릭 상태 0으로 함
  };

  const handleInputChange = (event) => {
    setDepartureInput(event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(departureInput);
    }
  };
  return (
    <MainContainer>
    <InputBox1>
      {isDepartureInputClicked ? (
        <InputButton     
        as="input"
        type="text"
        //placeholder="출발지 입력"
        value={departureInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
         />
      ) : (
        <InputButton onClick={handleDepartureInputClick}>출발지 입력</InputButton>
      )}
      {isDepartureInputClicked ? (
        <BackwardButton onClick={handleBackwardButtonClick} />
      ) : (
        <Link to="/">
          <CloseButton />
        </Link>
      )}
    </InputBox1>
    {/* <InputBox2 center={isDepartureInputClicked}> */}
    <InputBox2>
      {isDepartureInputClicked ? (
        <>
          <PantoButton />
          <span style={{ marginRight: '40px' }}>현재 위치</span>
          <Link to="/pathsearch" style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
          <PinButton />
          <span>지도에서 선택</span>
          </Link>
        </>
      ) : (
        <>
        <InputButton>도착지 입력</InputButton>
        <DirectionSearchButton
        onClick={() => {
          console.log("주소 서버 전송 및 경로 좌표 받아오기");
        }}
      >
        <Link to="/direction">
          <Arrow />
          <DirectionSearchText>길찾기</DirectionSearchText>
        </Link>
      </DirectionSearchButton>
        </>
      )}
    </InputBox2>
    </MainContainer>
  );
};

export default SearchingBar;
