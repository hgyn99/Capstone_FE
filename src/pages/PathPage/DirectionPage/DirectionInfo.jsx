import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Walking from "../../../assets/icon/Walking.webp";
import React, { useState } from "react";
import TrafficDirection from "./TrafficDirection.jsx";

const Container = styled.div`
  background-color: white;
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  max-width: 390px;
  width: 95%;
  height: 180px;
  border-radius: 5px;
  border: 1.5px solid ${(props) => props.theme.blue};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Box1 = styled.div`
  text-indent: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 75%;
  gap: 10px;
  //background-color: red;
`;

const StartTimeBox = styled.div`
  color: ${(props) => props.theme.blue};
  font-weight: 600;
  font-size: 17px;
`;

const TimeBox = styled.div`
  color: black;
  font-weight: 700;
  font-size: 24px;
`;

const InfoBox = styled.div`
  color: ${(props) => props.theme.gray};
  font-weight: 500;
  font-size: 14px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 50%;
  //background-color: blue;
`;

const StartTimeList = styled.div`
  height: 80%;
  width: 80%;
  border-radius: 5px;
  border: 1.5px solid ${(props) => props.theme.blue};
  //background-color: blue;
  //color: ${(props) => props.theme.gray};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

const NavStartButton = styled.button`
  background-color: ${(props) => props.theme.blue};
  border: 1.5px solid ${(props) => props.theme.blue};
  display: flex;
  flex-direction: row;
  max-width: 390px;
  width: 100%;
  align-items: center;
  height: 25%;
  // line-height: 50px;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 17px;
  position: absolute;
  bottom: 0;
`;

const WalkingIcon = styled.img.attrs({
  src: Walking,
  alt: "Walking",
})`
  width: 20px;
  height: 30px;
  margin-right: 10px;
`;

const DirecrtionInfo = ({ onNavStartClick }) => {
  return (
    <Container>
      <Box1>
        <StartTimeBox>오전 8:27 출발</StartTimeBox>
        <TimeBox>25분</TimeBox>
        <InfoBox>1.6km | 횡단보도 3회</InfoBox>
      </Box1>
      {/* <Box2>
        <StartTimeList>추천 출발시간</StartTimeList>
      </Box2> */}

      <NavStartButton onClick={onNavStartClick}>
        <WalkingIcon />
        안내시작
      </NavStartButton>
    </Container>
  );
};

export default DirecrtionInfo;
