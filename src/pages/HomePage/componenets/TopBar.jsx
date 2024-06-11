import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icon/arrow.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  gap: 16px;
`;

const InputBox = styled.div`
  width: 300px;
  border: none;
  height: 44px;
  border-radius: 5px;
  background-color: white;
  text-align: left;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 17px;
  text-indent: 20px;
  line-height: 44px;
`;

const DirectionSearchButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.blue};
  display: block;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.3);
`;

const DirectionSearchText = styled.p`
  font-size: 8px;
  color: white;
`;

const TopBar = (currentName) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue); // 엔터 키를 눌렀을 때 입력한 텍스트 값 출력 -> 추후에 API 호출로 변경
    }
  };

  return (
    <Container>
      <InputBox>
        현재 위치:{" "}
        <span style={{ fontWeight: 500 }}>{currentName.currentName}</span>
      </InputBox>
      <DirectionSearchButton
        onClick={() => {
          navigate("/path");
        }}
      >
        <Arrow />
        <DirectionSearchText>길찾기</DirectionSearchText>
      </DirectionSearchButton>
    </Container>
  );
};

export default TopBar;
